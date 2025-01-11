import React from 'react'
import AddProject from './AddProject'
import Header from '../template/Header'
import SideNav from '../template/SideNav'
import Footer from '../template/Footer'

const Createproject = () => {
  return (
    <div className="wrapper">
    <Header/>
    <SideNav/>
    <AddProject/>
    <Footer/>
    </div>
  )
}

export default Createproject