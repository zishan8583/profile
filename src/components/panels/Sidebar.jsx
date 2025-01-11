import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './style.css';


const Sidebar = ({active}) => {
  const datas = [
    {
      menuType: {
        name: "Vendor",
        list: [
          { name: "Vendor List", path: "/vendorlist" },
          { name: "Verify Vendor", path: "/verifyvendor" },
        ],
      },
    },
    {
      menuType: {
        name: "Serivces",
        list: [
          { name: "Category List", path: "/categorylist" },
          { name: "FAQ", path: "/faq" },
        ],
      },
    },
    {
      menuType: {
        name: "Leads",
        list: [
          { name: "generate Leads", path: "/generate/leads" },
          { name: "Recent Leads", path: "/recent/leads" },
        ],
      },
    },
  ];

 

  return (
    <aside
      className="main-sidebar sidebar-dark-primary elevation-4"
      style={{ backgroundColor: "#0F4C75" }}>
      {/* Brand Logo */}
      <a className="brand-link">
      <div className="image" style={{width: '100%', backgroundColor: 'white', borderRadius:5, padding:5}}>
            <img src={ require("../assets/Call-in-city-logo.png")}  style={{width:"100%", objectFit:'contain'}} />
          </div>
        {/* <span className="brand-text font-weight-light">Call in City</span> */}
      </a>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img src={"dist/img/user2-160x160.jpg"} className="img-circle elevation-2" alt="User Image" />
          </div>
          <div className="info">
            <a  className="d-block">
              Admin
            </a>
          </div>
        </div>

        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="true">
            {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}

            {datas.map((data) => (
              <CustomLink menuType={data.menuType} active={active} />
            ))}
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
};

export default Sidebar;

const CustomLink = ({ menuType,index,active }) => {



  return (
    <li className="nav-item menu-open mt-2" key={index}>
      <a className="nav-link">
        <i className="nav-icon fas fa-briefcase" />
        <p>
          {menuType.name}
          <i className="right fas fa-angle-left" />
        </p>
      </a>
      <ul className="nav nav-treeview">
        {menuType.list.map((l,index) => (
          <li className="nav-item" key={index}>
            <Link to={l.path}  className={(active === l.path)? "nav-link active" : "nav-link"}>
              <i className="far fa-circle nav-icon" />
              <p>{l.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};


