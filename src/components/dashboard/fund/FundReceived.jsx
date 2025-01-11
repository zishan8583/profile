import React, { useEffect, useState } from 'react'

import Header from '../template/Header'
import SideNav from '../template/SideNav'
import Footer from '../template/Footer'
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../../store/authContext'
import Home from '../project/Home';
import { Button } from '@mui/material';
import { ArrowBack, Edit,  } from '@mui/icons-material';

const FundReceived = () => {

    const [showDetails, setShowDetails] = useState(false)
    const [details, setDetails] = useState()
    const [projectId, setProjectId] = useState()
    const { token, id } = useAuth();
   

    const showDetailsHandler = (project_id) => {
        setProjectId(project_id);

        const fetchData = async () => {
            try {
                const response = await fetch('/backend/api/get-project-details-by-id', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': token
                    },
                    body: JSON.stringify({
                        auth_user_id: id,
                        project_id: project_id
                    })
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch projects');
                }
                const result = await response.json();
                setDetails(result.data);
                setShowDetails(true);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchData();


    }



    return (
        <div className="wrapper">
            <Header />
            <SideNav />
            {showDetails ? <FundDetails details={details} project_id={projectId} close={setShowDetails} /> : <Home more={'fund'} showDetailsHandler={showDetailsHandler} />}
            <Footer />
        </div>
    )
}


export const FundDetails = ({ details, close, project_id }) => {
    const navigate = useNavigate();
    return (
        <div className="content-wrapper">

            {/* Content Header (Page header) */}
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <Button
                                variant='contained'
                                onClick={() => close(false)}
                            >
                                <ArrowBack sx={{ fontSize: '30px' }} />
                            </Button>
                        </div>{/* /.col */}
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">

                                
                                <Button
                                    variant='contained'
                                    onClick={() => navigate('/editfund', { state: { details: details, project_id: project_id } }) }
                                >
                                <Edit sx={{ fontSize: '30px' }} /> <span style={{fontSize: '15px', marginLeft:'2px'}}>Edit</span>
                                </Button>

                            </ol>
                        </div>{/* /.col */}
                    </div>{/* /.row */}
                </div>{/* /.container-fluid */}
            </div>
            {/* /.content-header */}
            {/* Main content */}
            <section className="content">
                <div className="container-fluid">

                    <div className="row ">
                        <div className="col-lg-12">
                            <div style={{ width: '100%', padding: '20px', height: '100%', backgroundColor: 'white', minHeight: '200px' }}>
                                <h1 style={{ fontSize: '1.2rem', color: 'green' }}>Fund Details</h1>
                                <div className="d-flex flex-wrap justify-content-between mt-4">
                                    <div className="" style={{ flex: 1, minWidth: '200px' }}>
                                        <strong>Tender Amount :   </strong>{details?.tender_amount}
                                    </div>
                                    <div className="" style={{ flex: 1 }}>
                                        <strong>Estimated Cost :   </strong>{details?.estimated_cost_in_rs}
                                    </div>
                                    <div className="" style={{ flex: 2 }}>
                                        <strong>Administrative Approval :   </strong>{details?.administrative_approval}
                                    </div>
                                    <div className="" style={{ flex: 1 }}>
                                        <strong>Technical Approval :   </strong>{details?.technical_approval}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-lg-12">
                            <div style={{ width: '100%', padding: '20px', height: '100%', backgroundColor: 'white', minHeight: '200px' }}>
                                <h1 style={{ fontSize: '1.2rem', color: 'green' }}>Fixed Order Ceiling</h1>
                                <div className="d-flex flex-wrap justify-content-between mt-4">
                                    <div className="" style={{ flex: 1, minWidth: '200px' }}>
                                        <strong>Fixed Order Ceiling No. :   </strong>{details?.fixed_order_ceiling_number}
                                    </div>
                                    <div className="" style={{ flex: 1 }}>
                                        <strong>Fixed Order Ceiling Amount :   </strong>{details?.financial_sanction_amount}
                                    </div>
                                    <div className="" style={{ flex: 1 }}>
                                        <strong>Fixed Order Ceiling Date :   </strong>{details?.fixed_order_ceiling_date}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4 ">
                        <div className="col-lg-12">
                            <div style={{ width: '100%', padding: '20px', height: '100%', backgroundColor: 'white', minHeight: '200px' }}>
                                <h1 style={{ fontSize: '1.2rem', color: 'green' }}>Financial Sanction</h1>
                                <div className="d-flex flex-wrap justify-content-between mt-4">
                                    <div className="" style={{ flex: 1, minWidth: '200px' }}>
                                        <strong>Financial Sanction No. :   </strong>{details?.financial_sanction_number}
                                    </div>
                                    <div className="" style={{ flex: 1 }}>
                                        <strong>Financial Sanction Amount :   </strong>{details?.financial_sanction_amount}
                                    </div>
                                    <div className="" style={{ flex: 1 }}>
                                        <strong>Financial Sanction Date :   </strong>{details?.financial_sanction_date}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>{/* /.container-fluid */}
            </section>
            {/* /.content */}

        </div>
    )
}








export default FundReceived