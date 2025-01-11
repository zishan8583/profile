import React, { useContext,   } from "react";
import CartContext from "../../../store/cartContext";
import "./ServicePlanCard.scss";
import { useNavigate } from "react-router-dom";

const Sample = ({ data }) => {

  const cartCtx = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="container-fluid">
      <div className="row">
        {data?.map((d) => (
          <div className="col-lg-12 col-md-12 mt-5">
            <div className="card">
              <div className="row">
                <div 
                  style={{ paddingRight: 0 }}
                  className="col-lg-4 d-flex align-items-center justify-content-center">
                  <img
                    className="sampleImg"
                    src={
                      d.service_img ||
                      "https://media.istockphoto.com/id/485795664/photo/modern-air-conditioner-system.jpg?s=612x612&w=0&k=20&c=wTy41E154iEEoyhfjwJ6PDnA_WRTT7S-g4lQ4ZdFGyc="
                    }
                  />
                </div>

                <div className="col-lg-8 ">
                  <div className="description">
                    <h2>{d.service_name}</h2>
                    <h1 style={{fontSize:'1.5rem' , fontWeight:'bold', color:'black'}}>{'₹'+ d.service_rate}</h1>

                    <ul style={{marginTop: 25}}>
                      {d.service_desc.split("\n").map((p) => (
                        <li>{p}</li>
                      ))}
                    </ul>

                    <button  onClick={()=>{
                      cartCtx.addItem(d);
                      navigate("/cart");
                    }}>
                    {cartCtx.items?.some(e => e.id === d.id)

                        ? 'Added' : 'Add'

                    }
                       
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sample;