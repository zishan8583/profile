// NewProjectPage.js
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../../store/authContext'



const MapComponent = ({ onMarkerPositionChange }) => {
    const [markerPosition, setMarkerPosition] = useState(null);

    const mapContainerStyle = {
        width: '100%',
        height: '400px'
    };

    const defaultCenter = {
        lat: markerPosition?.lat ? markerPosition?.lat : 25.906267,
        lng: markerPosition?.lng ? markerPosition?.lng : 93.727592
    };

    const handleMapClick = (event) => {
        const newPosition = { lat: event.latLng.lat(), lng: event.latLng.lng() };
        setMarkerPosition(newPosition);
        onMarkerPositionChange([event.latLng.lng(), event.latLng.lat()]);
    };


    return (
        <LoadScript
            googleMapsApiKey="AIzaSyDHTuoN3QcWZhGCXSFJ-Y2W_D2MSe-DjsM"
        >
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={defaultCenter}
                zoom={8}
                onClick={handleMapClick}
            >
                {markerPosition && <Marker position={markerPosition} />}


            </GoogleMap>
        </LoadScript>
    );
};

function AddProject() {
    const navigate = useNavigate();
    const { token, id } = useAuth();
    const [formData, setFormData] = useState({
        "width": 40,
        "height": 40,
        "iconfillColor": "#ffffffff",
        "icon": "images/warehouse.svg",
        project_title: '',
        contractor_name: '',
        contractor_contact: '',
        estimated_cost_in_rs: "",
        technical_approval: "",
        "administrative_approval": "",
        "tender_amount": "",
        "financial_sanction_number": "",
        "financial_sanction_date": "",
        "financial_sanction_amount": "",
        "fixed_order_ceiling_number": "",
        "fixed_order_ceiling_date": "",
        "fixed_order_ceiling_amount": "",
        work_order_number: '',
        work_order_date: '',
        work_order_amount: '',
        actual_start_date: '',
        planned_end_date: '',
        "file_number": "",
        project_description: '',
        project_type: '',
        auth_user_id: id,
        "status": '',
        "district_id": 3,
    });

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
            const response = await fetch('/backend/api/add-project', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert("submitted");

                navigate("/projects");
            } else {

                const responseData = await response.json(); 
                if (response.status === 400 && responseData && responseData.messages) {
                    const messageKey = Object.keys(responseData.messages)[0]; // Get the first (and only) key
                    const errorMessage = responseData.messages[messageKey]; // Get the corresponding message value
                    alert(errorMessage); // Display the error message
                } else {
                    alert("Failed to submit form");
                }
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
                            <h1 className="card-title" style={{ color: 'white' }}>Add New Project</h1>
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
                                            <MapComponent onMarkerPositionChange={handleMarkerPositionChange} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <form>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Project Title</label>
                                            <input type="text" className="form-control" name='project_title' placeholder="Project Title" onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="form-group">
                                            <label>Administrative Approval</label>
                                            <input type="text" className="form-control" name='administrative_approval' placeholder="Adminstrative  Approval" onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="form-group">
                                            <label>Project Status</label>
                                            <select className="custom-select " name='status' onChange={handleChange} id="exampleSelectBorder">

                                                <option value={'Ongoing'}>Ongoing</option>
                                                <option value={'Completed'}>Completed</option>

                                            </select>

                                        </div>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <div className="form-group">
                                            <label>Contractor Name</label>
                                            <input type="text" className="form-control" name="contractor_name" placeholder="Contractor Name" onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="form-group">
                                            <label>Contractor Phone</label>
                                            <input type="number" className="form-control" name="contractor_contact" placeholder="Contractor Phone" onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="form-group">
                                            <label>Work order No.</label>
                                            <input type="number" className="form-control" name="work_order_number" placeholder="Work order No." onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="form-group">
                                            <label>Work order Date</label>
                                            <input type="date" className="form-control" name="work_order_date" placeholder="Work order Date" onChange={handleChange} />
                                        </div>
                                    </div>


                                </div>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <div className="form-group">
                                            <label>Work order amount</label>
                                            <input type="number" className="form-control" name="work_order_amount" placeholder="Work order amount" onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="form-group">
                                            <label>Actual start date</label>
                                            <input type="date" className="form-control" name="actual_start_date" placeholder="Actual start date" onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="form-group">
                                            <label>Planned end date</label>
                                            <input type="date" className="form-control" name="planned_end_date" placeholder="Planned end date" onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="form-group">
                                            <label>File Number</label>
                                            <input type="text" className="form-control" name="file_number" placeholder="File Number" onChange={handleChange} />
                                        </div>
                                    </div>



                                </div>

                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label>Description</label>
                                            <textarea className="form-control" name="description" placeholder="Description" onChange={handleChange} />
                                        </div>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <div className="form-group">
                                            <label>Project Type</label>
                                            <select className="custom-select" name='project_type' onChange={handleChange}>
                                                <option>Select project type</option>
                                                <option value='construction'>Construction</option>
                                            </select>
                                        </div>

                                    </div>

                                    <div className="col-sm-3">
                                        <div className="form-group">
                                            <label>Estimated Cost</label>
                                            <input type="number" className="form-control" name="estimated_cost_in_rs" placeholder="Estimated Cost" onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="form-group">
                                            <label>Technical Approval</label>
                                            <input type="text" className="form-control" name="technical_approval" placeholder="Technical Approval" onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="form-group">
                                            <label>Tender Amount</label>
                                            <input type="number" className="form-control" name="tender_amount" placeholder="Tender Amount" onChange={handleChange} />
                                        </div>
                                    </div>

                                </div>
                                <div className="row">



                                    <div className="col-sm-4">
                                        <div className="form-group">
                                            <label>Financial Sanction Number</label>
                                            <input type="text" className="form-control" name="financial_sanction_number" placeholder="Financial Sanction Number" onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="form-group">
                                            <label>Financial Sanction Date</label>
                                            <input type="date" className="form-control" name="financial_sanction_date" placeholder="Financial Sanction Date" onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="form-group">
                                            <label>Financial Sanction Amount</label>
                                            <input type="number" className="form-control" name="financial_sanction_amount" placeholder="Financial Sanction Amount" onChange={handleChange} />
                                        </div>
                                    </div>

                                </div>
                                <div className="row">


                                    <div className="col-sm-4">
                                        <div className="form-group">
                                            <label>fixed order ceiling number</label>
                                            <input type="number" className="form-control" name="fixed_order_ceiling_number" placeholder="fixed order ceiling number" onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="form-group">
                                            <label>fixed order ceiling date</label>
                                            <input type="date" className="form-control" name="fixed_order_ceiling_date" placeholder="fixed order ceiling date" onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="form-group">
                                            <label>fixed order ceiling amount</label>
                                            <input type="number" className="form-control" name="fixed_order_ceiling_amount" placeholder="fixed order ceiling amount" onChange={handleChange} />
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
    );
}

export default AddProject;
