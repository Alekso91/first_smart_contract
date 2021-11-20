const main = async () => {
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();

    console.log("WavePortal contract deployed by account : ", deployer.address);
    console.log("Account Balance: ", accountBalance.toString(), "ETH wow i'm rich ?");

    const Token = await hre.ethers.getContractFactory('WavePortal');
    const portal = await Token.deploy();
    await portal.deployed();

    console.log("WavePortal deployed, address is :", portal.address);
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    }   catch (error) {
        console.error(error);
        process.exit(1);
    }
};

runMain();