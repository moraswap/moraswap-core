import { ethers, network } from "hardhat"
import { expect } from "chai"

describe("Mora", function () {
  before(async function () {
    this.Mora = await ethers.getContractFactory("Mora")
    this.signers = await ethers.getSigners()
    this.alice = this.signers[0]
    this.bob = this.signers[1]
    this.carol = this.signers[2]
  })

  beforeEach(async function () {
    this.mora = await this.Mora.deploy()
    await this.mora.deployed()
  })

  it("should have correct name and symbol and decimal", async function () {
    const name = await this.mora.name()
    const symbol = await this.mora.symbol()
    const decimals = await this.mora.decimals()
    expect(name, "Mora")
    expect(symbol, "MORA")
    expect(decimals, "18")
  })

  it("should only allow owner to mint token", async function () {
    await this.mora.mint(this.alice.address, "100")
    await this.mora.mint(this.bob.address, "1000")
    await expect(this.mora.connect(this.bob).mint(this.carol.address, "1000", { from: this.bob.address })).to.be.revertedWith(
      "Ownable: caller is not the owner"
    )
    const totalSupply = await this.mora.totalSupply()
    const aliceBal = await this.mora.balanceOf(this.alice.address)
    const bobBal = await this.mora.balanceOf(this.bob.address)
    const carolBal = await this.mora.balanceOf(this.carol.address)
    expect(totalSupply).to.equal("1100")
    expect(aliceBal).to.equal("100")
    expect(bobBal).to.equal("1000")
    expect(carolBal).to.equal("0")
  })

  it("should supply token transfers properly", async function () {
    await this.mora.mint(this.alice.address, "100")
    await this.mora.mint(this.bob.address, "1000")
    await this.mora.transfer(this.carol.address, "10")
    await this.mora.connect(this.bob).transfer(this.carol.address, "100", {
      from: this.bob.address,
    })
    const totalSupply = await this.mora.totalSupply()
    const aliceBal = await this.mora.balanceOf(this.alice.address)
    const bobBal = await this.mora.balanceOf(this.bob.address)
    const carolBal = await this.mora.balanceOf(this.carol.address)
    expect(totalSupply, "1100")
    expect(aliceBal, "90")
    expect(bobBal, "900")
    expect(carolBal, "110")
  })

  it("should fail if you try to do bad transfers", async function () {
    await this.mora.mint(this.alice.address, "100")
    await expect(this.mora.transfer(this.carol.address, "110")).to.be.revertedWith("ERC20: transfer amount exceeds balance")
    await expect(this.mora.connect(this.bob).transfer(this.carol.address, "1", { from: this.bob.address })).to.be.revertedWith(
      "ERC20: transfer amount exceeds balance"
    )
  })

  it("should not exceed max supply of 1b", async function () {
    await expect(this.mora.mint(this.alice.address, "500000000000000000000000001")).to.be.revertedWith("MORA::mint: cannot exceed max supply")
    await this.mora.mint(this.alice.address, "500000000000000000000000000")
  })

  after(async function () {
    await network.provider.request({
      method: "hardhat_reset",
      params: [],
    })
  })
})