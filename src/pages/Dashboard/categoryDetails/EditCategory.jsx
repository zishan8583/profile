import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ServiceCard from "../../../components/ServiceCard";
import Sidebar from "../../../components/panels/Sidebar";
import { useNavigate, useLocation } from "react-router-dom";
import { Preview } from "@mui/icons-material";

const EditCategory = () => {
  const [Data, setData] = useState([]);
  const [input, setInput] = useState({ name: "", desc: "" });
  const [loading, setLoading] = useState(true);
  const [cardInput, setcardInput] = useState();

  const location = useLocation();
  const { id } = location.state;
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getData(id);
    setLoading(false);
  }, []);

  const getData = (id) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      id,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/category/get", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        result.status === 200 ? setValues(result.data) : null;
      })
      .catch((error) => console.log("error", error));
  };

  const getValue = (v) => {
    setcardInput(v);
  };

  const setValues = (data) => {
    const { categoryData, serviceData } = data;
    setData(serviceData);
    console.log("data", data);

    setInput((prev) => ({ ...prev, name: categoryData.category_name }));
    setInput((prev) => ({ ...prev, desc: categoryData.category_desc }));
  };

  const handleInputChange = (e) => {
    console.log("E",e.target.name,e.target.value);
    const { name, value } = e.target;
    setInput((prev)=>({...prev,[name]:value}));
  };

  const submitHandler = (services) => {

    const {name,desc} = input;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      id,
      name,
      desc,
      services
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    console.log(JSON.parse(raw));

    fetch("/category/update", requestOptions)
      .then((response) => response.json())
      .then((result) => {
            console.log(result);
          if (result.status === 200) {
            alert("Updated Successfully");
            navigate("/categorylist")
          }

      })
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <Sidebar />
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Category Add</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Category Add</li>
                </ol>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        {/* Main content */}
        <section className="content">
          <div className="row">
            <div className="col-md-12">
              <div className="card card-primary">
                <div className="card-header">
                  <div className="card-tools">
                    <button
                      type="button"
                      className="btn btn-tool"
                      data-card-widget="collapse"
                      title="Collapse">
                      <i className="fas fa-minus" />
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="inputName">Category Name</label>
                    <input
                      type="text"
                      id="inputName"
                      className="form-control"
                      name="name"
                      value={input.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputdesc">Category desc</label>
                    <textarea
                      id="inputdesc"
                      className="form-control"
                      rows={4}
                      name="desc"
                      value={input.desc}
                      onChange={handleInputChange}
                      defaultinput={""}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="inputName">Upload Cover Photo</label>
                    <input
                      type="file"
                      id="inputName"
                      className="form-control"
                    />
                  </div>

                  <ServiceCard data={Data} submitHandler={submitHandler} />
                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
            </div>
          </div>
        </section>
        {/* /.content */}
      </div>
    </>
  );
};

export default EditCategory;
