import { Switch } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../../components/panels/Sidebar";
import Profile from "../../../components/Profile";

const VerifyVendor = () => {
  const [toggle, setToggle] = useState(true);
  const [data, setData] = useState()
  useEffect(() => {
    getData();
  }, [])
  

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const getData = () =>{

    var requestOptions = {
      method: 'POST',
      redirect: 'follow'
    };
    
    fetch( '/vendor/getAll', requestOptions)
      .then(response => response.json())
      .then(result =>{
        if (result.status == 200) {
          let data = result.data.filter((f)=>(!parseInt(f.status)))
          console.log("dddd", data);
          setData(data)
        } else {
          alert("Something went wrong");
        }
      })
      .catch(error => console.log('error', error));


  }

  return (
    <>

    <Sidebar active="/verifyvendor"/>
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Vendor List</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Vendor List</li>
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
                        <th>Category</th>
                        <th style={{ width: 40 }}>Details</th>
                      </tr>
                    </thead>
                    <tbody>

                    {
                      data?.map((d,index)=>(

                        <tr key={d.id}>
                        <td>{index+1}</td>
                        <td>{d.name}</td>
                        <td>{d.category_name}</td>
                        <td>
                        <Link to={'/vendor/profile'} state={{ id: d.id }}>
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

                      ))
                    }
                      
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

export default VerifyVendor;
