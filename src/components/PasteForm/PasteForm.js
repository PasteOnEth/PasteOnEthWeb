import './PasteForm.css';
import React, {useState} from 'react';
import {createPaste, createPasteUsingMetamask, getRequesterAccount} from '../../utils/web3.js';
import 'semantic-ui-css/semantic.min.css';
import PasteSuccessMessage from '../PasteSuccessMessage/PasteSuccessMessage';

function PasteForm() {
  const [formData, setFormData] = useState({paste: ''});
  const [result, setResult] = useState(null); //TODO: Use after you get API response
  const [account, setAccount] = useState("");
  const [isValidAccount, setIsValidAccount] = useState(false);
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;    
    setFormData({ ...formData, [name]: value });
  };

  const handleAccount = (event) => {
    getRequesterAccount().then((account) => {
        console.log("Got account ", account);
        if (account !== undefined) {
          setAccount(account);
          setIsValidAccount(true);
        } else {
          setIsValidAccount(false);
        }
    }, (error) => {
      console.log("errror in handle account", error);
      setIsValidAccount(false);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    createPasteUsingMetamask(account, formData.paste)
    .then(transactionObj => {
      const newProxyAddress = transactionObj.contractAddress;
      console.log("ADDRESS ", newProxyAddress);
      setResult(newProxyAddress);
    })
    .catch(error => 
      console.log("Error while initializing contract ", error));


    // createPasteUsingMetamask(account, formData.paste)
    // .then(function(newContractInstance){
    //   const newAddress = newContractInstance.options.address;
    //   console.log(newAddress);
    //   setResult(newAddress);
    // }).catch(error => 
    //   console.log("Error while initializing contract ", error));

    // .on('error', function(error){ console.log(error) });

    // createPaste(account, formData.paste)
    // .on('transactionHash', function(hash){
    //     console.log("found transaction hash", hash);
    // })
    // .on('receipt', function(receipt){
    //     console.log("Found receipt", receipt);
    //     const proxyAddress = receipt.contractAddress;
    //     console.log("Contract address is ", proxyAddress);
    //     return setResult(proxyAddress);
    // })
    // .on('error', function() {
    //     console.error("Ran out of gas my god"); 
    // });

    setFormData({paste:''});
  };
  
  return (
    <div class="raised very padded text container segment form-container">
      <form class="ui form success" method="post" action="/submit" onSubmit={handleSubmit}>
        {result && <PasteSuccessMessage pasteAddress={result} />}
        <div class="required field">
          <label>Your immortal paste</label>
          <textarea name="paste" onChange={handleInputChange} value={formData.paste} required></textarea>
        </div>
        <button class="button ui toggle small" onClick={handleAccount} type="button">Connect Ethereum account</button>
        {isValidAccount && <label>Current Account: {account} </label>}
        {isValidAccount && <button class="ui button primary" type="submit">Preview</button>}
      </form>
    </div>
  );
}

export default PasteForm;