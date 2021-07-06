import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faKeyboard } from "@fortawesome/free-solid-svg-icons";
import("./LeftSide.scss");

function LeftSide() {
  const [showJoinBtn, setShowJoinBtn] = useState(false);

  const showDisableJoinBtn = (e) => {
    if (e.target.value.length > 25) {
      console.log(e.target.value.length);
      setShowJoinBtn(true);
    } else {
      setShowJoinBtn(false);
    }
  };

  return (
    <div className="leftside">
      <div className="heading">
        <h2 className="h2">
          Premium video meetings. <br className="noneMobile" />
          Now free for&nbsp;everyone.
        </h2>
        <p>
          We re-engineered the service we built for secure business
          <br className="noneMobile" /> meetings, Google Meet, to make it free
          and available for all.
        </p>
      </div>
      <div className="meeting-action">
        <div className="btn-group action">
          <button type="button" className="btn btn-primary">
            <FontAwesomeIcon className="icon icon-video" icon={faVideo} />
            &nbsp;<span className="newmeeting">New&nbsp;Meeting</span>
          </button>
        </div>
        <div className="input input-group action">
          <div className="inputbox">
            <FontAwesomeIcon className="icon icon-keyboard" icon={faKeyboard} />
            <input
              type="text"
              name="codeorlink"
              placeholder="Enter a code or link"
              className="inputtext"
              onChange={showDisableJoinBtn}
            />
          </div>
          <span className={showJoinBtn ? "message show" : "message hide"}>
            Please Enter Correct link
          </span>
        </div>
        <div className="btn-group btn btn-disable action">
          <button
            type="button"
            className={
              showJoinBtn ? "btn btn-disable visible" : "btn btn-disable"
            }

          >
            Join
          </button>
        </div>
      </div>
      <div className="knowmore">
        <hr className="hr" />
        <div className="copy">
          <a href="http://localhost:3000/">Learn more</a> <span>about Google Meet</span>
        </div>
      </div>
    </div>
  );
}

export default LeftSide;
