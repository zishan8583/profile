import {
  ArrowForwardIos,
  CallRounded,
  CancelTwoTone,
  CloseRounded,
} from "@mui/icons-material";
import { useState, useEffect, useContext, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";
import "./orders.css";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import AuthContext from "../../store/authContext";
import { collection, query, onSnapshot, where } from "firebase/firestore";
import db from "../../firebase";
import { doc, deleteDoc } from "firebase/firestore";


function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

const Orders = () => {
  const authCtx = useContext(AuthContext);

  const [openTrackOrder, setOpenTrackOrder] = useState(false);
  const [id, setId] = useState();

  const handleTrackOrder = () => {
    setOpenTrackOrder(!openTrackOrder);
  };

  return (
    <div
      style={{
        flex: 1,
        paddingTop: 80,
        paddingBottom: 50,
        backgroundColor: "whitesmoke",
      }}>
      <div className="container px-3  clearfix">
        {/* ArrowForwardIosping orders table */}
        <div className="card">
          <div className="card-header">
            <h2 style={{ color: "#112D4E" }}>Orders</h2>
          </div>

          {openTrackOrder ? (
            <TrackOrder trackOrder={handleTrackOrder} id={id} />
          ) : (
            <Order trackOrder={handleTrackOrder} handleId={setId} />
          )}
        </div>
      </div>
    </div>
  );
};

const Order = ({ trackOrder, handleId }) => {
  const [data, setData] = useState([]);
  const [currentBooking, setCurrentBooking] = useState();
  const [recentOrders, setRecentOrders] = useState(false);
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    const q = query(
      collection(db, "currentJob"),
      where("customer_id", "==", authCtx.id)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      let a = [];
      snapshot.forEach((documentSnapshot) => {
    
        a.push({id: documentSnapshot.id, ...documentSnapshot.data()});
    
      });

      setCurrentBooking(a);

      if (recentOrders) {
        getBookings("/user/bookingHistory");
      } else {
        getBookings("/user/currentBookings");
      }

      console.log("current", currentBooking);
    });
  }, [recentOrders, trackOrder]);

  const getBookings = (url) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      user_id: authCtx.id,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("====================================");
        console.log(result.data);
        console.log("====================================");
        setData(result.data);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="card-body">
      {authCtx.isLoggedIn ? (
        <div className="table-responsive">
          <table className="table table-bordered m-0">
            <thead>
              <tr style={{ backgroundColor: "#112D4E", color: "white" }}>
                {/* Set columns width */}
                <th className="text-center py-3 px-4" style={{ minWidth: 400 }}>
                  Service &amp; Details
                </th>
                <th className="text-right py-3 px-4" style={{ width: 100 }}>
                  Total
                </th>
                <th
                  className="text-center align-middle py-3 px-0"
                  style={{ width: 40 }}>
                  <a
                    className="ArrowForwardIos-tooltip float-none text-light"
                    title
                    data-original-title="Clear cart">
                    <i className="ino ion-md-trash" />
                  </a>
                </th>
              </tr>
            </thead>
            <tbody>
              {!recentOrders &&
                currentBooking?.map((d, index) => (
                  <tr key={index}>
                    <td className="p-4">
                      <div className="media align-items-center">
                        <img
                          src="https://picsum.photos/1000/1000"
                          className="d-block ui-w-40 ui-bordered mr-4"
                          alt
                        />
                        <div className="media-body">
                          <h3 className="d-block text-dark">{d.category}</h3>
                          <small>
                            <span>{d.service}</span>
                          </small>
                        </div>
                      </div>
                    </td>

                    <td className="text-right font-weight-semibold align-middle p-4">
                      ₹{d.price}
                    </td>

                    <td className="text-center align-middle px-0 ">
                      <CancelTwoTone
                        style={{ color: "#3F72AF" }}
                        onClick={async () => {
                           
                          await deleteDoc(doc(db, "currentJob", d.id));
                          
                        }}
                      />
                    </td>
                  </tr>
                ))}

              {data?.map((d, index) => (
                <tr key={index}>
                  <td className="p-4">
                    <div className="media align-items-center">
                      <img
                        src="https://picsum.photos/1000/1000"
                        className="d-block ui-w-40 ui-bordered mr-4"
                        alt
                      />
                      <div className="media-body">
                        <h3 className="d-block text-dark">{d.category}</h3>
                        <small>
                          <span>{d.service}</span>
                        </small>
                      </div>
                    </div>
                  </td>

                  <td className="text-right font-weight-semibold align-middle p-4">
                    ₹{d.service_rate}
                  </td>

                  <td className="text-center align-middle px-0 ">
                    <ArrowForwardIos
                      style={{ color: "#3F72AF" }}
                      onClick={() => {
                        trackOrder();
                        handleId(d.id);
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <button
              onClick={() => setRecentOrders(!recentOrders)}
              className="btn btn-primary mt-5">
              {recentOrders ? "Show Current" : "Show Recent"}
            </button>
          </div>
        </div>
      ) : (
        <div style={style}>
          <div>Login To Track Orders</div>
          <button
            onClick={()=>authCtx.modelHandler(true)}
            style={{ marginTop: 20, color: "white" }}
            className="btn btn-warning">
            Login
          </button>
        </div>
      )}
    </div>
  );
};

const TrackOrder = ({ trackOrder, id }) => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  const [activeStep, setActiveStep] = useState(1);
  const [data, setData] = useState();

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      booking_id: id,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/booking/get", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("====================================");
        console.log("res", result.data);
        console.log("====================================");
        if (result.status == 200) {
          setData(result.data);
          setActiveStep(parseInt(result.data.status) - 1);
        }
      })
      .catch((error) => console.log("error", error));
  }, []);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const cancelOrder = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      booking_id: id,
      role_id: 3,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/booking/cancel_booking", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        trackOrder();
      })
      .catch((error) => console.log("error", error));
  };

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
    <div className="card-body">
      <h6>Order ID: {id}</h6>
      <article className="card">
        <div className="card-body row">
          <div
            className="col-lg-6 col-md-6 col-sm-12 mt-3"
            style={{ textAlign: "center" }}>
            {" "}
            <strong>Ordered Time:</strong> <br />
            {data?.scheduled_time} <br />
            {data?.scheduled_date}{" "}
          </div>
          <div
            className="col-lg-6 col-md-6 col-sm-12 mt-3"
            style={{ textAlign: "center" }}>
            {" "}
            <strong>Assigned Vendor:</strong> <br /> {data?.vendor_name} <br />{" "}
            <CallRounded /> +{data?.vendor_contact_number}{" "}
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
                  <strong>{data?.category}</strong> <br /> {data?.service}
                </p>{" "}
                <span className="text-muted">₹{data?.service_rate} </span>
              </figcaption>
            </figure>
          </li>
          {data?.status == 4 && (
            <li className="col-md-6 mt-3">
              <figure className="itemside mb-3">
                {/* <div className="aside">
                  {" "}
                  <CheckCircle sx={{ color: "green" }} />{" "}
                </div>
                <figcaption className="info">
                  <p className="title">
                    Payment Success <br />
                  </p>
                </figcaption> */}
                <a
                  className="btn btn-primary"
                  href={data?.invoice_pdf}
                  target="_blank">
                  Download Invoice
                </a>
              </figure>
            </li>
          )}
          {data?.status < 0 && (
            <li className="col-md-6 mt-3">
              <figure className="itemside mb-3">
                <div className="aside">
                  {" "}
                  <CloseRounded sx={{ color: "red" }} />{" "}
                </div>
                <figcaption className="info">
                  <p className="title">
                    Order Cancelled <br />
                  </p>
                </figcaption>
              </figure>
            </li>
          )}
        </ul>
        <hr />

        <a
          className="btn btn-warning"
          data-abc="true"
          onClick={trackOrder}
          style={{ color: "white" }}>
          <i className="fa fa-chevron-left" /> Back to orders
        </a>

        {data?.status > 0 && data?.status != 4 && (
          <a
            className="btn btn-warning float-lg-end"
            data-abc="true"
            onClick={cancelOrder}
            style={{ color: "white" }}>
            Cancel Order
          </a>
        )}
      </div>
    </div>
  );
};

const style = {
  width: "100%",
  textAlign: "center",
  fontWeight: "bold",
  fontSize: 25,
};

export default Orders;
