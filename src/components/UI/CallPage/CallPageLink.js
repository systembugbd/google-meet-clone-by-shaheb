import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faUserPlus,
  faCopy,
  faShieldAlt,
  faWindowMaximize
} from "@fortawesome/free-solid-svg-icons";
import("./CallPageLink.scss");

function CallPageUi() {
  const [shareLink, setShareLink] = useState(true);
  const [copyUrl, setCopyUrl] = useState("");
  const [successMsg, setSuccessMsg] = useState('')
  const linkRef = useRef(null);

  const shareLinkModal = (e) => {
    setShareLink(!shareLink);
  };

  const copyURLtoClipboard = (e) => {
    let value = e.target.parentNode.parentNode.childNodes[0].value;
    
    // value.style.color= '#eeeeee'
    linkRef.current.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the the whole text area selected.
    // e.target.focus();
   
    setCopyUrl(value)
    setSuccessMsg(`Link copyied to clipboard ${copyUrl}`);

    alert(value + " is copyied to clipboard!");
 
  }


  return (
    <div className="callpageui">
      <div className={shareLink ? "shareLink collapse" : "shareLink open"} onClick={shareLinkModal}>
     
        
        {/**
         * Heading and Close
         * */ }
        <div className="heading" >
          <div className={shareLink ? "hide": "show"}>Your meeting's ready</div>
          <FontAwesomeIcon
            className={ shareLink? "icon icon-max": "icon icon-cross" }
            icon={shareLink? faWindowMaximize: faPlus}
           
          />
        </div>
         {/**
         * Share To Others
         * */ }
        <div className={shareLink ? "btn-group hide": "btn-group show"} >
          <button className="btn btn-primary">
            <FontAwesomeIcon
              className="icon icon-user-plus"
              icon={faUserPlus}
            />
            Add Others
          </button>
        </div>
        <div className={shareLink ? "meeting-msg hide" : "meeting-msg show"}>
          <p>
            Or Share this meetings link with others you want in the meetings
          </p>
        </div>
        {/**
         * Copy to Clipboard
         * */ }
        <div className={shareLink ? "meeting-links hide" : "meeting-links show"}>
          <input className="link" ref={ linkRef } disabled value="https://localhost:3000/SYEDLSUEC" />
          <FontAwesomeIcon className="icon icon-copy" icon={faCopy} onClick={copyURLtoClipboard} />
        
        </div>
        {/**
         * shild Message
         * */ }
        <div className={shareLink ? "shild-msg hide" : "shild-msg show"}>
          <FontAwesomeIcon className="icon icon-shild" icon={faShieldAlt} />
          <span>
            People who use this meetings link must get your permission before
            they join.
          </span>
        </div>
         {/**
         * Join With Email
         * */ }
        <div className={shareLink ? "join-as hide" : "join-as show"}>Joined as systembugbd@gmail.com</div>
        <span className={shareLink ? "copiedSuccess hide" : "copiedSuccess show"} >{ successMsg }</span>
      </div>
    </div>
  );
}

export default CallPageUi;
