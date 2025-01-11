import './crousel.css'

const Crousel = () => {
  return (
   <div id="carouselExampleIndicators" className="carousel slide"  style={{marginHorizontal: 5}} data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100 " src="http://homeappliance-repair.tech/wp-content/uploads/2022/04/Best_ac_service_in_coimbatore.png" alt="First slide" />
    </div>
    <div className="carousel-item " >
      <img className="d-block w-100" src="https://refrigerator-repair-service.co.in/images/banner2.jpg" alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://media.istockphoto.com/id/832983526/photo/electrician-checking-television.jpg?s=612x612&w=0&k=20&c=cy0kefsswlabBndRp2-CnbZesSgSpEqclCyp5DBmtjc=" alt="Third slide" />
    </div>
  </div>
  {/* <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </a> */}
</div>

  )
}

export default Crousel