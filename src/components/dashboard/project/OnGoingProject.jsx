import React from 'react'
import Header from '../template/Header'
import SideNav from '../template/SideNav'
import Home from './Home'
import Footer from '../template/Footer'

const OnGoingProject = () => {
  

  return (
    <div className="wrapper">
    <Header/>
    <SideNav/>
    <Home projectStatus={'ongoing'}/>
    <Footer/>
    </div>
  )
}

export default OnGoingProject