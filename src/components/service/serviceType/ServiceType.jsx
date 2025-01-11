import { Google } from '@mui/icons-material'
import './serviceType.css'

const ServiceType = ({data}) => {



    return (
        <div className='container-fluid serviceTypeContainer'>

            <div className="row align-items-start justify-content-center">
                <div className="col-lg-4 col-md-4 col-sm-10">
                    <div className="serviceImgContainer">
                        <img src={ data?.category_img || 'https://img.freepik.com/premium-photo/repairman-uniform-installing-outside-unit-air-conditioner_93675-91162.jpg?w=2000'} className='serviceImg' />
                    </div>

                </div>
                <div className="col-lg-5 col-md-5 col-sm-9 infoSection">
                    <h2 className="serviceTitle">{data?.category_name}</h2>
                    <p className="p1 subServiceTitle">{data?.category_desc}</p>
                    {/* <button type="button" className="btn btn-outline-light">Book Now</button> */}

                    <div className="d-flex flex-row mt-10 bottomContainer align-items-end">

                        <div className="p-2" style={{ textAlign: 'center', }}>

                            <a
                                className="btn btn-primary btn-floating m-1"
                                style={{ backgroundColor: "white" }}
                                href="#!"
                                role="button">
                               <img src='https://static.vecteezy.com/system/resources/previews/010/353/285/original/colourful-google-logo-on-white-background-free-vector.jpg' 
                                style={{width:35}}
                               /> 
                            </a>


                            <div className="d-flex">

                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>

                            </div>

                        </div>



                        <div className="p-2 d-flex flex-column" style={{ textAlign: 'center', color:'white' }}>
                            <p style={{ marginBottom: 0, fontWeight: 'bold', fontSize: 20, color:'orange' }}>3000+</p>
                            <div>Happy Customers</div>
                        </div>




                    </div>




                </div>
            </div>



        </div>
    )
}

export default ServiceType