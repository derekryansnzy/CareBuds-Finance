// Moralis.initialize("KVsRENKf8Y0FrI0l57LMYMjRJsQTd8UbYP36qFV0"); // Application id from moralis.io
// Moralis.serverURL = "https://gdbymlyoujf7.moralishost.com:2053/server"; // Server url from moralis.io

serverUrl = "https://gdbymlyoujf7.moralishost.com:2053/server"
appId = "KVsRENKf8Y0FrI0l57LMYMjRJsQTd8UbYP36qFV0"
Moralis.start({serverUrl, appId});

login = async () => {
    const web3 = await Moralis.enable();
    try {
        currentUser = await Moralis.User.current();
        if (!currentUser) {
            currentUser = await Moralis.authenticate({
                provider: "walletconnect",
                chainId: 0x38,
                mobileLinks: [
                    "rainbow",
                    "metamask",
                    "argent",
                    "trust",
                    "imtoken",
                    "pillar",
                ]
            }).then(function (user) {
                console.log(user.get('ethAddress'))
            })
        }
        console.log(currentUser);
        document.getElementById("connectWalletBtn").style.display = "none";
        document.getElementById("connectWalletBtnRt").style.display = "none";
        document.getElementById("BudsRewardsDapp").style.display = "block";
        document.getElementById("logoutBtn").style.display = "block";
        totalRewards();
    } catch (error) {
        console.log(error);
    }
}

logout = async () => {
    await Moralis.User.logOut();
    console.log(currentUser);
    document.getElementById("connectWalletBtn").style.display = "block";
    document.getElementById("connectWalletBtnRt").style.display = "block";
    document.getElementById("BudsRewardsDapp").style.display = "none";
}

userBudsBalance = async () => {
    const web3 = await Moralis.enable();
    const chainOptions = {
        chain: "bsc"
    };
    const balances = await Moralis.Web3API.account.getTokenBalances(chainOptions);
    const tokenAddress = "0x058cdf0ff70f19629d4f50fac03610302e746e58"; // Buds Contract Address
    const tokenBalance = balances.find((token) => token.token_address === tokenAddress);
    if (tokenBalance) {
        return tokenBalance.balance;
    } else {
        return null;
    }
}

userBudsBalance().then((balance) => {
    updateHTML(balance);
    console.log(balance);
})

updateHTML = async (value) => {
    document.getElementById("budsBalanceNum").innerHTML = value / 10 ** 9;
}

totalRewards = async () => {
    const web3 = await Moralis.enable();
    let contractAbi = [{
            "inputs": [],
            "name": "viewRewardsAndLiquidityInfo",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "budsAccumulationFromRewardsFee",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "sumOfAllHOLDRBalances",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "theCurrentRewardsCycle",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "lengthOfRewardsCycle",
                    "type": "uint256"
                }, {
                    "internalType": "uint256",
                    "name": "budsAccumulationFromLiquidityFee",
                    "type": "uint256"
                }, {
                    "internalType": "uint256",
                    "name": "lastTimeDividendsWereReleased",
                    "type": "uint256"
                }, {
                    "internalType": "uint256",
                    "name": "dividendsClaimableNow",
                    "type": "uint256"
                }, {
                    "internalType": "uint256",
                    "name": "dividendsLeftFromReservedSupplyForHOLDRs",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }];
    const options = {
        contractAddress: "0x058cdF0fF70f19629D4F50faC03610302e746e58",
        functionName: "viewRewardsAndLiquidityInfo",
        abi: contractAbi
    };
    x = await Moralis.executeFunction(options)
    console.log(options);
}

x = totalRewards()
x.then(function (value) {
    document.getElementById("budsRewardPool").innerHTML = x.budsAccumulationFromRewardsFee / 10 ** 9;
    document.getElementById("rewardsCycle").innerHTML = x.theCurrentRewardsCycle;
    document.getElementById("sumOfHolders").innerHTML = x.sumOfAllHOLDRBalances / 10 ** 9;
    document.getElementById("budsDividendsPool").innerHTML = x.sumOfAllHOLDRBalances / 10 ** 9;
})

claimableRewards = async () => {
    const userEligibility = await userBudsBalance();
    console.log(userEligibility);
};

claimBudsRewards = async () => {
    const web3 = await Moralis.enable();

    let rewardsAbi = [{
            "inputs": [],
            "name": "claimRewards",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },]

    const Rewards = {
        contractAddress: "0x058cdF0fF70f19629D4F50faC03610302e746e58",
        functionName: "claimRewards",
        abi: rewardsAbi
    };
    const claimRewards = await Moralis.executeFunction(Rewards);
    console.log(claimBudsRewards);
}


document.getElementById("connectWalletBtn").onclick = login;
document.getElementById("connectWalletBtnRt").onclick = login;
document.getElementById("logoutBtn").onclick = logout;
document.getElementById("budsClaimRewards").onclick = claimBudsRewards;
