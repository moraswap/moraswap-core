import { ethers, network } from "hardhat"
import { expect } from "chai"

describe("Arom", function () {
  before(async function () {
    this.Mora = await ethers.getContractFactory("Mora")
    this.Arom = await ethers.getContractFactory("Arom")

    this.signers = await ethers.getSigners()
    this.alice = this.signers[0]
    this.bob = this.signers[1]
    this.carol = this.signers[2]
  })

  beforeEach(async function () {
    this.mora = await this.Mora.deploy()
    this.arom = await this.Arom.deploy(this.mora.address)
    this.mora.mint(this.alice.address, "100")
    this.mora.mint(this.bob.address, "100")
    this.mora.mint(this.carol.address, "100")
  })

  it("should not allow enter if not enough approve", async function () {
    await expect(this.arom.enter("100")).to.be.revertedWith("ERC20: transfer amount exceeds allowance")
    await this.mora.approve(this.arom.address, "50")
    await expect(this.arom.enter("100")).to.be.revertedWith("ERC20: transfer amount exceeds allowance")
    await this.mora.approve(this.arom.address, "100")
    await this.arom.enter("100")
    expect(await this.arom.balanceOf(this.alice.address)).to.equal("100")
  })

  it("should not allow withraw more than what you have", async function () {
    await this.mora.approve(this.arom.address, "100")
    await this.arom.enter("100")
    await expect(this.arom.leave("200")).to.be.revertedWith("ERC20: burn amount exceeds balance")
  })

  it("should work with more than one participant", async function () {
    await this.mora.approve(this.arom.address, "100")
    await this.mora.connect(this.bob).approve(this.arom.address, "100", { from: this.bob.address })
    // Alice enters and gets 20 shares. Bob enters and gets 10 shares.
    await this.arom.enter("20")
    await this.arom.connect(this.bob).enter("10", { from: this.bob.address })
    expect(await this.arom.balanceOf(this.alice.address)).to.equal("20")
    expect(await this.arom.balanceOf(this.bob.address)).to.equal("10")
    expect(await this.mora.balanceOf(this.arom.address)).to.equal("30")
    // Arom get 20 more MORAs from an external source.
    await this.mora.connect(this.carol).transfer(this.arom.address, "20", { from: this.carol.address })
    // Alice deposits 10 more MORAs. She should receive 10*30/50 = 6 shares.
    await this.arom.enter("10")
    expect(await this.arom.balanceOf(this.alice.address)).to.equal("26")
    expect(await this.arom.balanceOf(this.bob.address)).to.equal("10")
    // Bob withdraws 5 shares. He should receive 5*60/36 = 8 shares
    await this.arom.connect(this.bob).leave("5", { from: this.bob.address })
    expect(await this.arom.balanceOf(this.alice.address)).to.equal("26")
    expect(await this.arom.balanceOf(this.bob.address)).to.equal("5")
    expect(await this.mora.balanceOf(this.arom.address)).to.equal("52")
    expect(await this.mora.balanceOf(this.alice.address)).to.equal("500000000000000000000000070")
    expect(await this.mora.balanceOf(this.bob.address)).to.equal("98")
  })

  after(async function () {
    await network.provider.request({
      method: "hardhat_reset",
      params: [],
    })
  })
})