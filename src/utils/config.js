export const PasteProxyByteCode = "0x608060405234801561001057600080fd5b5060405161088a38038061088a83398181016040528101906100329190610531565b81816100468282600061004f60201b60201c565b50505050610760565b61005e8361008760201b60201c565b60008251118061006b5750805b156100825761008083836100dc60201b60201c565b505b505050565b6100968161010f60201b60201c565b8073ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a250565b60606101078383604051806060016040528060278152602001610863602791396101d460201b60201c565b905092915050565b61011e8161026060201b60201c565b61015d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161015490610610565b60405180910390fd5b806101907f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b61028360201b60201c565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60606000808573ffffffffffffffffffffffffffffffffffffffff16856040516101fe9190610677565b600060405180830381855af49150503d8060008114610239576040519150601f19603f3d011682016040523d82523d6000602084013e61023e565b606091505b50915091506102558683838761028d60201b60201c565b925050509392505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000819050919050565b606083156102f55760008351036102ed576102ad8561026060201b60201c565b6102ec576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102e3906106da565b60405180910390fd5b5b829050610306565b610305838361030e60201b60201c565b5b949350505050565b6000825111156103215781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610355919061073e565b60405180910390fd5b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061039d82610372565b9050919050565b6103ad81610392565b81146103b857600080fd5b50565b6000815190506103ca816103a4565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610423826103da565b810181811067ffffffffffffffff82111715610442576104416103eb565b5b80604052505050565b600061045561035e565b9050610461828261041a565b919050565b600067ffffffffffffffff821115610481576104806103eb565b5b61048a826103da565b9050602081019050919050565b60005b838110156104b557808201518184015260208101905061049a565b60008484015250505050565b60006104d46104cf84610466565b61044b565b9050828152602081018484840111156104f0576104ef6103d5565b5b6104fb848285610497565b509392505050565b600082601f830112610518576105176103d0565b5b81516105288482602086016104c1565b91505092915050565b6000806040838503121561054857610547610368565b5b6000610556858286016103bb565b925050602083015167ffffffffffffffff8111156105775761057661036d565b5b61058385828601610503565b9150509250929050565b600082825260208201905092915050565b7f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60008201527f6f74206120636f6e747261637400000000000000000000000000000000000000602082015250565b60006105fa602d8361058d565b91506106058261059e565b604082019050919050565b60006020820190508181036000830152610629816105ed565b9050919050565b600081519050919050565b600081905092915050565b600061065182610630565b61065b818561063b565b935061066b818560208601610497565b80840191505092915050565b60006106838284610646565b915081905092915050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b60006106c4601d8361058d565b91506106cf8261068e565b602082019050919050565b600060208201905081810360008301526106f3816106b7565b9050919050565b600081519050919050565b6000610710826106fa565b61071a818561058d565b935061072a818560208601610497565b610733816103da565b840191505092915050565b600060208201905081810360008301526107588184610705565b905092915050565b60f58061076e6000396000f3fe608060405236601057600e6018565b005b60166018565b005b601e602c565b602a6026602e565b603b565b565b565b600060366060565b905090565b3660008037600080366000845af43d6000803e8060008114605b573d6000f35b3d6000fd5b6000608c7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b60b5565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600081905091905056fea26469706673582212202328b0eaa627ae479c27e2b5a308e82a63aa3c2e7c6d6b82bbd5e1771023f1df64736f6c63430008130033416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564";

export const PasteImplAddress = "0x7B31F4668f3C13E9Ee68844A3caaE71480F4c6E9";

export const onChainNetworks = {
	Mainnet: "Ethereum Mainnet",
	Goerli: "Goerli Testnet",
	Sepolia: "Sepolia Testnet",
	Ganache: "Ganache (Local)"
};

export const deployedOnChainNetwork = "Ganache";

export const etherscanLinks = {
	Ganache: "https://etherscan.io/",
	Goerli: "https://goerli.etherscan.io/",
	Sepolia: "https://sepolia.etherscan.io/",
	Ganache: "https://sepolia.etherscan.io/" //Test purposes only
};


export const PasteProxyABI = [
    {
      "inputs": [
        {
          "internalType": "address payable",
          "name": "initImplAddress",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "previousAdmin",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "newAdmin",
          "type": "address"
        }
      ],
      "name": "AdminChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "beacon",
          "type": "address"
        }
      ],
      "name": "BeaconUpgraded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "DataEvent",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "initImplAddress",
          "type": "address"
        }
      ],
      "name": "ImplAddressEvent",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "implementation",
          "type": "address"
        }
      ],
      "name": "Upgraded",
      "type": "event"
    },
    {
      "stateMutability": "payable",
      "type": "fallback",
      "payable": true
    },
    {
      "stateMutability": "payable",
      "type": "receive",
      "payable": true
    }
  ];

  export const PasteImplABI = [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "previousAdmin",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "newAdmin",
          "type": "address"
        }
      ],
      "name": "AdminChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "beacon",
          "type": "address"
        }
      ],
      "name": "BeaconUpgraded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint8",
          "name": "version",
          "type": "uint8"
        }
      ],
      "name": "Initialized",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "implementation",
          "type": "address"
        }
      ],
      "name": "Upgraded",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "proxiableUUID",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "store",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newImplementation",
          "type": "address"
        }
      ],
      "name": "upgradeTo",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newImplementation",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "upgradeToAndCall",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "initStore",
          "type": "string"
        }
      ],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "newStore",
          "type": "string"
        }
      ],
      "name": "changeStore",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];