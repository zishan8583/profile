import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ServiceCard from "../../../components/ServiceCard";
import Sidebar from "../../../components/panels/Sidebar";
import { Navigate, useNavigate } from "react-router-dom";

const AddCategory = () => {
  const [input, setInput] = useState({ name: "", desc: "", image:[]});
  const [cardInput, setcardInput] = useState();
  const navigate = useNavigate();
  const getValue = (v) => {
    setcardInput(v);
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    const list = input;
    if (name == 'image') {
      console.log("dfasdfgdf", files);

      list.image = e.target.files[0];
    
    }
    else{
      list[name] = value;
    }
  
    setInput(list);

  };

 
  const submitHandler = (inputList) => {
  
    const { name, desc, image } = input;
    console.log("image",image);
    var formdata = new FormData();
  


    inputList.forEach((input,index) => {
      formdata.append(`services[${index}][serviceName]`, input.serviceName);
      formdata.append(`services[${index}][serviceDesc]`, input.serviceDesc);
      formdata.append(`services[${index}][serviceRate]`, input.serviceRate);
      formdata.append(`services[${index}][image]`,image,image.name);
    });

    formdata.append("name", name);
    formdata.append("desc", desc);
    formdata.append("image",image,image.name);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };


    fetch("/category/insert", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
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
                      style={{ textTransform: "capitalize" }}
                      input={input.name}
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
                      style={{ textTransform: "capitalize" }}
                      input={input.desc}
                      onChange={handleInputChange}
                      defaultinput={""}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="inputName">Upload Cover Photo</label>
                    <input
                      type="file"
                      id="inputName"
                      name="image"
                      className="form-control"
                      onChange={handleInputChange}
                    />
                  </div>

                  <ServiceCard
                    getValue={getValue}
                    submitHandler={submitHandler}
                  />
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

export default AddCategory;
