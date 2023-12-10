import Web3 from 'web3';
import { MetaMaskSDK } from '@metamask/sdk';
import {PasteImplAddress, PasteProxyByteCode, PasteProxyABI} from './config.js'
// import detectEthereumProvider from '@metamask/detect-provider';

const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
const options = {
    checkInstallationOnAllCalls:true
}
const MMSDK = new MetaMaskSDK(options);
const ethereum = MMSDK.getProvider();
// You can also access via window.ethereum  
// const ethereum = await detectEthereumProvider();


export async function createPasteUsingMetamask(deployerAccount, paste) {
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
    return ethereum.request({ method: 'eth_requestAccounts', params: [] }).then((result) => {
        return result[0];
    }).catch((error) => {
        if (error.code === 4001) {
            // EIP-1193 userRejectedRequest error
            // If this happens, the user rejected the connection request.
            console.log('Please connect to MetaMask.');
        }
        throw error;
    });
}

//Fallback function if there are issues with Metamask. This is NOT currently used 
export function createPaste(deployerAccount, paste) {
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