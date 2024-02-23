import {expect, assert} from "chai";
import {ethers} from "hardhat";
import {loadFixture} from "@nomicfoundation/hardhat-toolbox/network-helpers";

describe("Vault Grant", () => {
    const deployVault = async () => {
        const [owner, otherAccount] = await ethers.getSigners();

        const Vault = await ethers.getContractFactory("Vault");
        const vault = await Vault.deploy();

        return {owner, otherAccount, vault}
    }

    describe("Deployment", async () => {
        it('should deploy',
            async () => {
                const {vault} = await loadFixture(deployVault);

                expect(vault.target).to.be.properAddress;
            });
    });

    describe("Give grant", async () => {
        it('should give grant', async () => {
            const {otherAccount, vault} = await loadFixture(deployVault);
            await vault.giveGrant(otherAccount.address, "grant_1", 10000, {value: 3000});

            let grantCheck = await vault.hasGrant(otherAccount.address);
            // expect(grantCheck).to.be.true;
            assert.isTrue(grantCheck);
            const
        });
    });
});