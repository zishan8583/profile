import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ServiceCard from "../../../components/ServiceCard";
import Sidebar from "../../../components/panels/Sidebar";
import { Navigate, useNavigate } from "react-router-dom";

const AddFaq = () => {
  const [input, setInput] = useState({ question: "", answer: "", categoryId:0  });
  const [categories, setCategory] = useState();

  useEffect(() => {
    getCategory();
  }, []);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    
    const { name, value } = e.target; 
    const list = input; 
    list[name] = value;  
    setInput(list);
  };

  const submitHandler = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(input);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    console.log(input);

    fetch("/faq/insert", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status === 200) {
          alert("Added Succesfully");
          navigate("/faq");
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

  return (
    <>
      <Sidebar active={"/faq"} />
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Add FAQ</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">FAQ Add</li>
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
                    <label>Question</label>
                    <input
                      type="text"      
                      className="form-control"
                      name="question"
                      input={input.question}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Answer</label>
                    <textarea
                     
                      className="form-control"
                      rows={4}
                      name="answer"
                      input={input.answer}
                     onChange={handleInputChange}
                      defaultinput={""}
                    />
                  </div>

                  <div className="form-group">
                    <div>
                      <label>Category</label>
                      <select
                        className="form-control select2"
                        style={{ width: "100%" }}
                        name='categoryId'
                        // value={input.categoryId}
                        onChange={handleInputChange}
                        >
                            <option>Select</option>
                        {
                            categories?.map((c)=>(
                                <option value={c.id}>{c.category_name}</option>
                            ))
                        }

                      </select>
                    </div>
                  
                  </div>
                <button className="btn btn-primary" onClick={submitHandler} >Post</button>
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

export default AddFaq;
