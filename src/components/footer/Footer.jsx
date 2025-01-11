import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Email,
  Facebook,
  FacebookRounded,
  Instagram,
  LocationCity,
  Phone,
  Twitter,
} from "@mui/icons-material";
import React from "react";
import { services } from "../../assets/data";

const Footer = () => {
  return (
    <div style={{ paddingBottom: 20, backgroundColor: '#112D4E' }}>
      {/* Footer */}
      <footer
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: "#112D4E" }}>
        {/* Grid container */}
        <div className="container p-4 pb-0">
          {/* Section: Links */}
          <section className>
            {/*Grid row*/}
            <div className="row">
              {/* Grid column */}
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3 ">
                <div style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
                  <img src={require("../../assets/Call-in-city-logo.png")} />
                </div>

              </div>
              {/* Grid column */}
              <hr className="w-100 clearfix d-md-none" />
              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Our Services
                </h6>

                <p>{<a className="text-white">{services[0].title}</a>}</p>
                <p>{<a className="text-white">{services[1].title}</a>}</p>
                <p>{<a className="text-white">{services[2].title}</a>}</p>
                <p>{<a className="text-white">{services[3].title}</a>}</p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <p>{<a className="text-white">{services[4].title}</a>}</p>
                <p>{<a className="text-white">{services[5].title}</a>}</p>
                <p>{<a className="text-white">{services[6].title}</a>}</p>
                <p>{<a className="text-white">{services[7].title}</a>}</p>


              </div>
              {/* Grid column */}
              <hr className="w-100 clearfix d-md-none" />
              {/* Grid column */}
            
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Contact
                </h6>
                <p>
                  <LocationCity /> New York, NY 10012, US
                </p>
                <p>
                  <Email /> info@gmail.com
                </p>
                <p>
                  <Phone /> + 01 234 567 88
                </p>

                <hr className="w-100 clearfix d-md-none" />

                <h6 className="text-uppercase mt-4 font-weight-bold">
                  Follow us
                </h6>
                {/* Facebook */}
                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#3b5998" }}
                  href="#!"
                  role="button">
                  <FacebookRounded />
                </a>
                {/* Twitter */}
                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#55acee" }}
                  href="#!"
                  role="button">
                  <Twitter />
                </a>

                {/* Instagram */}
                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#ac2bac" }}
                  href="#!"
                  role="button">
                  <Instagram />
                </a>
              </div>
              {/* Grid column */}
              {/* Grid column */}
            </div>
            {/*Grid row*/}
          </section>
          {/* Section: Links */}
        </div>
        {/* Grid container */}
      </footer>
      {/* Footer */}
    </div>
  );
};

export default Footer;
