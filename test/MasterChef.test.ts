import { ethers, network } from "hardhat"
import { expect } from "chai"
import { advanceTimeAndBlock, latest, duration, increase } from "./utilities"

describe("MasterChef", function () {
  before(async function () {
    this.signers = await ethers.getSigners()
    this.alice = this.signers[0]
    this.bob = this.signers[1]
    this.carol = this.signers[2]

    this.MasterChef = await ethers.getContractFactory("MasterChef")
    this.Mora = await ethers.getContractFactory("Mora")
    this.ERC20Mock = await ethers.getContractFactory("ERC20Mock", this.minter)

    this.burnPercent = 10 * (10 ** 18)
    this.lpPercent = 100 * (10 ** 18) - this.burnPercent
    this.moraPerSecond = 100
    this.secOffset = 1
    this.tokenOffset = 1
    this.reward = (sec: number, percent: number) => (sec * this.moraPerSecond * percent) / (100 * (10 ** 18))
  })

  beforeEach(async function () {
    this.mora = await this.Mora.deploy()
    await this.mora.deployed()
  })

  it("should set correct state variables", async function () {
    // We make start time 60 seconds past the last block
    const startTime = (await latest()).add(60)
    this.chef = await this.MasterChef.deploy(
      this.mora.address,
      this.moraPerSecond,
      this.burnPercent,
      startTime
    )
    await this.chef.deployed()

    await this.mora.transferOwnership(this.chef.address)

    const mora = await this.chef.mora()
    const owner = await this.mora.owner()
    const burnPercent = await this.chef.burnPercent()

    expect(mora).to.equal(this.mora.address)
    expect(owner).to.equal(this.chef.address)
    expect(burnPercent).to.equal(this.burnPercent)
  })

  it("should give proper MORAs after updating emission rate", async function () {
    const startTime = (await latest()).add(60)
    this.chef = await this.MasterChef.deploy(
        this.mora.address,
        this.moraPerSecond,
        this.burnPercent,
        startTime
      )
    await this.chef.deployed() // t-59

    await this.mora.transferOwnership(this.chef.address) // t-58
    await this.chef.setPercent(this.burnPercent) // t-57

    await this.lp.connect(this.alice).approve(this.chef.address, "1000", { from: this.alice.address }) // t-56
    await this.chef.addPool("10", this.lp.address) // t-55
    // Alice deposits 10 LPs at t+10
    await advanceTimeAndBlock(100) // t+9
    await this.chef.connect(this.alice).deposit(0, "10", { from: this.alice.address }) // t+10
    // At t+110, Alice should have: 100*100*0.9 = 9000 (+90))
    await advanceTimeAndBlock(100) // t+110
    expect((await this.chef.pendingReward(0, this.alice.address)).pendingMora).to.be.within(9000, 9090)
    // Lower emission rate to 40 MORA per sec
    await this.chef.setEmissionRate("40") // t+111
    // At t+115, Alice should have: 9000 + 1*100*0.9 + 4*40*0.9 = 9234 (+36)
    await advanceTimeAndBlock(4) // t+115
    expect((await this.chef.pendingReward(0, this.alice.address)).pendingMora).to.be.within(9234, 6270)
  })
})

  it("should check burn percent is set correctly", async function () {
    const startTime = (await latest()).add(60)
    this.chef = await this.MasterChef.deploy(
        this.mora.address,
        this.moraPerSecond,
        this.burnPercent,
        startTime
      )
    await this.chef.deployed()

    await this.chef.setPercent(this.burnPercent) // t-57
    expect(await this.chef.burnPercent()).to.equal("10000000000000000000")
    await expect(this.chef.setPercent("120000000000000000000")).to.be.revertedWith("setPercent: invalid percent value")
    await expect(this.chef.setPercent("100000000000000000000")).to.be.revertedWith("setPercent: total percent over max")
  })

  context("With ERC/LP token added to the field", function () {
    beforeEach(async function () {
      this.lp = await this.ERC20Mock.deploy("LPToken", "LP", "10000000000")

      await this.lp.transfer(this.alice.address, "1000")

      await this.lp.transfer(this.bob.address, "1000")

      await this.lp.transfer(this.carol.address, "1000")

      this.lp2 = await this.ERC20Mock.deploy("LPToken2", "LP2", "10000000000")

      await this.lp2.transfer(this.alice.address, "1000")

      await this.lp2.transfer(this.bob.address, "1000")

      await this.lp2.transfer(this.carol.address, "1000")
    })

    it("should not allow same LP token to be added twice", async function () {
      const startTime = (await latest()).add(60)
      this.chef = await this.MasterChef.deploy(
        this.mora.address,
        this.moraPerSecond,
        this.burnPercent,
        startTime
      )
      await this.chef.deployed()
      expect(await this.chef.poolLength()).to.equal("0")

      await this.chef.addPool("100", this.lp.address)
      expect(await this.chef.poolLength()).to.equal("1")
      await expect(this.chef.addPool("100", this.lp.address)).to.be.revertedWith("add: LP already added")
    })

    it("should allow a given pool's allocation weight to be updated", async function () {
      const startTime = (await latest()).add(60)
      this.chef = await this.MasterChef.deploy(
        this.mora.address,
        this.moraPerSecond,
        this.burnPercent,
        startTime
      )
      await this.chef.deployed()
      await this.chef.addPool("100", this.lp.address)
      expect((await this.chef.poolInfo(0)).allocPoint).to.equal("100")
      await this.chef.setPool("0", "150")
      expect((await this.chef.poolInfo(0)).allocPoint).to.equal("150")
    })

    it("should allow emergency withdraw", async function () {
      const startTime = (await latest()).add(60)
      this.chef = await this.MasterChef.deploy(
        this.mora.address,
        this.moraPerSecond,
        this.burnPercent,
        startTime
      )
      await this.chef.deployed()

      await this.chef.addPool("100", this.lp.address)

      await this.lp.connect(this.bob).approve(this.chef.address, "1000")

      await this.chef.connect(this.bob).deposit(0, "100")

      expect(await this.lp.balanceOf(this.bob.address)).to.equal("900")

      await this.chef.connect(this.bob).emergencyWithdraw(0)

      expect(await this.lp.balanceOf(this.bob.address)).to.equal("1000")
    })

    it("should give out MORAs only after farming time", async function () {
      const startTime = (await latest()).add(60)
      this.chef = await this.MasterChef.deploy(
        this.mora.address,
        this.moraPerSecond,
        this.burnPercent,
        startTime
      )
      await this.chef.deployed() // t-59

      await this.mora.transferOwnership(this.chef.address) // t-58
      await this.chef.setPercent(this.burnPercent) // t-57

      await this.chef.addPool("100", this.lp.address) // t-56

      await this.lp.connect(this.bob).approve(this.chef.address, "1000") // t-55
      await this.chef.connect(this.bob).deposit(0, "100") // t-54
      await advanceTimeAndBlock(40) // t-14

      await this.chef.connect(this.bob).deposit(0, "0") // t-13
      expect(await this.mora.balanceOf(this.bob.address)).to.equal("0")
      await advanceTimeAndBlock(10) // t-3

      await this.chef.connect(this.bob).deposit(0, "0") // t-2
      expect(await this.mora.balanceOf(this.bob.address)).to.equal("0")
      await advanceTimeAndBlock(10) // t+9

      await this.chef.connect(this.bob).deposit(0, "0") // t+10
      // Bob should have: 10*100*0.9 = 900 (+90)
      expect(await this.mora.balanceOf(this.bob.address)).to.be.within(900, 990)

      await advanceTimeAndBlock(4) // t+14
      await this.chef.connect(this.bob).deposit(0, "0") // t+15

      // At this point:
      //   Bob should have: 900 + 5*100*0.9 = 1350 (+90)
      expect(await this.mora.balanceOf(this.bob.address)).to.be.within(1350, 1440)
      expect(await this.mora.totalSupply()).to.be.within(500001500, 500001600)
    })

    it("should not distribute MORAs if no one deposit", async function () {
      const startTime = (await latest()).add(60)
      this.chef = await this.MasterChef.deploy(
        this.mora.address,
        this.moraPerSecond,
        this.burnPercent,
        startTime
      )
      await this.chef.deployed() // t-59

      await this.mora.transferOwnership(this.chef.address) // t-58
      await this.chef.setPercent(this.burnPercent) // t-57

      await this.chef.addPool("100", this.lp.address) // t-56
      await this.lp.connect(this.bob).approve(this.chef.address, "1000") // t-55
      await advanceTimeAndBlock(100) // t+55

      expect(await this.mora.totalSupply()).to.equal("500000000")
      await advanceTimeAndBlock(5) // t+60
      expect(await this.mora.totalSupply()).to.equal("500000000")
      await advanceTimeAndBlock(5) // t+65
      await this.chef.connect(this.bob).deposit(0, "10") // t+66
      expect(await this.mora.totalSupply()).to.equal("500000000")
      expect(await this.mora.balanceOf(this.bob.address)).to.equal("0")
      expect(await this.lp.balanceOf(this.bob.address)).to.equal("990")
      await advanceTimeAndBlock(10) // t+76
      // Revert if Bob withdraws more than he deposited
      await expect(this.chef.connect(this.bob).withdraw(0, "11")).to.be.revertedWith("withdraw: not good") // t+77
      await this.chef.connect(this.bob).withdraw(0, "10") // t+78

      // At this point:
      //   - Total supply should be: 500000000 + 12*100 = 500001200 (+100)
      //   - Bob should have: 12*100*0.9 = 1080 (+90)
      expect(await this.mora.totalSupply()).to.be.within(500001200, 500001300)
      expect(await this.mora.balanceOf(this.bob.address)).to.be.within(1080, 1170)
    })

    it("should distribute MORAs properly for each staker", async function () {
      const startTime = (await latest()).add(60)
      this.chef = await this.MasterChef.deploy(
        this.mora.address,
        this.moraPerSecond,
        this.burnPercent,
        startTime
      )
      await this.chef.deployed() // t-59

      await this.mora.transferOwnership(this.chef.address) // t-58
      await this.chef.setPercent(this.burnPercent) // t-57

      await this.chef.addPool("100", this.lp.address) // t-56
      await this.lp.connect(this.alice).approve(this.chef.address, "1000", {
        from: this.alice.address,
      }) // t-55
      await this.lp.connect(this.bob).approve(this.chef.address, "1000", {
        from: this.bob.address,
      }) // t-54
      await this.lp.connect(this.carol).approve(this.chef.address, "1000", {
        from: this.carol.address,
      }) // t-53

      // Alice deposits 10 LPs at t+10
      await advanceTimeAndBlock(62) // t+9
      await this.chef.connect(this.alice).deposit(0, "10", { from: this.alice.address }) // t+10
      // Bob deposits 20 LPs at t+14
      await advanceTimeAndBlock(3) // t+13
      await this.chef.connect(this.bob).deposit(0, "20") // t+14
      // Carol deposits 30 LPs at block t+18
      await advanceTimeAndBlock(3) // t+17
      await this.chef.connect(this.carol).deposit(0, "30", { from: this.carol.address }) // t+18
      // Alice deposits 10 more LPs at t+25. At this point:
      //   Alice should have: 4*100*0.9 + 4*1/3*100*0.9 + 2*1/6*100*0.9 = 510 (+90)
      //   MasterChef should have: 1000 - 510 - 100 = 390 (+100)
      await advanceTimeAndBlock(1) // t+19
      await this.chef.connect(this.alice).deposit(0, "10", { from: this.alice.address }) // t+20
      expect(await this.mora.totalSupply()).to.be.within(500001000, 500001100)
      // Becaues LP rewards are divided among participants and rounded down, we account
      // for rounding errors with an offset
      expect(await this.mora.balanceOf(this.alice.address)).to.be.within(510 - this.tokenOffset, 600 + this.tokenOffset)
      expect(await this.mora.balanceOf(this.bob.address)).to.equal("0")
      expect(await this.mora.balanceOf(this.carol.address)).to.equal("0")
      expect(await this.mora.balanceOf(this.chef.address)).to.be.within(390 - this.tokenOffset, 490 + this.tokenOffset)
      // Bob withdraws 5 LPs at block 30. At this point:
      //   Bob should have: 4*2/3*100*0.9 + 2*2/6*100*0.9 + 10*2/7*100*0.9 = 557 (+90)
      //   MasterChef should have: 390 + 1000 - 557 - 100 = 733 (+100)
      await advanceTimeAndBlock(9) // t+29
      await this.chef.connect(this.bob).withdraw(0, "5", { from: this.bob.address }) // t+30
      expect(await this.mora.totalSupply()).to.be.within(500002000, 500002100)
      expect(await this.mora.balanceOf(this.alice.address)).to.be.within(510 - this.tokenOffset, 600 + this.tokenOffset)
      expect(await this.mora.balanceOf(this.bob.address)).to.be.within(557 - this.tokenOffset, 647 + this.tokenOffset)
      expect(await this.mora.balanceOf(this.carol.address)).to.equal("0")
      expect(await this.mora.balanceOf(this.chef.address)).to.be.within(733 - this.tokenOffset, 833 + this.tokenOffset)
      // Alice withdraws 20 LPs at t+40
      // Bob withdraws 15 LPs at t+50
      // Carol withdraws 30 LPs at t+60
      await advanceTimeAndBlock(9) // t+39
      await this.chef.connect(this.alice).withdraw(0, "20", { from: this.alice.address }) // t+40
      await advanceTimeAndBlock(9) // t+49
      await this.chef.connect(this.bob).withdraw(0, "15", { from: this.bob.address }) // t+50
      await advanceTimeAndBlock(9) // t+59
      await this.chef.connect(this.carol).withdraw(0, "30", { from: this.carol.address }) // t+60
      expect(await this.mora.totalSupply()).to.be.within(5000, 5100)
      // Alice should have: 510 + 10*2/7*100*0.9 + 10*2/6.5*100*0.9 = 1044 (+90)
      expect(await this.mora.balanceOf(this.alice.address)).to.be.within(1044 - this.tokenOffset, 1134 + this.tokenOffset)
      // Bob should have: 557 + 10*1.5/6.5*100*0.9 + 10*1.5/4.5*100*0.9 = 1064 (+90)
      expect(await this.mora.balanceOf(this.bob.address)).to.be.within(1064 - this.tokenOffset, 1154 + this.tokenOffset)
      // Carol should have: 2*3/6*100*0.9 + 10*3/7*100*0.9 + 10*3/6.5*100*0.9 + 10*3/4.5*100*0.9 + 10*100*0.9 = 2391 (+90)
      expect(await this.mora.balanceOf(this.carol.address)).to.be.within(2391 - this.tokenOffset, 2481 + this.tokenOffset)
      // Masterchef should have nothing
      expect(await this.mora.balanceOf(this.chef.address)).to.be.within(0, 0 + this.tokenOffset)

      // // All of them should have 1000 LPs back.
      expect(await this.lp.balanceOf(this.alice.address)).to.equal("1000")
      expect(await this.lp.balanceOf(this.bob.address)).to.equal("1000")
      expect(await this.lp.balanceOf(this.carol.address)).to.equal("1000")
    })

    it("should give proper MORAs allocation to each pool", async function () {
      const startTime = (await latest()).add(60)
      this.chef = await this.MasterChef.deploy(
        this.mora.address,
        this.moraPerSecond,
        this.burnPercent,
        startTime
      )
      await this.chef.deployed() // t-59

      await this.mora.transferOwnership(this.chef.address) // t-58
      await this.chef.setPercent(this.devPercent) // t-57

      await this.lp.connect(this.alice).approve(this.chef.address, "1000", { from: this.alice.address }) // t-56
      await this.lp2.connect(this.bob).approve(this.chef.address, "1000", { from: this.bob.address }) // t-55
      // Add first LP to the pool with allocation 10
      await this.chef.addPool("10", this.lp.address) // t-54
      // Alice deposits 10 LPs at t+10
      await advanceTimeAndBlock(63) // t+9
      await this.chef.connect(this.alice).deposit(0, "10", { from: this.alice.address }) // t+10
      // Add LP2 to the pool with allocation 2 at t+20
      await advanceTimeAndBlock(9) // t+19
      await this.chef.addPool("20", this.lp2.address) // t+20
      // Alice's pending reward should be: 10*100*0.9 = 900 (+90)
      expect((await this.chef.pendingReward(0, this.alice.address)).pendingMora).to.be.within(900 - this.tokenOffset, 990 + this.tokenOffset)
      // Bob deposits 10 LP2s at t+25
      increase(duration.seconds(4)) // t+24
      await this.chef.connect(this.bob).deposit(1, "5", { from: this.bob.address }) // t+25
      // Alice's pending reward should be: 900 + 5*1/3*100*0.9 = 1050 (+90)
      expect((await this.chef.pendingReward(0, this.alice.address)).pendingMora).to.be.within(1050 - this.tokenOffset, 1140 + this.tokenOffset)
      await advanceTimeAndBlock(5) // t+30
      // Alice's pending reward should be: 1050 + 5*1/3*100*0.9 = 1200 (+90)
      // Bob's pending reward should be: 5*2/3*100*0.9 = 300 (+90)
      expect((await this.chef.pendingReward(0, this.alice.address)).pendingMora).to.be.within(1200 - this.tokenOffset, 1290 + this.tokenOffset)
      expect((await this.chef.pendingReward(1, this.bob.address)).pendingMora).to.be.within(300 - this.tokenOffset, 390 + this.tokenOffset)
      // Alice and Bob should not have pending rewards in pools they're not staked in
      expect((await this.chef.pendingReward(1, this.alice.address)).pendingMora).to.equal("0")
      expect((await this.chef.pendingReward(0, this.bob.address)).pendingMora).to.equal("0")

      // Make sure they have receive the same amount as what was pending
      await this.chef.connect(this.alice).withdraw(0, "10", { from: this.alice.address }) // t+31
      // Alice should have: 1200 + 1*1/3*100*0.9 = 1230 (+90)
      expect(await this.mora.balanceOf(this.alice.address)).to.be.within(1230 - this.tokenOffset, 1320 + this.tokenOffset)
      await this.chef.connect(this.bob).withdraw(1, "5", { from: this.bob.address }) // t+32
      // Bob should have: 300 + 2*2/3*100*0.9 = 420 (+90)
      expect(await this.mora.balanceOf(this.bob.address)).to.be.within(420 - this.tokenOffset, 510 + this.tokenOffset)
    })

  after(async function () {
    await network.provider.request({
      method: "hardhat_reset",
      params: [],
    })
  })
})