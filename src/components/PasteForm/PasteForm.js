import './PasteForm.css';
import React, {useState} from 'react';
import {createPaste, createPasteUsingMetamask, getRequesterAccount} from '../../utils/web3.js';
import {onChainNetworks, deployedOnChainNetwork} from '../../utils/config.js'
import 'semantic-ui-css/semantic.min.css';
import PasteSuccessMessage from '../PasteSuccessMessage/PasteSuccessMessage';
import PasteErrorMessage from '../PasteErrorMessage/PasteErrorMessage';

function PasteForm() {
  const [formData, setFormData] = useState({paste: ''});
  const [pasteSent, setPasteSent] = useState(false);
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
      console.log("Errror in handle account", error);
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
      setFormData({paste:''});
      setPasteSent(true);
    })
    .catch(error => {
      console.log("Error while initializing contract ", error);
      setResult(null);
      setPasteSent(true);
    });
  };
  
  return (
    <div class="raised very padded text container segment form-container">
      <form class="ui form success" method="post" action="/submit" onSubmit={handleSubmit}>
        {result && pasteSent && <PasteSuccessMessage pasteAddress={result} />}
        {! result && pasteSent && <PasteErrorMessage />}
        <div class="required field">
          <label>Your immortal paste</label>
          <textarea name="paste" onChange={handleInputChange} value={formData.paste} required></textarea>
        </div>
        <button class="button ui toggle small" onClick={handleAccount} type="button">Connect {onChainNetworks[deployedOnChainNetwork]} account</button>
        {isValidAccount && <label>Current Account: {account} </label>}
        {isValidAccount && <button class="ui button primary" type="submit">Preview</button>}
      </form>
    </div>
  );
}

export default PasteForm;