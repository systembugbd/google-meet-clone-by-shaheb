import {Link } from 'react-router-dom'
import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHome as home } from '@fortawesome/free-solid-svg-icons'
import Header from '../UI/Header/Header'

import "./NoMatch.scss"

function NoMatch() {
     return (
          <div>
               <Header />
               <div className="nomatch-container">
               <h1 className="h1">404</h1>
                    <h3 className="h3">Invalid Video Call URL</h3>
                    <div className="action-btn">
                         <Link to="/" className="returntohome btn btn-primary"><FontAwesomeIcon className="icon icon-faReturn" icon={ home }/> Return To Home</Link>
                    </div>
                   
             </div>
          </div>
     )
}

export default NoMatch
