export const PasteProxyByteCode = "0x608060405234801561000f575f80fd5b506040516104d43803806104d483398101604081905261002e916102e2565b818161003b82825f610044565b505050506103f7565b61004d8361006f565b5f825111806100595750805b1561006a5761006883836100ae565b505b505050565b610078816100da565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b905f90a250565b60606100d383836040518060600160405280602781526020016104ad6027913961018d565b9392505050565b6001600160a01b0381163b61014c5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084015b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b60605f80856001600160a01b0316856040516101a991906103aa565b5f60405180830381855af49150503d805f81146101e1576040519150601f19603f3d011682016040523d82523d5f602084013e6101e6565b606091505b5090925090506101f886838387610202565b9695505050505050565b606083156102705782515f03610269576001600160a01b0385163b6102695760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610143565b508161027a565b61027a8383610282565b949350505050565b8151156102925781518083602001fd5b8060405162461bcd60e51b815260040161014391906103c5565b634e487b7160e01b5f52604160045260245ffd5b5f5b838110156102da5781810151838201526020016102c2565b50505f910152565b5f80604083850312156102f3575f80fd5b82516001600160a01b0381168114610309575f80fd5b60208401519092506001600160401b0380821115610325575f80fd5b818501915085601f830112610338575f80fd5b81518181111561034a5761034a6102ac565b604051601f8201601f19908116603f01168101908382118183101715610372576103726102ac565b8160405282815288602084870101111561038a575f80fd5b61039b8360208301602088016102c0565b80955050505050509250929050565b5f82516103bb8184602087016102c0565b9190910192915050565b602081525f82518060208401526103e38160408501602087016102c0565b601f01601f19169190910160400192915050565b60aa806104035f395ff3fe608060405236601057600e6013565b005b600e5b601f601b6021565b6057565b565b5f60527f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b905090565b365f80375f80365f845af43d5f803e8080156070573d5ff35b3d5ffdfea264697066735822122012e0266f0ef4bfaea2365d6fcc6a21f0b4c7ae96b1908438adb6bd221755c41264736f6c63430008140033416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564"

export const PasteImplAddress = "0xE90aD37C7A09402438cc3047328F85bB7BA41328";

export const onChainNetworks = {
	Mainnet: "Ethereum Mainnet",
	Goerli: "Goerli Testnet",
	Sepolia: "Sepolia Testnet",
	Ganache: "Ganache (Local)"
};

export const deployedOnChainNetwork = "Sepolia";

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