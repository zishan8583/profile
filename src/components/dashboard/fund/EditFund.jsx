import React, { useEffect, useState } from 'react'
import Header from '../template/Header'
import SideNav from '../template/SideNav'
import Footer from '../template/Footer'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../store/authContext'

const EditFund = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { details, project_id } = location.state;
    const { token, id } = useAuth();
    
    const [formData, setFormData] = useState();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    

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


    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(formData);
        
        
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
                navigate('/fundreceived')
            } else {

                if (result.status === 400) {
                    const messageKey = Object.keys(result.messages)[0]
                    const errorMessage = result.messages[messageKey]; 
                    alert(errorMessage); 
                } else {
                    alert("Failed to submit form");
                }
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    
    const onCancell = () => {
        console.log("Dd");
    }



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


                                <form>

                                    <div className="row">
                                        <div className="col-sm-3">
                                            <div className="form-group">
                                                <label>Tender Amount</label>
                                                <input type="number" className="form-control" value={formData?.tender_amount} name="tender_amount" placeholder="Tender Amount" onChange={handleChange} />
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
                                                <label>Administrative Approval</label>
                                                <input type="text" className="form-control" value={formData?.administrative_approval} name='administrative_approval' placeholder="Adminstrative  Approval" onChange={handleChange} />
                                            </div>
                                        </div>

                                        <div className="col-sm-3">
                                            <div className="form-group">
                                                <label>Technical Approval</label>
                                                <input type="text" className="form-control" value={formData?.technical_approval} name="technical_approval" placeholder="Technical Approval" onChange={handleChange} />
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
    )
}

export default EditFund