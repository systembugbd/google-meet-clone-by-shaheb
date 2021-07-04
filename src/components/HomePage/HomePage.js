import React from 'react'
import Header from './../UI/Header/Header'
import Body from './../UI/Body/Body'


import('./HomePage.scss')

function HomePage() {
     return (
          <div className="container">
               <Header />
               <Body/>
          </div>
     )
}

export default HomePage
