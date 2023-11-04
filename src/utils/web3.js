import Web3 from 'web3';
import { MetaMaskSDK } from '@metamask/sdk';
import {PasteImplAddress, PasteProxyByteCode, PasteProxyABI} from './config.js'

const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");


export async function createPasteUsingMetamask(deployerAccount, paste) {
    console.log("received", deployerAccount, paste);
    
    // The encoded function call that the proxy uses to initialize the implementation contract
    const pasteData = web3.eth.abi.encodeFunctionCall({
        name: 'initialize',
        type: 'function',
        inputs: [
            {
                type: 'string',
                name: 'initStore'
            },
        ],
    }, [paste]);

    // Encode the constructor parameters for the proxy contract
    const proxyConstructorData = web3.eth.abi.encodeParameters(
        ['address', 'bytes'], 
        [PasteImplAddress, pasteData]
    );

    // Construct params object for the transaction. 
    //   from: the account to use for sending transaction
    //   data: the bytecode of the compiled contract followed by the encoded constructor arguments
    const params = [{
        from: deployerAccount,
        data: PasteProxyByteCode + proxyConstructorData.slice(2),
    }];


    const proxyTransaction = await window.ethereum.request({method: "eth_sendTransaction", params: params})
    .then(txHash => {return txHash;})
    .catch(error => 
      console.log("Error while initializing contract ", error));

    return window.ethereum.request({method: "eth_getTransactionReceipt", params: [proxyTransaction]});
}

export async function getRequesterAccount() {
    // if (typeof window.ethereum !== 'undefined') {
    //     // Metamask is installed
    //     // const provider = await detectEthereumProvider();
    //     console.log("Found provider");
    //     // ...
    //   } else {
    //     // Metamask is not installed
    //     console.log("Did not find provider");
    //   }
    
    const options = [];
    const MMSDK = new MetaMaskSDK(options);
    const ethereum = MMSDK.getProvider(); // You can also access via window.ethereum  
    console.log("etherum", ethereum);
    return ethereum.request({ method: 'eth_requestAccounts', params: [] }).then((result) => {
        console.log("accounts", result);
        return result[0];
    }).catch((error) => {
        console.log("Error during getRequestedAccount");
        throw error;
    });
}

//Fallback function if there are issues with Metamask. This is NOT currently used 
export function createPaste(deployerAccount, paste) {
    console.log("received", deployerAccount, paste);

    const pasteData = web3.eth.abi.encodeFunctionCall({
        name: 'initialize',
        type: 'function',
        inputs: [
            {
                type: 'string',
                name: 'initStore',
            },
        ],
    }, [paste]);
    
    const proxy = new web3.eth.Contract(PasteProxyABI);
    return proxy.deploy({data: PasteProxyByteCode, arguments: [PasteImplAddress, pasteData]}).send({
        from: deployerAccount, 
        gas: 90000});
}
