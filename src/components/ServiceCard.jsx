import { Typography } from "@mui/material";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import {
  Add,
  AddBoxRounded,
  LabelImportantSharp,
  Remove,
  RemoveCircleRounded,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const ServiceCard = ({ getValue, submitHandler, data }) => {
  const [inputList, setInputList] = useState([
    { serviceName: "", serviceDesc: "", serviceRate: 0, file: "" },
  ]);

  useLayoutEffect(() => {
    if (data) {
      
      setValues();
    }
  }, [data]);

  const setValues = () => {
    console.log("aa", data);

    let list = [];

    data?.forEach((element) => {
      let obj = {
        id: element.id,
        serviceName: element.service_name,
        serviceDesc: element.service_desc,
        serviceRate: element.service_rate,
      };
      list.push(obj);
    });
    (list.length > 0) &&  setInputList(list);
  
    console.log("list", list);
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
  
    list[index][name] = value;
    console.log("aa",list);
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
    // getValue(inputList);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([
      ...inputList,
      { serviceName: "", serviceDesc: "", serviceRate: 0, file: "" },
    ]);
    getValue(inputList);
  };

  return (
    <div>
      {inputList.map((x, i) => (
        <div className="col-md-12">
          <div className="card card-primary">
            <div className="card-header">
              <h3 class="card-title">Add Serive Card</h3>
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
                <label htmlFor="inputName">Service Name</label>
                <input
                  type="text"
                  id="inputName"
                  className="form-control"
                  name="serviceName"
                  value={x.serviceName}
                  onChange={(e) => handleInputChange(e, i)}
                />
              </div>
              <div className="form-group">
                <label>Service Description</label>
                <textarea
                  id="inputDescription"
                  className="form-control"
                  rows={4}
                  name="serviceDesc"
                  value={x.serviceDesc}
                  onChange={(e) => handleInputChange(e, i)}
                />
              </div>

              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="inputName">Service Rate</label>
                    <input
                      type="number"
                      id="inputName"
                      className="form-control"
                      name="serviceRate"
                      value={x.serviceRate}
                      onChange={(e) => handleInputChange(e, i)}
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="inputName">Upload Image</label>
                    <input
                      type="file"
                      id="inputName"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>

              <div className="card-tools d-flex flex-row justify-content-between">
                {inputList.length > 1 && (
                  <button
                    className="btn btn-primary"
                    onClick={() => handleRemoveClick(i)}>
                    <Remove />
                  </button>
                )}
                <button className="btn btn-primary" onClick={handleAddClick}>
                  <Add />
                </button>
              </div>
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
      ))}

      <div className="row">
        <div className="col-12">
          <Link to={"/categorylist"}>
          <a className="btn btn-secondary">Cancel</a>
          </Link>
          <input
            type="submit"
            defaultinput="Create new Category"
            className="btn btn-success float-right"
            onClick={() => submitHandler(inputList)}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
