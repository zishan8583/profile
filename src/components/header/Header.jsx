import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "@mui/material";
import { useContext, useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Cart from "../../pages/cart/Cart";
import SignIn from "../../pages/signIn/SignIn";
import { Link } from "react-router-dom";
import AuthContext from "../../store/authContext";


function Header() {
  const [cartModal, setcartModal] = useState(false);
  const [open, setOpen] = useState(false);
  const authCtx = useContext(AuthContext);

  
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  
  const handleOpen = () => authCtx.modelHandler(true);
  const handleClose = () => authCtx.modelHandler(false);
  


  const handleAuth = () => {
    authCtx.isLoggedIn ? authCtx.logout() : handleOpen();
  }

  const handleClick = () => {
    setcartModal(!cartModal);
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <div className="headerContainer fixed-top ">
        <nav className="navbar navbar-expand-lg  navbar-light bgColor ">
          <img
            className="navbar-brand"
            src={require("../../assets/Call-in-city-logo.png")}
            alt
          />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li class="nav-item">
                <Link className="nav-link" to={'/orders'} >
                  Track Order
                </Link>
              </li>
              <li className="nav-link">
              <Link to={'/cart'}>
                <FontAwesomeIcon icon={faCartShopping}  />
              </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link btn btn-warning " style={{color:'white'}}onClick={handleAuth}>
                 {
                  authCtx.isLoggedIn ? "Log out" : "Log In"
                 }
                 
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}>
        {/* <Modal open={cartModal} onClose={() => setcartModal(false)}>
          <Cart close={setcartModal} />
        </Modal> */}
        <Modal
        open={authCtx.loginModel}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <SignIn close={handleClose}/>
      </Modal>
      </div>
    </>
  );
}

export default Header;
