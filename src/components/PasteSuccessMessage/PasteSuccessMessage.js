import {deployedOnChainNetwork, onChainNetworks, etherscanLinks} from '../../utils/config.js'

function PasteSuccessMessage(props) {
  
  const getEtherscanAddressUrl = (address) => { 
    return etherscanLinks[deployedOnChainNetwork] + "address/" + address;
  }

  const getEtherscanTransactionUrl = (transactionId) => {
    return etherscanLinks[deployedOnChainNetwork] + "tx/" + transactionId;
  }
  
  return (
    <div class="ui success message">
        {props.pasteAddress &&
          <p>
            Successfully created paste on {onChainNetworks[deployedOnChainNetwork]} at address <a href={getEtherscanAddressUrl(props.pasteAddress)}> {props.pasteAddress} </a>
          </p>
        }
        {props.pasteTransactionId &&
          <p>
            Successfully creating paste on {onChainNetworks[deployedOnChainNetwork]} using transaction <a href={getEtherscanTransactionUrl(props.pasteTransactionId)}> {props.pasteTransactionId} </a>
          </p>
        }
    </div>
  )
}

export default PasteSuccessMessage;