import { ArrowForwardIos, Book, CallRounded } from "@mui/icons-material";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";
import './booking.css'
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Sidebar from "../../../../components/panels/Sidebar";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

export const BookingDetails = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  console.log("====================================");
  console.log(windowSize);
  console.log("====================================");

  const steps = [
    {
      label: "Order confirmed",
    },
    {
      label: "Partner Assigned",
    },
    {
      label: "In Progress",
    },
    {
      label: "Order Completed",
    },
  ];
  return (
    <>
      <Sidebar active="/recent/leads"/>
      <div className="content-wrapper">
        <section className="content">
          <div className="card-body">
            <h6>Order ID: OD45345345435</h6>
            <article className="card">
              <div className="card-body row">
                <div
                  className="col-lg-3 col-md-6 col-sm-12 mt-3"
                  style={{ textAlign: "center" }}>
                  {" "}
                  <strong>Ordered Time:</strong> <br />
                  09 nov 2022{" "}
                </div>
                <div
                  className="col-lg-3 col-md-6 col-sm-12 mt-3"
                  style={{ textAlign: "center" }}>
                  {" "}
                  <strong>Assigned Vendor:</strong> <br /> Star Technologies,{" "}
                  <br /> <CallRounded /> +1598675986{" "}
                </div>
                <div
                  className="col-lg-3 col-md-6 col-sm-12 mt-3"
                  style={{ textAlign: "center" }}>
                  {" "}
                  <strong>Status:</strong> <br /> Partner Assigned{" "}
                </div>
                <div
                  className="col-lg-3 col-md-6 col-sm-12 mt-3"
                  style={{ textAlign: "center" }}>
                  {" "}
                  <strong>Tracking #:</strong> <br /> BD045903594059{" "}
                </div>
              </div>
            </article>

            {/* <div className="track">
      <div className="step active"> <span className="icon"> <i className="fa fa-check" /> </span> <span className="text">Order confirmed</span> </div>
      <div className="step active"> <span className="icon"> <i className="fa fa-user" /> </span> <span className="text"> Partner Assigned</span> </div>
      <div className="step"> <span className="icon"> <i className="fa fa-truck" /> </span> <span className="text"> In Progress </span> </div>
      <div className="step"> <span className="icon"> <i className="fa fa-box" /> </span> <span className="text">Order Completed</span> </div>
    </div> */}

            <Box sx={{ marginTop: 5, width: "100%" }}>
              <Stepper
                activeStep={activeStep}
                orientation={
                  windowSize.innerWidth <= 770 ? "vertical" : "horizontal"
                }>
                {steps.map((step, index) => (
                  <Step key={step.label}>
                    <StepLabel>{step.label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>

            <hr />

            <div className="">
              <ul className="row mt-5 justify-content-between">
                <li className="col-md-6">
                  <figure className="itemside mb-3 ">
                    <div className="aside">
                      <img
                        src="https://i.imgur.com/iDwDQ4o.png"
                        className="img-sm border"
                      />
                    </div>
                    <figcaption className="info align-self-center">
                      <p className="title">
                        <strong>Laptop Repairing</strong> <br /> charging Port
                        Damaged
                      </p>{" "}
                      <span className="text-muted">$950 </span>
                    </figcaption>
                  </figure>
                </li>
                <li className="col-md-6 mt-3">
                  <figure className="itemside mb-3">
                    <div className="aside">
                      {" "}
                      <CheckCircle sx={{ color: "green" }} />{" "}
                    </div>
                    <figcaption className="info">
                      <p className="title">
                        Payment Success <br />
                      </p>
                    </figcaption>
                  </figure>
                </li>
                {/* <li className="col-md-4">
        <figure className="itemside mb-3">
          <div className="aside"><img src="https://i.imgur.com/Bd56jKH.png" className="img-sm border" /></div>
          <figcaption className="info align-self-center">
            <p className="title">ACER Laptop with 500GB HDD <br /> 8GB RAM</p> <span className="text-muted">$650 </span>
          </figcaption>
        </figure>
      </li> */}
              </ul>
              <hr />
            <Link to='/recent/leads'>
              <a
                className="btn btn-warning"
                data-abc="true"
                style={{ color: "white" }}>
                <i className="fa fa-chevron-left" /> Back to orders
              </a>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BookingDetails;
