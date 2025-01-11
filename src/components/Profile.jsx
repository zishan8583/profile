import React, { useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails, {
  getAccordionDetailsUtilityClass,
} from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Sidebar from "./panels/Sidebar";
import { Link, useLocation, useNavigation } from "react-router-dom";
import Wallet from "./modal/Wallet";
import { Switch } from "@mui/material";

const Profile = () => {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState();
  const [checked, setChecked] = React.useState(false);
  const location = useLocation();
  const { id } = location.state;

  useEffect(() => {
    getData();
  }, []);



  const getData = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      vendor_id: id,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/vendor/get", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("res", result);
        if (result.status == 200) {
          setData(result.data);
          setChecked(parseInt(result.data.status));
        } else {
          alert("Something went wrong");
        }
      })
      .catch((error) => console.log("error", error));
  };

  const handleStatus = (c) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      vendor_id: id,
      status: c,
    });

    console.log("checked",checked);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "/vendor/changeStatus",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        let c = checked;
        if(result.status == 200){
            return;
        }
        setChecked(!c)
      })
      .catch((error) => console.log("error", error));
  };

  const handleChange = () => {
    handleStatus(!checked);
    setChecked(!checked);
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
                <h1>Profile</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">User Profile</li>
                </ol>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3">
                {/* Profile Image */}
                <div className="card card-primary card-outline">
                  <div className="card-body box-profile">
                    <div className="text-center">
                      <img
                        className="profile-user-img img-fluid img-circle"
                        src="../../dist/img/user4-128x128.jpg"
                        alt="User profile picture"
                      />
                    </div>
                    <h3 className="profile-username text-center">
                      {data?.name}
                    </h3>
                    <p className="text-muted text-center">AC Service</p>

                    <a href="#" className="btn btn-block">
                      <Switch
                        defaultChecked={false}
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{ "aria-label": "controlled" }}
                      />
                    </a>

                    <a className="btn btn-primary btn-block mt-2">
                      <b onClick={() => setOpen(!open)}>Wallet</b>
                    </a>
                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
                {/* About Me Box */}

                {/* /.card */}
              </div>
              {/* /.col */}
              <div className="col-md-9">
                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title">About us</h3>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    <strong>
                      <i className="fas fa-book mr-1" /> {data?.company_name}
                    </strong>
                    <p className="text-muted">{data?.about}</p>
                    <hr />
                    <strong>
                      <i className="fas fa-map-marker-alt mr-1" /> Location
                    </strong>
                    <p className="text-muted">
                      {data?.address + " , " + data?.city}
                    </p>
                    <hr />
                  </div>
                  {/* /.card-body */}
                </div>

                <div className="card card-primary">
                  <div className="card-header ">
                    <h3 className="card-title">Documents</h3>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    <div className="tab-content">
                      <div className="active tab-pane" id="activity">
                        <div className="mt-2">
                          <Accordion>
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              style={{
                                backgroundColor: "#007bff",
                                color: "white",
                              }}
                              aria-controls="panel1a-content"
                              id="panel1a-header">
                              <Typography>Aadhar Card</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <object
                                data={data?.aadhar_card}
                                type="application/pdf"
                                width="100%"
                                height="100%"></object>
                              <a
                                href={data?.aadhar_card}
                                target="_blank"
                                download>
                                <button
                                  type="button"
                                  class="btn btn-primary mt-2 btn-sm">
                                  Download
                                </button>
                              </a>
                            </AccordionDetails>
                          </Accordion>
                        </div>
                        <div className="mt-2">
                          <Accordion>
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              style={{
                                backgroundColor: "#007bff",
                                color: "white",
                              }}
                              aria-controls="panel1a-content"
                              id="panel1a-header">
                              <Typography>PAN Card</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <object
                                data={data?.pan_card}
                                type="application/pdf"
                                width="100%"
                                height="100%"></object>
                              <a href={data?.pan_card} target="_blank" download>
                                <button
                                  type="button"
                                  class="btn btn-primary mt-2 btn-sm">
                                  Download
                                </button>
                              </a>
                            </AccordionDetails>
                          </Accordion>
                        </div>
                        <div className="mt-2">
                          <Accordion>
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              style={{
                                backgroundColor: "#007bff",
                                color: "white",
                              }}
                              aria-controls="panel1a-content"
                              id="panel1a-header">
                              <Typography>Shop Act</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <object
                                data={data?.shop_act}
                                type="application/pdf"
                                width="100%"
                                height="100%"></object>
                              <a href={data?.shop_act} target="_blank" download>
                                <button
                                  type="button"
                                  class="btn btn-primary mt-2 btn-sm">
                                  Download
                                </button>
                              </a>
                            </AccordionDetails>
                          </Accordion>
                        </div>
                        <div className="mt-2">
                          <Accordion>
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              style={{
                                backgroundColor: "#007bff",
                                color: "white",
                              }}
                              aria-controls="panel1a-content"
                              id="panel1a-header">
                              <Typography>Gst Certificate</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <object
                                data={data?.gst}
                                type="application/pdf"
                                width="100%"
                                height="100%"></object>
                              <a href={data?.gst} target="_blank" download>
                                <button
                                  type="button"
                                  class="btn btn-primary mt-2 btn-sm">
                                  Download
                                </button>
                              </a>
                            </AccordionDetails>
                          </Accordion>
                        </div>
                      </div>
                    </div>
                    {/* /.tab-content */}
                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}

        <Wallet open={open} setOpen={setOpen} />
      </div>
    </>
  );
};

export default Profile;
