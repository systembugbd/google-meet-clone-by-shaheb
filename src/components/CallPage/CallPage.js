import React from 'react'
import CallPageLink from '../UI/CallPage/CallPageLink'
import CallPageFooter from '../UI/CallPage/CallPageFooter'
import Messenger from '../UI/CallPage/Messenger'
import ('./CallPage.scss')

function CallPage() {
     return (
          <div className="callpage-container">
               <div className="video-container">
                    <video id="video" className="video" src="" controls />
               </div>
               <CallPageLink />
               <CallPageFooter />
               <Messenger />
          </div>
     )
}

export default CallPage
