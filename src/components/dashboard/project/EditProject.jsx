// NewProjectPage.js
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, useParams } from "react-router-dom";
import Footer from '../template/Footer';
import Header from '../template/Header';
import SideNav from '../template/SideNav';
import { useAuth } from '../../../store/authContext';





const MapComponent = ({ onMarkerPositionChange, position }) => {
    const [markerPosition, setMarkerPosition] = useState(null);
    const [defaultCenter, setDefaultCenter] = useState({ lat: 25.906267, lng: 93.727592 });

    useEffect(() => {

        if (position) {

            if (typeof position === 'string') {
                console.log(typeof position);
                const pos = JSON.parse(position);
                const newPosition = { lat: pos[1], lng: pos[0] };
                setMarkerPosition(newPosition);
            }
            else {

                const newPosition = { lat: position[1], lng: position[0] };
                setMarkerPosition(newPosition);
            }




        }

    }, [position])

    useEffect(() => {

        if (markerPosition) {

            setDefaultCenter(markerPosition);
        }

    }, [markerPosition])


    const mapContainerStyle = {
        width: '100%',
        height: '400px'
    };


    const handleMapClick = (event) => {
        const newPosition = { lat: event.latLng.lat(), lng: event.latLng.lng() };
        console.log(newPosition);
        setMarkerPosition(newPosition);
        onMarkerPositionChange(newPosition);
    };


    return (

        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={defaultCenter}
            zoom={7}
            onClick={handleMapClick}
        >
            {markerPosition && <Marker position={markerPosition} />}


        </GoogleMap>

    );
};

function EditProject() {

    const navigate = useNavigate();
    const location = useLocation();
    const { details } = location.state;
    const { token, id } = useAuth();
    const { id: project_id } = useParams();
    const [formData, setFormData] = useState({
        projectTitle: '',
        sourceOfFund: '',
        contractorName: '',
        contractorPhone: '',
        workOrderNo: '',
        workOrderDate: '',
        workOrderAmount: '',
        actualStartDate: '',
        plannedEndDate: '',
        description: '',
        projectType: ''
    });


    useEffect(() => {

        if (details) {

            setFormData({
                auth_user_id: id,
                project_id : project_id,
                "district_id":1,
                "width": 40,
                "height": 40,
                "iconfillColor": "#ffffffff",
                "icon": "images/warehouse.svg", 
                project_title: details?.project_title || '',
                contractor_name: details?.contractor_name || '',
                contractor_contact: details?.contractor_contact || '',
                estimated_cost_in_rs: details?.estimated_cost_in_rs || '',
                technical_approval: details?.technical_approval || '',
                "administrative_approval": details?.administrative_approval || '',
                "tender_amount": details?.tender_amount || '',
                "financial_sanction_number": details?.financial_sanction_number || '',
                "financial_sanction_date": details?.financial_sanction_date || '',
                "financial_sanction_amount": details?.financial_sanction_amount || '',
                "fixed_order_ceiling_number": details?.fixed_order_ceiling_number || '',
                "fixed_order_ceiling_date": details?.fixed_order_ceiling_date || '',
                "fixed_order_ceiling_amount": details?.fixed_order_ceiling_amount || '',
                work_order_number: details?.work_order_number || '',
                work_order_date: details?.work_order_date || '',
                work_order_amount: details?.work_order_amount || '',
                actual_start_date: details?.actual_start_date || '',
                planned_end_date: details?.planned_end_date || '',
                project_description: details?.project_description || '',
                project_type: details?.project_type || '',
                coordinates: details?.coordinates,
                "file_number": details?.file_number || '',
                status : details?.status || '',
            });

        }
    }, [details]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('/backend/api/edit-project', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (response.ok) {
                alert('Form submitted successfully');
                navigate('/projects')
            } else {

                console.error(result);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const onCancell = (e) => {
        navigate("/projects");
    };

    const handleMarkerPositionChange = (coordinates) => {


        setFormData({
            ...formData,
            coordinates
        });

    };


    return (
        <div className="wrapper">
            <Header />
            <SideNav />
            <div className="content-wrapper">

                {/* Content Header (Page header) */}
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0"></h1>
                            </div>{/* /.col */}
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">


                                </ol>
                            </div>{/* /.col */}
                        </div>{/* /.row */}
                    </div>{/* /.container-fluid */}
                </div>
                {/* /.content-header */}
                {/* Main content */}
                <section className="content">
                    <div className="container-fluid">

                        <div className="card">
                            <div className="card-header" style={{ backgroundColor: '#003486' }}>
                                <h1 className="card-title" style={{ color: 'white' }}>Edit Project</h1>
                            </div>
                            <div className="card-body" >

                                <div id="accordion">
                                    <div className="card">
                                        <div className="card-header" id="headingOne">
                                            <h5 className="mb-0">
                                                <button
                                                    className="btn btn-outline-info"
                                                    data-toggle="collapse"
                                                    data-target="#collapseOne"
                                                    aria-expanded="false"
                                                    aria-controls="collapseOne"
                                                >
                                                    Set Location
                                                </button>
                                            </h5>
                                        </div>

                                        <div
                                            id="collapseOne"
                                            className="collapse"
                                            aria-labelledby="headingOne"
                                            data-parent="#accordion"
                                        >
                                            <div className="card-body">
                                                <LoadScript
                                                    googleMapsApiKey="AIzaSyDHTuoN3QcWZhGCXSFJ-Y2W_D2MSe-DjsM"
                                                >
                                                    <MapComponent onMarkerPositionChange={handleMarkerPositionChange} position={formData?.position} />

                                                </LoadScript>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <form>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label>Project Title</label>
                                                <input type="text" className="form-control" value={formData?.project_title} name='project_title' placeholder="Project Title" onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="form-group">
                                                <label>Administrative Approval</label>
                                                <input type="text" className="form-control" value={formData?.administrative_approval} name='administrative_approval' placeholder="Adminstrative  Approval" onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="form-group">
                                                <label>Project Status</label>
                                                <select className="custom-select " value={formData?.status} name='status' onChange={handleChange} id="exampleSelectBorder">

                                                    <option value={'Ongoing'} >Ongoing</option>
                                                    <option value={'Completed'} >Completed</option>

                                                </select>

                                            </div>
                                        </div>

                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <div className="form-group">
                                                <label>Contractor Name</label>
                                                <input type="text" className="form-control" value={formData?.contractor_name} name="contractor_name" placeholder="Contractor Name" onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="form-group">
                                                <label>Contractor Phone</label>
                                                <input type="number" className="form-control" value={formData?.contractor_contact} name="contractor_contact" placeholder="Contractor Phone" onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="form-group">
                                                <label>Work order No.</label>
                                                <input type="number" className="form-control" value={formData?.work_order_number} name="work_order_number" placeholder="Work order No." onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="form-group">
                                                <label>Work order Date</label>
                                                <input type="date" className="form-control" value={formData?.work_order_date} name="work_order_date" placeholder="Work order Date" onChange={handleChange} />
                                            </div>
                                        </div>


                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <div className="form-group">
                                                <label>Work order amount</label>
                                                <input type="number" className="form-control" value={formData?.work_order_amount} name="work_order_amount" placeholder="Work order amount" onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="form-group">
                                                <label>Actual start date</label>
                                                <input type="date" className="form-control" value={formData?.actual_start_date} name="actual_start_date" placeholder="Actual start date" onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="form-group">
                                                <label>Planned end date</label>
                                                <input type="date" className="form-control" value={formData?.planned_end_date} name="planned_end_date" placeholder="Planned end date" onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="form-group">
                                                <label>File Number</label>
                                                <input type="text" className="form-control" value={formData?.file_number} name="file_number" placeholder="File Number" onChange={handleChange} />
                                            </div>
                                        </div>



                                    </div>

                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <label>Description</label>
                                                <textarea className="form-control" value={formData?.project_description} name="project_description" placeholder="Description" onChange={handleChange} />
                                            </div>
                                        </div>

                                    </div>
                                   
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <div className="form-group">
                                                <label>Project Type</label>
                                                <select className="custom-select" value={formData?.project_type} name='project_type' onChange={handleChange}>
                                                
                                                    <option value='construction'>Construction</option>
                                                </select>
                                            </div>

                                        </div>

                                        <div className="col-sm-3">
                                            <div className="form-group">
                                                <label>Estimated Cost</label>
                                                <input type="number" className="form-control" value={formData?.estimated_cost_in_rs} name="estimated_cost_in_rs" placeholder="Estimated Cost" onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="form-group">
                                                <label>Technical Approval</label>
                                                <input type="text" className="form-control" value={formData?.technical_approval} name="technical_approval" placeholder="Technical Approval" onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="form-group">
                                                <label>Tender Amount</label>
                                                <input type="number" className="form-control" value={formData?.tender_amount} name="tender_amount" placeholder="Tender Amount" onChange={handleChange} />
                                            </div>
                                        </div>

                                    </div>

                                    <div className="row">

                                        <div className="col-sm-4">
                                            <div className="form-group">
                                                <label>Financial Sanction Number</label>
                                                <input type="text" className="form-control" value={formData?.financial_sanction_number} name="financial_sanction_number" placeholder="Financial Sanction Number" onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="form-group">
                                                <label>Financial Sanction Date</label>
                                                <input type="date" className="form-control" value={formData?.financial_sanction_date} name="financial_sanction_date" placeholder="Financial Sanction Date" onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="form-group">
                                                <label>Financial Sanction Amount</label>
                                                <input type="number" className="form-control" value={formData?.financial_sanction_amount} name="financial_sanction_amount" placeholder="Financial Sanction Amount" onChange={handleChange} />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="row">


                                        <div className="col-sm-4">
                                            <div className="form-group">
                                                <label>fixed order ceiling number</label>
                                                <input type="text" className="form-control" value={formData?.fixed_order_ceiling_number} name="fixed_order_ceiling_number" placeholder="fixed order ceiling number" onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="form-group">
                                                <label>fixed order ceiling date</label>
                                                <input type="date" className="form-control" value={formData?.fixed_order_ceiling_date} name="fixed_order_ceiling_date" placeholder="fixed order ceiling date" onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="form-group">
                                                <label>fixed order ceiling amount</label>
                                                <input type="number" className="form-control" value={formData?.fixed_order_ceiling_amount} name="fixed_order_ceiling_amount" placeholder="fixed order ceiling amount" onChange={handleChange} />
                                            </div>
                                        </div>


                                    </div>

                                    <div className="card-footer">
                                        <button type="submit" className="btn btn-outline-success float-right mr-2" onClick={handleSubmit}>Submit</button>
                                        <button type="submit" className="btn btn-outline-warning float-right mr-3" onClick={onCancell}>Cancel</button>
                                    </div>


                                </form>


                            </div>
                        </div>

                    </div>{/* /.container-fluid */}
                </section>
                {/* /.content */}

            </div>
            <Footer />
        </div>

    );
}

export default EditProject;
