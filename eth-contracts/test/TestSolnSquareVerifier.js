const Verifier = artifacts.require('Verifier');
const SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
const proofSuccess = require('../config/proof.json');
const proofInvalid = require('../config/proof-invalid.json');

contract('Verifier', accounts => {

    const owner = accounts[0];
    const name = 'Ext-CapstoneProject';
    const symbol = 'RST';
    const tokenId1 = 11;
    const tokenUri1 = 'https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/' + tokenId1;
    let result;

    describe('Test SolnSquareVerifier Contract to add solutions', () => {
        before(async () => { 
            this.contractVerifier = await Verifier.new({from: owner});
            this.contractSolnSquareVerifier = await SolnSquareVerifier.new(this.contractVerifier.address, name, symbol, {from: owner});
        });

        // Test if a new solution can be added for contract - SolnSquareVerifier
        it('Test if a new solution can be added for contract - SolnSquareVerifier', async () => {
            tx = await this.contractSolnSquareVerifier.addSolution(
                owner,
                proofSuccess.proof.a,
                proofSuccess.proof.b,
                proofSuccess.proof.c,
                proofSuccess.inputs,
                {from: owner});
            
            assert.equal(tx.logs[0].event, 'SolutionAdded');
            assert.equal(tx.logs[0].args.solutionAddress, owner);
        });

        it('Try to add the same solution as before and an exception shall happen', async () => {
            await expectThrow(this.contractSolnSquareVerifier.addSolution(
                owner,
                proofSuccess.proof.a,
                proofSuccess.proof.b,
                proofSuccess.proof.c,
                proofSuccess.inputs,
                {from: owner})
            );
        });

        it('Try to add a solution which is not valid', async () => {
            await expectThrow(this.contractSolnSquareVerifier.addSolution(
                owner,
                proofInvalid.proof.a,
                proofInvalid.proof.b,
                proofInvalid.proof.c,
                proofInvalid.inputs,
                {from: owner}));
        });
    });

    describe('Test SolnSquareVerifier Contract to mint ERC721 Token', () => {
        before(async () => { 
            this.contractVerifier = await Verifier.new({from: owner});
            this.contractSolnSquareVerifier = await SolnSquareVerifier.new(this.contractVerifier.address, name, symbol, {from: owner});
        });

        // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
        it('Test if an ERC721 token can be minted for contract - SolnSquareVerifier', async () => {
            tx = await this.contractSolnSquareVerifier.mintNFT(
                owner,
                tokenId1,
                proofSuccess.proof.a,
                proofSuccess.proof.b,
                proofSuccess.proof.c,
                proofSuccess.inputs,
                {from: owner});
            
            assert.equal(tx.logs[0].event, 'SolutionAdded');
            assert.equal(tx.logs[1].event, 'Transfer');
            assert.equal(tx.logs[2].event, 'TokenMint');
            assert.equal(tx.logs[2].args.tokenId, tokenId1);
            assert.equal(tx.logs[2].args.to, owner);
        });

        it('Check total supply', async () => {
            result = await this.contractSolnSquareVerifier.totalSupply.call({from: owner});
            // Check the result total supply
            assert.equal(result, 1, 'Error: Invalid total supply');
        });

        it('Check token uri for the token added', async () => {
            // Get token uri for token Id 1
            result = await this.contractSolnSquareVerifier.tokenURI(tokenId1, {from: owner});
            // Check the result balance of
            assert.equal(result, tokenUri1, 'Error: Invalid token uri 1');

        });
    });

});

const expectThrow = async (promise) => {
    try {
        await promise;
    } catch (error) {
        assert.exists(error);
        return;
    }

    assert.fail('Expected an error but didnt see one!');
};