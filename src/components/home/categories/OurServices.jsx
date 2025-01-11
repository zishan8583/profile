import { ShoppingBag } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { services } from "../../../assets/data";
import "./ourServices.css";

const OurServices = () => {

  const [data, setData] = useState()

  useEffect(() => {
    getData()
  
  }, [])
  


  function getData() {
    var requestOptions = {
      method: 'POST',
      redirect: 'follow'
    };
    
    fetch("/category/getAll", requestOptions)
      .then(response => response.json())
      .then(result =>{
        if (result.status == 200) {
          setData(result.data);
        }
      })
      .catch(error => console.log('error', error));
  }




  return (
    <div className="container" style={{ marginTop: 80, marginBottom: 30, }}>
      <h2 className="lightTitle" style={{marginBottom:50, fontSize:35}}>Our Services</h2>
        {/* needs image of 130 x130 */}
      <div className="row justify-content-center">
        {data?.map((c, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 cardBox">
            <div className="our-team">
              <div className="picture">
                <img style={{objectFit: 'cover', width:'100%', height:'100%'}} src={c.category_img || 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80'} />
              </div>
              <div className="team-content" >
                <h5 className="name">{c.category_name}</h5>
              </div>
              <ul className="social">
                <li>
                  <Link to='/service'  state={{ id: c.id }}>
                    <div>Check Prices</div>
                  </Link>
                </li>
                
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
