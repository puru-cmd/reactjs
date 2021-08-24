import React from 'react';
import './popup.css';

const Popup = props => {
    return (
      <div className="popup-box">
        <div className="box">
          <span className="close-icon" onClick={props.handleClose}></span>
          {props.content}
        </div>
      </div>
    );
  };
   
  export default Popup;