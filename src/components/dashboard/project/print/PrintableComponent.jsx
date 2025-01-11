import React from 'react';
import { useReactToPrint } from 'react-to-print';
import Logo from '../../../../assets/images/Logo.png';

const PrintableComponent = ({ details }) => {
    const componentRef = React.useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <div>
            &ensp;<button className='btn btn-info' onClick={handlePrint}>Print PDF</button>
            <div style={{ display: 'none' }}>
                <div ref={componentRef}>
                    <div className="col-lg-8 col-sm-12 mt-sm-2">
                        <div style={{ width: '100%', padding: '20px', height: '100%', backgroundColor: 'white' }}>
                            <header style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={Logo} alt="Company Logo" style={{ width: '100px', height: 'auto', marginRight: '5px' }} />
                                <div>
                                    <h1 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>AIIDC</h1>
                                </div>
                            </header>
                            <div>
                                    <h1 style={{ textAlign: 'center', color: '#888' }}>Project Details</h1>
                                    </div>
                            <h1 style={{ fontSize: '1.2rem', color: 'green' }}>Basic Details</h1>
                            <div className="container-fluid">
                                <div className="row mt-3">
                                    <div className="col-lg-12">
                                        <strong>Description :   </strong><span>{details?.project_description}</span>
                                    </div>

                                </div>

                                <div className="row">
                                    <div className="col-lg-6 mt-3">
                                        <strong>Project Type :   </strong><span>{details?.project_type}</span>
                                    </div>
                                    <div className="col-lg-6 mt-3">
                                        <strong>Source of Fund :   </strong><span>{details?.fund}</span>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-lg-6 mt-3">
                                        <strong>Contractor Name :   </strong><span>{details?.contractor_name}</span>
                                    </div>
                                    <div className="col-lg-6 mt-3">
                                        <strong>Contractor's Phone :   </strong><span>{details?.contractor_contact}</span>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-lg-4 mt-3">
                                        <strong>Percentage Progress :   </strong><span>10</span>
                                    </div>
                                    <div className="col-lg-4 mt-3">
                                        <strong>Financial Progress :   </strong><span>10</span>
                                    </div>
                                    <div className="col-lg-4 mt-3">
                                        <strong>File No. :   </strong><span>{details?.file_number}</span>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-lg-6 mt-3">
                                        <strong>Remarks :   </strong><span>{details?.status}</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-lg-12">
                            <div style={{ width: '100%', padding: '20px', height: '100%', backgroundColor: 'white' }}>
                                <h1 style={{ fontSize: '1.2rem', color: 'green' }}>Work Order & Other Details</h1>
                                <div className="d-flex flex-wrap justify-content-between mt-4">
                                    <div className="" style={{ flex: 1, minWidth: '200px' }}>
                                        <strong>Work order No. :   </strong>{details?.work_order_number}
                                    </div>
                                    <div className="" style={{ flex: 1 }}>
                                        <strong>Work order Amount :   </strong>{details?.work_order_amount}
                                    </div>
                                    <div className="" style={{ flex: 1 }}>
                                        <strong>Work order Date :   </strong>{details?.work_order_date}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <footer style={{ marginTop: '20px', borderTop: '1px solid #ccc', paddingTop: '10px', textAlign: 'center' }}>
                        <p>&copy; {new Date().getFullYear()} AIIDC. All rights reserved.</p>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default PrintableComponent;
