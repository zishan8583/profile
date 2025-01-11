
import React, { useState } from "react";
import "./Login.css";

const Login = ({ token }) => {
  const [otpField, setOtpField] = useState(false);

  const handleSubmission = () =>{
    if (!otpField) { 
        setOtpField(true);
        return;
    }

    token('dsfsdjfsdghf');


  }

  return (
    <div className="container-fluid " style={{backgroundColor: '#112D4E', height: '100vh'}}>
      <div className="container h-100">
        <div className="d-flex justify-content-center h-100">
          <div className="user_card">
            <div className="d-flex justify-content-center">
              <div className="brand_logo_container">
                <img
                  src={require("../../../components/assets/Call-in-city-logo.png")}
                  className="brand_logo"
                  alt="Logo"
                />
              </div>
            </div>

            <div className="d-flex justify-content-center form_container">
              <form>
                {otpField ? (
                    <div className="input-group mb-2">
                    <div className="input-group-append">
                      <span className="input-group-text">OTP</span>
                    </div>
                    <input
                      type="Text"
                      className="form-control input_pass"
                      placeholder="Enter OTP"
                      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                      required
                    />
                  </div>
                ) : (
                  <div className="input-group mb-3">
                    <div className="input-group-append">
                      <span className="input-group-text">+91</span>
                    </div>
                    <input
                      type="tel"
                      className="form-control input_user"
                      placeholder="Enter Phone Number"
                    />
                  </div>
                  
                )}

                <div className="d-flex justify-content-center mt-3 login_container">
                  <button  name="button" className="btn login_btn" onClick={handleSubmission}>
                   {otpField ?  'Verify' : "Get Otp"}
                  </button>
                </div>
              </form>
            </div>
            {/* <div className="mt-4">
            <div className="d-flex justify-content-center links">
              Don't have an account?{" "}
              <a href="#" className="ml-2">
                Sign Up
              </a>
            </div>
            <div className="d-flex justify-content-center links">
              <a href="#">Forgot your password?</a>
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
