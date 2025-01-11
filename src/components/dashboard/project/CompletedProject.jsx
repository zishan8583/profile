import React from 'react'
import Header from '../template/Header'
import SideNav from '../template/SideNav'
import Home from './Home'
import Footer from '../template/Footer'

const CompletedProject = () => {
  

  return (
    <div className="wrapper">
    <Header/>
    <SideNav/>
    <Home projectStatus={'completed'}/>
    <Footer/>
    </div>
  )
}

export default CompletedProject