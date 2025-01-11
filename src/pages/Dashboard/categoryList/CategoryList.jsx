import { Visibility, Add, ModeEdit, Delete } from "@mui/icons-material";
import { Switch } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../../components/panels/Sidebar";
import Profile from "../../../components/Profile";

const CategoryList = () => {
  const [toggle, setToggle] = useState(true);
  const [categories, setCategory] = useState();

  useEffect(() => {
    getCategory();
  }, []);

  const handleDelete = (categoryId) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      categoryId,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "/category/delete",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status === 200) {
          alert("Deleted Succesfully");
          location.reload();  
        }
      })
      .catch((error) => console.log("error", error));
  };

  const getCategory = () => {
    var requestOptions = {
      method: "POST",
      redirect: "follow",
    };

    fetch("/category/getAll", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        result.status == 200 ? setCategory(result.data) : null;
      })
      .catch((error) => console.log("error", error));
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <Sidebar active={"/categorylist"} />

      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Category List</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Category List</li>
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
                      <Link to={"/categorylist/addcategory"}>
                        <button className="btn btn-primary">
                          <Add /> Add New
                        </button>
                      </Link>
                    </div>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body p-0">
                    <table className="table">
                      <thead>
                        <tr>
                          <th style={{ width: 10 }}>Id</th>
                          <th>Category Name</th>
                          <th style={{ width: 40 }}>Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        {categories?.map((category, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{category?.category_name}</td>
                            <td className="d-flex ">
                            <Link
                                to="/CategoryList/details"
                                state={{ id: category?.id }}>
                                <Visibility sx={{ color: "orange" }} />
                              </Link>
                              <Link
                                to="/CategoryList/Edit"
                                state={{ id: category?.id }}>
                                <ModeEdit sx={{ color: "green" }} />
                              </Link>

                              <Delete
                                sx={{ color: "maroon" }}
                                onClick={() => handleDelete(category?.id)}
                              />
                            </td>
                          </tr>
                        ))}
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

export default CategoryList;
