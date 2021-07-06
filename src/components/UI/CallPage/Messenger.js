import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faCommentAlt,
  faTimes,
  faUserAlt,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

import("./Messenger.scss");

function Messenger() {
  const chatCount = 1;

  return (
    <div className="messenger">
      <div className="header">
        <h3>Meetings Details</h3>
        <FontAwesomeIcon className="icon icon-faTimes" icon={faTimes} />
      </div>

      <div className="header_tab">
        <div className="tab">
          <FontAwesomeIcon className="icon icon-faUserAlt" icon={faUserAlt} /> 
          People (1)
        </div>

        <div className="tab active">
          <FontAwesomeIcon
            className="icon icon-faCommentAlt"
            icon={faCommentAlt}
          />
          Chat <span>{0}</span>
        </div>
      </div>

      <div className="chat-section">
        <div className="chat-block">
          <div className="sender">
            You <small>10 PM</small>
          </div>
          <p className="message">Here comes the actual message</p>
          <p className="message">Here comes the actual message</p>
          <p className="message">Here comes the actual message</p>
          <p className="message">Here comes the actual message</p>
        </div>
      </div>

      <div className="send-msg-section">
        <input className="msginput" multiple col="5" title="msginput" required />
        <label class="floating-label">Send a message to Everyone</label>
       
        <FontAwesomeIcon
          className="icon icon-faPaperPlane"
          icon={faPaperPlane}
        />
      </div>
    </div>
  );
}

export default Messenger;
