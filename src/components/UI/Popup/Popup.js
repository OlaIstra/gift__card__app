import React from "react";
import Popup from "reactjs-popup";

import './Popup.css'
 
const PopupCustom = (props) => (
    <Popup open={true} >
	    {close => (
	      	<div className="modal">     
	        
		        <div className="content">
		          	{props.label}
		        </div>
		        <div className="actions">
		          
		          	<button
		            	className="button"
		            	onClick={() => { close()}}
		          	>
		            	Continue
		          	</button>
		        </div>
	      	</div>
	    )}
  	</Popup>
);

export default PopupCustom