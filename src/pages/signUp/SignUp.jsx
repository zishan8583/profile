import React, { useState, useRef } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import "./signUp.css";
import { Close, Email, Face2, Person } from "@mui/icons-material";
import { Link } from "react-router-dom";
import instance from "../../axiosConfig";
import axios from "axios";
import AuthFormValidation from "../../util/AuthFormValidation";
import { useNavigate } from 'react-router-dom';



const SignUp = ({ close, setSignUp,setOtp,number }) => {
  let navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    mobile_no: "",
    email_id: "",
  });

  const handleInputChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const submitHandler = async () => {
    try {
      const status = await AuthFormValidation(
        values.name,
        values.mobile_no,
        values.email_id
      );
      console.log('====================================');
      console.log(status,"stauta");
      console.log('====================================');
      if (status) {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(values);

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch("/user/register", requestOptions)
          .then((response) => response.json())
          .then((result) => {
            console.log('====================================');
            console.log("aaaa");
            console.log('====================================');
            if(result.error){

                if (result.error.validation.email_id) {
                  alert(result.error.validation.email_id)
                }
                if (result.error.validation.mobile_no) {
                  alert(result.error.validation.mobile_no)
                }
                
              
              }
              else{
                setOtp(false);
                setSignUp(false);
                number({number:values.mobile_no})
                
              }

          })
          .catch((error) => console.log("error", error));
      }
    } catch (error) {

    }
  };

  return (
    <div className="container h-100">
      <div className="d-flex justify-content-center h-100">
        <div className="user_card">
          <div className="d-flex justify-content-center">
          <Close
                  style={{
                    position: "absolute",
                    top: 10,
                    right: 5,
                    color: "red",
                  }}
                  onClick={() => close(false)}
                />
            <div className="brand_logo_container">
              <img
                src={require("../../assets/Call-in-city-logo.png")}
                className="brand_logo"
                alt="Logo"
              />
            </div>
          </div>
          <div className="d-flex justify-content-center form_container">
            <div>
              <div className="input-group mb-2">
                <div className="input-group-append">
                  <span className="input-group-text">+91</span>
                </div>
                <input
                  type="tel"
                  className="form-control input_user"
                  placeholder="Enter Phone Number"
                  name="mobile_no"
                  required
                  value={values.mobile_no}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-group mb-2">
                <div className="input-group-append">
                  <span className="input-group-text">
                    {" "}
                    <Person />{" "}
                  </span>
                </div>
                <input
                  type="Text"
                  className="form-control input_pass"
                  placeholder="Enter Name"
                  required
                  name="name"
                  value={values.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-group mb-2">
                <div className="input-group-append">
                  <span className="input-group-text">
                    {" "}
                    <Email />{" "}
                  </span>
                </div>
                <input
                  type="Text"
                  className="form-control input_pass"
                  placeholder="Enter Email"
                  name="email_id"
                  required
                  value={values.email_id}
                  onChange={handleInputChange}
                />
              </div>

              <div className="d-flex justify-content-center mt-3 login_container">
                <button onClick={submitHandler} className="btn login_btn">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="d-flex justify-content-center links" style={{color:"white"}}>
              already have an account?{" "}
              <a onClick={() => setSignUp(false)} className="ml-2">
                Login
              </a>
            </div>
            <div className="d-flex justify-content-center links" style={{color:"white"}}>
              {/* <a>Forgot your password?</a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
