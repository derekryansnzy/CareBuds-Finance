window.abi = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "member",
                "type": "address"
            }, {
                "indexed": false,
                "internalType": "uint256",
                "name": "time",
                "type": "uint256"
            }
        ],
        "name": "AddedTeamMember",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }, {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }, {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "funds",
                "type": "uint256"
            }, {
                "indexed": false,
                "internalType": "address",
                "name": "destination",
                "type": "address"
            }, {
                "indexed": false,
                "internalType": "uint256",
                "name": "time",
                "type": "uint256"
            }
        ],
        "name": "BalanceFromLiquidityFeeDistributed",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }, {
                "indexed": false,
                "internalType": "uint256",
                "name": "time",
                "type": "uint256"
            }
        ],
        "name": "CommunityRewardsAdded",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }, {
                "indexed": false,
                "internalType": "uint256",
                "name": "time",
                "type": "uint256"
            }
        ],
        "name": "DividendDistributionEnabled",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            }, {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "member",
                "type": "address"
            }, {
                "indexed": false,
                "internalType": "uint256",
                "name": "time",
                "type": "uint256"
            }
        ],
        "name": "RemovedTeamMember",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "numberOfSecondsOfNewCycle",
                "type": "uint256"
            }, {
                "indexed": false,
                "internalType": "uint256",
                "name": "time",
                "type": "uint256"
            }
        ],
        "name": "RewardsCycleLengthChanged",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            }, {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            }, {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    }, {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "addMoreRewards",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [
            {
                "internalType": "address",
                "name": "teamMember",
                "type": "address"
            }
        ],
        "name": "addTeamMember",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "allowDistributionOfDividends",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }, {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }, {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "numberOfSeconds",
                "type": "uint256"
            }
        ],
        "name": "changeRewardsCycleLength",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [],
        "name": "claimDividends",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [],
        "name": "claimRewards",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "rewardsCycle",
                "type": "uint256"
            }
        ],
        "name": "claimRewardsFromAPreviousRewardsCycle",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }, {
                "internalType": "uint256",
                "name": "subtractedValue",
                "type": "uint256"
            }
        ],
        "name": "decreaseAllowance",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [],
        "name": "geUnlockTime",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }, {
                "internalType": "uint256",
                "name": "addedValue",
                "type": "uint256"
            }
        ],
        "name": "increaseAllowance",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [
            {
                "internalType": "address",
                "name": "person",
                "type": "address"
            }
        ],
        "name": "isCurrentTeamMember",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "time",
                "type": "uint256"
            }
        ],
        "name": "lock",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }, {
                "internalType": "address",
                "name": "destination",
                "type": "address"
            }
        ],
        "name": "moveBalanceFromLiquidityFee",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [
            {
                "internalType": "address",
                "name": "teamMember",
                "type": "address"
            }
        ],
        "name": "removeTeamMember",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [
            {
                "internalType": "address",
                "name": "_goodBudsWallet",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_smokeOutWallet",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_manualLiquidityWallet",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_budsBank",
                "type": "address"
            }, {
                "internalType": "address",
                "name": "_lottery",
                "type": "address"
            }, {
                "internalType": "address",
                "name": "_zombie",
                "type": "address"
            }
        ],
        "name": "setAddresses",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "teamMembersAndExMembers",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [
            {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            }, {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }, {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            }, {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [],
        "name": "unlock",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [],
        "name": "viewAddresses",
        "outputs": [
            {
                "internalType": "address",
                "name": "_goodBudsWallet",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_smokeOutWallet",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_manualLiquidityWallet",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_budsBank",
                "type": "address"
            }, {
                "internalType": "address",
                "name": "_lottery",
                "type": "address"
            }, {
                "internalType": "address",
                "name": "_zombie",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }, {
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
    }
]
