Moralis.initialize("KVsRENKf8Y0FrI0l57LMYMjRJsQTd8UbYP36qFV0"); // Application id from moralis.io
Moralis.serverURL = "https://gdbymlyoujf7.moralishost.com:2053/server"; //Server url from moralis.io

async function login() {
    const web3 = await Moralis.enable();
    try {
        currentUser = await Moralis.User.current();
        if(!currentUser) {
            currentUser = Moralis.authenticate().then(function (user) {
                console.log(user.get('ethAddress'))
            })
        }
            console.log(currentUser);
            document.getElementById("connectWalletBtn").style.display = "none";
            document.getElementById("connectWalletBtnRt").style.display = "none";
            document.getElementById("BudsRewardsDapp").style.display = "block";
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


async function userBudsBalance(){
    const chainOptions = { chain: "bsc" }
    const balances = await Moralis.Web3API.account.getTokenBalances(chainOptions);
    // const tokenAddress =  "0x720b40cd711df11e62dfd0c88797da100d5f09e6"; // 420 Contract Address
    const tokenAddress =  "0x058cdf0ff70f19629d4f50fac03610302e746e58"; // Buds Contract Address
    const tokenBalance = balances.find((token) => token.token_address === tokenAddress);
    console.log(tokenBalance.balance); //do your log here
    return tokenBalance.balance;
}

const tokenBalance = userBudsBalance()

    tokenBalance.then(
        (value) => {
            console.log(value);
            document.getElementById("budsBalanceNum").innerHTML = value/10**9;},
        function(error) {console.log(error);}
      );

async function claimBudsRewards(){
    const web3 = await Moralis.enable();
    const Rewards = {
    contractAddress: "0x058cdF0fF70f19629D4F50faC03610302e746e58",
      functionName: "claimRewards",
      abi: window.abi,
  };
  const BudsRewards = await Moralis.executeFunction(Rewards);
}

async function totalRewards(){
    const web3 = await Moralis.enable();
    let contractAbi = [{"inputs":[],
    "name":"viewRewardsAndLiquidityInfo",
    "outputs":[
        {"internalType":"uint256","name":"budsAccumulationFromRewardsFee","type":"uint256"},
        {"internalType":"uint256","name":"sumOfAllHOLDRBalances","type":"uint256"},
        {"internalType":"uint256","name":"theCurrentRewardsCycle","type":"uint256"},
        {"internalType":"uint256","name":"lengthOfRewardsCycle","type":"uint256"},
        {"internalType":"uint256","name":"budsAccumulationFromLiquidityFee","type":"uint256"},
        {"internalType":"uint256","name":"lastTimeDividendsWereReleased","type":"uint256"},
        {"internalType":"uint256","name":"dividendsClaimableNow","type":"uint256"},
        {"internalType":"uint256","name":"dividendsLeftFromReservedSupplyForHOLDRs","type":"uint256"}
        ],"stateMutability":"view","type":"function"}];
    const options = {
    contractAddress: "0x058cdF0fF70f19629D4F50faC03610302e746e58",
    functionName: "viewRewardsAndLiquidityInfo",
    abi: contractAbi,
    };  
    x = await Moralis.executeFunction(options)
}



x = totalRewards()

    x.then(
        function(value) {
            console.log(value);
            b = tokenBalance;
            console.log(b);
    
            // need a way to parse b

            y = x.budsAccumulationFromRewardsFee / 10**9;
            console.log(y);
            parseInt(y);
            console.log(parseInt(y)); 
            z = x.sumOfAllHOLDRBalances / 10**9;
            console.log(z);
            
            a = y / z;
            console.log(a); //this worked
            
        

            /* amount of rewards is calculated by:
            ((tokenBalance * x.budsAccumulationFromRewardsFee) / x.sumOfAllHOLDRBalances) / 10**9;
            problem is the first two steps are already resulting in NaN
            */

            document.getElementById("budsRewardPool").innerHTML = y;
            document.getElementById("rewardsCycle").innerHTML = x.theCurrentRewardsCycle;
            document.getElementById("budsDividendsPool").innerHTML = x.dividendsLeftFromReservedSupplyForHOLDRs/10**9;
            document.getElementById("rewardsAmount").innerHTML = a;},
        function(error) {console.log(error);}
      );


document.getElementById("connectWalletBtn").onclick = login;
document.getElementById("connectWalletBtnRt").onclick = login;
document.getElementById("logoutBtn").onclick = logout;
document.getElementById("budsClaimRewards").onclick = claimBudsRewards;
