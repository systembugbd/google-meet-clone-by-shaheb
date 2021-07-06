import React, {useState, useEffect} from "react";
import Messenger from "./Messenger"
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone as microphone,
  faVideo as video,
  faFont as subTitle,
  faShareAlt as shareAlt,
  faDotCircle as dotCircle,
  faPhoneAlt as phoneAlt,
  faInfoCircle as infoCircle,
  faUserAlt as userAlt,
  faClock as timeClock,
  faIdCardAlt as idNumber,
  faCommentAlt as chat,
  faTabletAlt as share,
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
        <div className="left__icon"><FontAwesomeIcon className="icon icon-faClock" icon={timeClock} /> {dateTime.toLocaleTimeString()} </div> |
        <div className="left__icon"><FontAwesomeIcon className="icon icon-faIdCardAlt" icon={idNumber} /> {chatId.id}</div>
      </div>
      <div className="center">
      <div className="icon_block"><FontAwesomeIcon className="icon icon-microphone" icon={microphone} /></div>
      <div className="icon_block"><FontAwesomeIcon className="icon icon-faVideo" icon={video} /></div>
      <div className="icon_block"><FontAwesomeIcon className="icon icon-faTransgenderAlt" icon={subTitle} /></div>
      <div className="icon_block"><FontAwesomeIcon className="icon icon-faShareAlt" icon={shareAlt} /></div>
      <div className="icon_block"><FontAwesomeIcon className="icon icon-faDotCircle" icon={dotCircle} /></div>
      <div className="icon_block icon-faPhoneAlt-block"><FontAwesomeIcon className="icon icon-faPhoneAlt" icon={phoneAlt} /></div>
      </div>
      <div className="right">
      <div className="icon_block"><FontAwesomeIcon className="icon icon-faInfoCircle" icon={infoCircle} /></div>
      <div className="icon_block"><FontAwesomeIcon className="icon icon-faUserAlt" icon={userAlt} /></div>
      <div className="icon_block"><FontAwesomeIcon className="icon icon-faCommentAlt" icon={chat} /></div>
      <div className="icon_block"><FontAwesomeIcon className="icon icon-faMoneyBillAlt" icon={share} /></div>
      </div>
    
    </div>
  );
}

export default CallPageFooter;
