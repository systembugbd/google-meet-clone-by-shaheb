import React from "react";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faExclamationCircle,
  faCog,
  faBorderNone,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";

function Header() {
  let date = new Date().toLocaleString();
  return (
    <div className="header">
      <div className="logo">
        <Link className="logoLink" to="/"><img
          alt=""
          src="https://www.gstatic.com/meet/google_meet_horizontal_wordmark_2020q4_1x_icon_124_40_2373e79660dabbf194273d27aa7ee1f5.png"
        />
          <span className="help-text">Meet</span>
          </Link>
      </div>
      <div className="action-btn">
        <div className="date-block">{date}</div>
        <div className="icons-block">
          <FontAwesomeIcon className="icon" icon={faQuestionCircle} />
          <FontAwesomeIcon className="icon" icon={faExclamationCircle} />
          <FontAwesomeIcon className="icon" icon={faCog} />
        </div>
        <div className="profile">
          <FontAwesomeIcon className="icon icon-app" icon={faBorderNone} />

          <span className="profileImg">
            <img
              alt=""
              src="https://lh3.googleusercontent.com/ogw/ADea4I54OIq0ofSoFY8e0hNZ31wsvzShTi0IsMUIwe-oSg=s83-c-mo"
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
