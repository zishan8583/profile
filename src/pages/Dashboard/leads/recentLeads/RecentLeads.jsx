import { Switch } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../../../components/panels/Sidebar";

const RecentLeads = () => {

  const [toggle, setToggle] = useState(true)

  const handleToggle = () =>{
    setToggle(!toggle);
  }

  

  return (
    <>
    <Sidebar active="/recent/leads"/>
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Recent Leads</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Recent Leads</li>
              </ol>
            </div>
          </div>
        </div>
        {/* /.container-fluid */}
      </section>
      {/* Main content */}
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">List</h3>
                  <div className="card-tools">
                    <ul className="pagination pagination-sm float-right">
                      <li className="page-item">
                        <a className="page-link" href="#">
                          «
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          »
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* /.card-header */}
                <div className="card-body p-0">
                  <table className="table">
                    <thead>
                      <tr>
                        <th style={{ width: 10 }}>Id</th>
                        <th>Vendor Name</th>
                        <th>Cutomer Name</th>
                        <th style={{ width: 40 }}>Booking</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1.</td>
                        <td>Vinod Master</td>
                        <td>
                          Ac Service
                        </td>
                        <td>
                          {/* <Switch
                            checked={toggle}
                            onChange={handleToggle}
                            inputProps={{ "aria-label": "controlled" }}
                          /> */}

                          <Link to={'/booking/details'}>
                        <button
                            type="button"
                            className="btn btn-primary" 
                            style={{
                              backgroundColor: "#2a2a72",
                              backgroundImage:
                                "linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)",
                            }}>
                            View
                          </button>
                        </Link>
                        </td>
                      </tr>
                      <tr>
                        <td>1.</td>
                        <td>Vinod Master</td>
                        <td>
                          Ac Service
                        </td>
                        <td>
                         <Link to={'/booking/details'}>
                        <button
                            type="button"
                            className="btn btn-primary" 
                            style={{
                              backgroundColor: "#2a2a72",
                              backgroundImage:
                                "linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)",
                            }}>
                            View
                          </button>
                        </Link>
                        </td>
                      </tr>
                      <tr>
                        <td>1.</td>
                        <td>Vinod Master</td>
                        <td>
                          Ac Service
                        </td>
                        <td>
                         <Link to={'/booking/details'}>
                        <button
                            type="button"
                            className="btn btn-primary" 
                            style={{
                              backgroundColor: "#2a2a72",
                              backgroundImage:
                                "linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)",
                            }}>
                            View
                          </button>
                        </Link>
                        </td>
                      </tr>
                      <tr>
                        <td>1.</td>
                        <td>Vinod Master</td>
                        <td>
                          Ac Service
                        </td>
                        <td>
                         <Link to={'/booking/details'}>
                        <button
                            type="button"
                            className="btn btn-primary" 
                            style={{
                              backgroundColor: "#2a2a72",
                              backgroundImage:
                                "linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)",
                            }}>
                            View
                          </button>
                        </Link>
                        </td>
                      </tr>
                      <tr>
                        <td>1.</td>
                        <td>Vinod Master</td>
                        <td>
                          Ac Service
                        </td>
                        <td>
                         <Link to={'/booking/details'}>
                        <button
                            type="button"
                            className="btn btn-primary" 
                            style={{
                              backgroundColor: "#2a2a72",
                              backgroundImage:
                                "linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)",
                            }}>
                            View
                          </button>
                        </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* /.card-body */}
              </div>
            </div>
          </div>
        </div>
        {/* /.container-fluid */}
      </section>
      {/* /.content */}
    </div>
    </>
  );
};

export default RecentLeads;
