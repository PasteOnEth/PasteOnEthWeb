import './PasteForm.css';
import React, {useState} from 'react';
import {createPasteTransactionUsingMetamask, getPasteAddressFromTransaction, getRequesterAccount} from '../../utils/web3.js';
import {onChainNetworks, deployedOnChainNetwork} from '../../utils/config.js'
import 'semantic-ui-css/semantic.min.css';
import PasteSuccessMessage from '../PasteSuccessMessage/PasteSuccessMessage';
import PasteErrorMessage from '../PasteErrorMessage/PasteErrorMessage';

function PasteForm() {
  const [formData, setFormData] = useState({paste: ''});
  const [pasteSent, setPasteSent] = useState(false);
  const [resultAddress, setResultAddress] = useState(null); 
  const [resultTransaction, setResultTransaction] = useState(null); 
  const [account, setAccount] = useState("");
  const [isValidAccount, setIsValidAccount] = useState(false);
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;    
    setFormData({ ...formData, [name]: value });
  };

  const handleAccount = (event) => {
    getRequesterAccount().then((account) => {
        if (account !== undefined) {
          setAccount(account);
          setIsValidAccount(true);
        } else {
          setIsValidAccount(false);
        }
    }, (error) => {
      setIsValidAccount(false);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const txHash = createPasteTransactionUsingMetamask(account, formData.paste)
    .then(txHash => {
      console.log("Found transaction log to be: ", txHash);
      setResultTransaction(txHash);
      setFormData({paste:''});
      setPasteSent(true);
      return txHash;
    })
    .catch(error => {
      setResultTransaction(null);
      setPasteSent(true);
      console.log("Error while initializing contract ", error)
    });

    if (txHash !== null) {
      getPasteAddressFromTransaction(txHash)
      .then(transactionObj => {
        const newProxyAddress = transactionObj.contractAddress;
        setResultAddress(newProxyAddress);
        setFormData({paste:''});
        setPasteSent(true);
      })
      .catch(error => {
        setResultAddress(null);
        setPasteSent(true);
      });
    }
  };
  
  return (
    <div class="raised very padded text container segment form-container">
      <form class="ui form success" method="post" action="/submit" onSubmit={handleSubmit}>
        {resultTransaction && pasteSent && <PasteSuccessMessage pasteTransactionId={resultTransaction} />}
        {resultAddress && pasteSent && <PasteSuccessMessage pasteAddress={resultAddress} />}
        {! resultTransaction && !resultAddress && pasteSent && <PasteErrorMessage />}
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