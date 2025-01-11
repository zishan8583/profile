import "./how.css";

const HowSection = () => {
  return (
    <div className="howSectionContainer">
      <h3 className="howTitle">How does it work ?</h3>

      <div className="row " style={{alignItems: 'flex-start'}}>

          <div className="list col mt-5">
            <div className="boxAnimate">
              <img src='https://picsum.photos/1000/1000' style={{ borderRadius: 100}} className="img" />
            </div>
            <div className="name" style={{color:"#112D4E", fontSize:'20px'}}>Book a Service Request</div>
            <div className="subName">Click herer to raise a service reqest or send "Hi" on whatsApp</div>


          </div>
          <div className="list col mt-5" >
            <div className="boxAnimate">
              <img src='https://picsum.photos/1000/1000' style={{ borderRadius: 100}} className="img" />
            </div>

            <div className="name" style={{color:"#112D4E", fontSize:'20px'}}>Repair & maintenance</div>
            <div className="subName">Get doorstep pick-up of your device or at home service by a qualified engineer</div>
          
          </div>
          <div className="list col mt-5">
            <div className="boxAnimate">
              <img src='https://picsum.photos/1000/1000' style={{ borderRadius: 100}} className="img" alt="image" />
            </div>

            <div className="name" style={{color:"#112D4E", fontSize:'20px'}}>Enjoy Your Device</div>
            <div className="subName">Use it like it's a new one</div>
          </div>

      </div>
    </div>
  );
};

export default HowSection;
