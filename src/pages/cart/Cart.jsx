import { Delete } from "@mui/icons-material";
import { useContext } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import db from "../../firebase";
import AuthContext from "../../store/authContext";
import CartContext from "../../store/cartContext";
import {
  addDoc,
  doc,
  onSnapshot,
  collection,
  query,
  where,
} from "firebase/firestore";
import "./cart.css";
import {location as lc} from "../../assets/location";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const authctx = useContext(AuthContext);

  async function handle() {
    let date = new Date();

    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    let format1 = `${year}-${month + 1}-${day}`;

    let format2 = date.toTimeString().split(" ")[0];

    let time = format1 + " " + format2;

    try {
      const res = await addDoc(collection(db, "currentJob"), {
        customer_id: authctx.id,
        service_id: cartCtx.items[0]?.id,
        category_id: cartCtx.items[0]?.category_id,
        location: cartCtx.location,
        dateTime: time,
        status: 0,
        customer_name: authctx.name,
        category: "",
        service: cartCtx.items[0]?.service_name,
        price:cartCtx.items[0]?.service_rate,
        scheduled_time: format2,
        scheduled_date: format1,
      });

      cartCtx.resetItem();

      alert("Booked Successfully");
    } catch (e) {
      console.log("====================================");
      console.log("err", e);
      console.log("====================================");
    }

    // db.firestore().collection('currentJob')
    //   .add({
    //     customer_id: authctx.id,
    //     service_id: cartCtx.items[0]?.id,
    //     category_id: cartCtx.items[0]?.category_id,
    //     location: cartCtx.location,
    //     dateTime: time,
    //     status: 0,
    //     customer_name: authctx.name,
    //     category: '',
    //     service: cartCtx.items[0]?.service_name,
    //     scheduled_time: format2,
    //     scheduled_date: format1,
    //   })
    //   .then(() => {
    //     console.log('User added!');
    //     alert('Booked Succesfull');
    //   })
    //   .catch(error => {
    //     console.log('error', error);
    //   });
  }

  return (
    <div
      style={{
        flex: 1,
        paddingTop: 80,
        paddingBottom: 50,
        backgroundColor: "#DBE2EF",
      }}>
      <div className="container px-3  clearfix">
        {/* Shopping cart table */}
        <div className="card">
          <div className="card-header">
            <h2 style={{ color: "#112D4E" }}>Cart</h2>
          </div>

          {cartCtx?.items?.length > 0 ? (
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered m-0">
                  <thead>
                    <tr>
                      {/* Set columns width */}
                      <th
                        className="text-center py-3 px-4"
                        style={{ minWidth: 400 }}>
                        Service &amp; Details
                      </th>
                      <th
                        className="text-right py-3 px-4"
                        style={{ width: 150 }}>
                        Price
                      </th>

                      <th
                        className="text-center align-middle py-3 px-0"
                        style={{ width: 40 }}>
                        <a
                          href="#"
                          className="shop-tooltip float-none text-light"
                          title
                          data-original-title="Clear cart">
                          <i className="ino ion-md-trash" />
                        </a>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartCtx?.items?.map((i) => (
                      <tr>
                        <td className="p-4">
                          <div className="media align-items-center">
                            <img
                              src="https://picsum.photos/1000/1000"
                              className="d-block ui-w-40 ui-bordered mr-4"
                              alt
                            />
                            <div className="media-body">
                              <a href="#" className="d-block text-dark">
                                {i.service_name}
                              </a>
                            </div>
                          </div>
                        </td>
                        <td className="text-right font-weight-semibold align-middle p-4">
                          ₹{i.service_rate}
                        </td>

                        <td className="text-center align-middle px-0">
                          <Delete
                            style={{ color: "red" }}
                            onClick={() => {
                              cartCtx.removeItem(i.id, i.service_rate);
                            }}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* / Shopping cart table */}
              <div className="d-flex flex-wrap justify-content-between align-items-center pb-4">
                <div className="mt-4"></div>
                <div className="d-flex">
                  <div className="text-right mt-4 mr-5">
                    {/* <label className="text-muted font-weight-normal m-0">Discount</label> */}
                    {/* <div className="text-large"><strong>$20</strong></div> */}
                  </div>
                  <div className="text-right mt-4">
                    <label className="text-muted font-weight-normal m-0">
                      Total price
                    </label>
                    <div className="text-large">
                      <strong>₹{cartCtx.totalPrice}</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="float-left">
                <select name="location" id="location" onChange={(e)=>cartCtx.addLocation(e.target.value)} >
                  {
                    lc?.map((d,index)=>(
                      <option key={index}  value={d.value}>{d.label}</option>
                    ))
                    
                  }
                 
                </select>
              </div>
              <div className="float-right">
                <Link to={"/"}>
                  <button
                    type="button"
                    className="btn btn-lg btn-default md-btn-flat mt-2 mr-3">
                    {" "}
                    Go Back
                  </button>
                </Link>

                <button
                  type="button"
                  className="btn btn-lg btn-primary mt-2"
                  onClick={() => {
                    authctx.isLoggedIn ? handle() : authctx.modelHandler(true);
                  }}>
                  Checkout
                </button>
              </div>
            </div>
          ) : (
            <h5 style={{ textAlign: "center" }}>No items in the cart</h5>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
