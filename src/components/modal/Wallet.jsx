import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import Sidebar from "../panels/Sidebar";
import "./wallet.css";



export default function Wallet(props) {
  const {  open, setOpen } = props;

  return (
    <Dialog open={open}>
      <div className="mobile">
        <div className="header">
          <div className="navigation">
            <i 
            onClick={()=>setOpen(false)}
            className="fas fa-arrow-left" />
          </div>
        </div>
        <div className=""
            style={{
                backgroundColor: '#21223f'
            }}
        >
          <div className="total">
            <div className="label">Total balance</div>
            <div className="value">$32,058.98</div>
            <input type="number" placeholder="Enter Amount" />
            <button className="mt-2 btn btn-outline-primary btn-light">Recharge</button>
          </div>

          <div className=""
            style={{
                paddingLeft: 3,
                paddingRight: 3
            }}
          >
          Recents
            <div
              className="row mt-3"
              style={{
                backgroundColor: "white",
                borderRadius: 5,
                color: "#21223f",
                paddingLeft: 15,
                paddingRight: 15,
                paddingTop: 5,
                paddingBottom: 4,
                fontWeight: "bold",
              }}>
              <div className="col-6 ">John Doe</div>
              <div
                className="col-6"
                style={{
                  backgroundColor: "red",
                  alignSelf: 'center',
                  textAlign: 'center',
                  borderRadius: 10,
                  color: 'white',
                  fontWeight: 'normal',
                }}>
                Rs.44444
              </div>
            </div>
            <div
              className="row  mt-3"
              style={{
                backgroundColor: "white",
                borderRadius: 5,
                color: "#21223f",
                paddingLeft: 15,
                paddingRight: 15,
                paddingTop: 5,
                paddingBottom: 4,
                fontWeight: "bold",
              }}>
              <div className="col-6 col-3">John Doe</div>
              <div
                className="col-6"
                style={{
                  backgroundColor: "green",
                  alignSelf: 'center',
                  textAlign: 'center',
                  borderRadius: 10,
                  color: 'white',
                  fontWeight: 'normal',
                }}>
                Rs.44444
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </Dialog>
  );
}
