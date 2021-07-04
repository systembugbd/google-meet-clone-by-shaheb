import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faVideo,
  faFont,
  faShareAlt,
  faDotCircle,
  faPhoneAlt,
  faInfoCircle,
  faUserAlt,
  faClock,
  faIdCardAlt,
  faCommentAlt,
} from "@fortawesome/free-solid-svg-icons";
import("./CallPageFooter.scss");

function CallPageFooter() {
  const [dateTime, setClock] = useState(new Date());

  const chatId = useParams();

  useEffect(() => {
    const clock = () => {
      setClock(new Date());
    };

    setInterval(() => {
      clock();
    }, 1000);
  }, []);
  return (
    <div className="footer-container">
      <div className="left">
        <span className="left__icon"><FontAwesomeIcon className="icon icon-faClock" icon={faClock} /> {dateTime.toLocaleTimeString()} </span> |
        <span className="left__icon"><FontAwesomeIcon className="icon icon-faIdCardAlt" icon={faIdCardAlt} /> {chatId.id}</span>
      </div>
      <div className="center">
        <FontAwesomeIcon className="icon icon-microphone" icon={faMicrophone} />
        <FontAwesomeIcon className="icon icon-faVideo" icon={faVideo} />
        <FontAwesomeIcon className="icon icon-faTransgenderAlt" icon={faFont} />
        <FontAwesomeIcon className="icon icon-faShareAlt" icon={faShareAlt} />
        <FontAwesomeIcon className="icon icon-faDotCircle" icon={faDotCircle} />
        <FontAwesomeIcon className="icon icon-faPhoneAlt" icon={faPhoneAlt} />
      </div>
      <div className="right">
        <FontAwesomeIcon className="icon icon-faInfoCircle" icon={faInfoCircle} />
        <FontAwesomeIcon className="icon icon-faUserAlt" icon={faUserAlt} />
        <FontAwesomeIcon className="icon icon-faCommentAlt" icon={faCommentAlt} />
      </div>
    </div>
  );
}

export default CallPageFooter;
