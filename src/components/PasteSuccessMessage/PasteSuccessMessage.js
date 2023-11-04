import {deployedOnChainNetwork, onChainNetworks, etherscanLinks} from '../../utils/config.js'

function PasteSuccessMessage(props) {
  
  const getEtherscanLink = (address) => { 
    return etherscanLinks[deployedOnChainNetwork] + "address/" + address;
  }
  
  return (
    <div class="ui success message">
        <p>
          Successfully created paste on {onChainNetworks[deployedOnChainNetwork]} at address <a href={getEtherscanLink(props.pasteAddress)}> {props.pasteAddress} </a>
        </p>
    </div>
  )
}

export default PasteSuccessMessage;