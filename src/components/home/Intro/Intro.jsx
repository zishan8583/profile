import { Autocomplete, Button, TextField } from "@mui/material";
import { services } from "../../../assets/data";
import Crousel from "../../ui/Crousel";
import Box from "@mui/material/Box";
import "./intro.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "@mui/icons-material";

const Intro = () => {
  const [data, setData] = useState();
  const [value, setValue] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    var requestOptions = {
      method: "POST",
      redirect: "follow",
    };

    fetch("/category/getAll", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status == 200) {
          setData(result.data);
        }
      })
      .catch((error) => console.log("error", error));
  }

  function handleNavigation() {
    navigate("/service", { state: { id: value } });
  }

  function handleValue(e) {
    setValue(e.target.value);
  }

  return (
    <div className="introContainer">
      <h3 className="darkTitle">Book your Professional Now in Pune & PCMC</h3>

      <div className="row align-items-center justify-content-center">
        <div className="col-lg-12 col-md-12 w-100">
          <div className="crouselContainer mb-5">
            <Crousel />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 searchContainer mb-5">
          <h5 className="searchTitle">Get Expert Technician For Your Device</h5>

          {/* <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{
              "& .MuiTextField-root": { m: 1 },
              justifyContent: "center",
              alignItems: "center",
            }}>
            <div
              style={{
                backgroundColor: "white",
                width: "100%",
                maxWidth: 250,
              }}>
              fgjhfghgkhgh
              <Autocomplete
                // disablePortal
                id="combo-box-demo"
                options={services}
                getOptionLabel={(service) => service.title}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Select the Service"
                    style={{ backgroundColor: "white" }}
                  />
                )}
              />
              <TextField
                id="outlined-number"
                label="Number"
                type="number"
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              />
            </div>

            <div style={{ marginTop: 15 }}>
              <Button variant="contained">Check the prices</Button>
            </div>
          </Box> */}

          <div className="card p-3" >
          

            <div className="row align-items-center">
            <div className="card-details p-0 col-10">
              {" "}
              
              <select onChange={handleValue} name="cars" id="cars">
                {data?.map((service, index) => (
                  <option value={service.id} key={index}>
                    {service.category_name}
                  </option>
                ))}
              </select>{" "}
              <span>Select the Service Type</span>{" "}
              
            </div>
            <div className="col-2 p-0">
                  <button className="btn btn-primary" onClick={handleNavigation}>
                    <Search/>
                  </button>
            </div>

            </div>
           
           
           
           
           
            {/* 
            <div className="card-details mt-25">
              {" "}
              <input
                type="text"
                placeholder="Enter the Number"
              />{" "}
              <span>Number</span>{" "}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
