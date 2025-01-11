import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../../../components/panels/Sidebar";
import "./categoryDetails.css";
import "./ServicePlanCard.scss";
const CategoryDetails = () => {
  const [data, setData] = useState();

  const location = useLocation();
  const { id } = location.state;

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
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
        if (result.status === 200) {
          setData(result.data);
        }
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <Sidebar />
      <div className="content-wrapper">
        {/* Main content */}
        <section className="content">
          <div className="container serviceTypeContainer">
            <div className="row align-items-start justify-content-center">
              <div className="col-lg-4 col-md-4 col-sm-10">
                <div className="serviceImgContainer">
                  <img
                    src="https://img.freepik.com/premium-photo/repairman-uniform-installing-outside-unit-air-conditioner_93675-91162.jpg?w=2000"
                    className="serviceImg"
                  />
                </div>
              </div>
              <div className="col-lg-5 col-md-5 col-sm-9 infoSection">
                <h2 className="serviceTitle">
                  {data?.categoryData.category_name}
                </h2>
                <p className="p1 subServiceTitle">
                  {data?.categoryData.category_desc}
                </p>
                {/* <button type="button" className="btn btn-outline-light">Book Now</button> */}

                <div className="d-flex flex-row mt-10 bottomContainer align-items-end">
                  <div className="p-2" style={{ textAlign: "center" }}>
                    <a
                      className="btn btn-primary btn-floating m-1"
                      style={{ backgroundColor: "white" }}
                      href="#!"
                      role="button">
                      <img
                        src="https://static.vecteezy.com/system/resources/previews/010/353/285/original/colourful-google-logo-on-white-background-free-vector.jpg"
                        style={{ width: 35 }}
                      />
                    </a>

                    <div className="d-flex">
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                    </div>
                  </div>

                  <div
                    className="p-2 d-flex flex-column"
                    style={{ textAlign: "center", color: "white" }}>
                    <p
                      style={{
                        marginBottom: 0,
                        fontWeight: "bold",
                        fontSize: 20,
                        color: "orange",
                      }}>
                      3000+
                    </p>
                    <div>Happy Customers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              {data?.serviceData.map((s) => (
                <div className="col-12 mt-2">
                  <div className="card ">
                    <div className="row">
                      <div className="col-lg-4 d-flex align-items-center justify-content-center">
                        <img
                          className="sampleImg"
                          src="https://s-media-cache-ak0.pinimg.com/236x/3b/36/ca/3b36ca3afe0fa0fd4984b9eee2e154bb.jpg"
                        />
                      </div>

                      <div className="col-lg-8 ">
                        <div className="description">
                          <h2 style={{color: 'black', fontWeight: 'bold'}}>{s.service_name}</h2>
                     
                          <h1>Rs:{s.service_rate}</h1>
                        
                            <ul style={{ listStyleType: "disc", marginTop: 10 }}>
                              {s.service_desc.split("\n").map((sd) => (
                                <li>{sd}</li>
                              ))}
                            </ul>
                          

                          <button>Add to Cart</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* /.content */}
      </div>
    </>
  );
};

export default CategoryDetails;
