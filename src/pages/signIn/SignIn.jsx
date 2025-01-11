import React, { useContext, useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import "./signIn.css";
import { Close, Email, HorizontalSplit } from "@mui/icons-material";
import Signup from "../signUp/SignUp";
import SignUp from "../signUp/SignUp";
import { Link } from "react-router-dom";
import AuthContext from "../../store/authContext";

const SignIn = ({ close }) => {
  const [Signup, openSignup] = useState(false);
  const [otp, setOtp] = useState(true);
  const [values, setValues] = useState({ email: "", otpValue: "" });
  const [error, setError] = useState(undefined);
  const [url, setUrl] = useState("/user/otp-login");

  const authCtx = useContext(AuthContext);

  const handleInputChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const hitLoginApi = (URL) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email_id: values.email,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(URL, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.error) {
          alert(result.error);
        }else{
          setOtp(false);
        }
      })
      .catch((error) => console.log("error", error));
  };

  const handleSubmit = () => {
    if (otp === true) {
      console.log("AA", values);
      // if (values.number.length !== 10) {
      //   alert("Enter Valid Number");
      //   return;
      // } else {
       
        hitLoginApi("user/login");
        // setUrl("user/otp-login");
        return;
      // }
    }

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email_id: values.email,
      otp: values.otpValue,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    console.log("====================================");
    console.log(url, raw);
    console.log("====================================");

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log('====================================');
        console.log("res",result);
        console.log('====================================');
        // if (result.error) {
        //   alert(result.error);
        // } else 
        // if(result.data.token) 
        // {
          authCtx.login(result.data.token, result.data.user_id,result.data.name);
          close(false);
        // }
      })
      .catch((error) => {
        console.log("error", error)});
  };

  return (
    <>
      {!Signup ? (
        <div className="container h-100">
          <div className="d-flex justify-content-center h-100">
            <div className="user_card">
              <div className="d-flex justify-content-center">
                <Close
                  style={{
                    position: "absolute",
                    top: 10,
                    right: 5,
                    color: "white",
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
                <form>
                  {otp ? (
                    <div className="input-group mb-3">
                      <div className="input-group-append">
                        <span className="input-group-text"> <Email/>  </span>
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                        className="form-control input_user"
                        placeholder="Enter Email"
                      />
                    </div>
                  ) : (
                    <div className="input-group mb-2">
                      <div className="input-group-append">
                        <span className="input-group-text">OTP</span>
                      </div>
                      <input
                        type="Text"
                        className="form-control input_pass"
                        name="otpValue"
                        value={values.otpValue}
                        onChange={handleInputChange}
                        placeholder="Enter OTP"
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        required
                      />
                    </div>
                  )}
                      {/* <div style={{color: 'white', width:'100%',textAlign:'center', backgroundColor:'#c0392b' }}>Error: Try again later</div> */}
                  <div className="d-flex justify-content-center mt-3 login_container">
                    <button
                      type="button"
                      name="button"
                      className="btn login_btn"
                      onClick={handleSubmit}>
                      Login
                    </button>
                  </div>
                </form>
              </div>
              <div className="mt-4">
                <div className="d-flex justify-content-center links" style={{color:"white"}}>
                  Don't have an account?{" "}
                  <a onClick={() => openSignup(true)} className="ml-2">
                    Sign Up
                  </a>
                </div>
                <div className="d-flex justify-content-center links" style={{color:"white"}}>
                  {/* <a>Forgot your password?</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <SignUp
          setSignUp={openSignup}
          setOtp={setOtp}
          number={setValues}
          close={close}
        />
      )}
    </>
  );
};

export default SignIn;
