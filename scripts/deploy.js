async function main() {
    const [deployer] = await ethers.getSigners();
    console.log('Deploying contract with the account: ', deployer.address);

    const balance = await deployer.getBalance();
    console.log('Balance: ', balance.toString());

    const Token = await ethers.getContractFactory('Pureprana');
    const token = await Token.deploy('0xa87935dAa492517CE9Ffbdc659Cb44c96609b45A');
    console.log('Token address: ', token.address);
}

main().then( ()=> {
    process.exit(0)
}).catch( (er) => {
    console.log(er);
    process.exit(1)
});

