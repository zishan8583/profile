import React, { useEffect, useState } from 'react'

import Header from '../template/Header'
import SideNav from '../template/SideNav'
import Footer from '../template/Footer'
import { useNavigate, useParams } from 'react-router-dom';
import Logo from '../../../assets/images/Logo.png';
import { useAuth } from '../../../store/authContext'
import { Accordion, AccordionSummary, AccordionDetails, Typography, Modal, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ImageList, ImageListItem, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import PrintableComponent from './print/PrintableComponent';

const ProjectDetails = () => {
    const { id: project_id } = useParams();
    const [details, setdetails] = useState();
    const navigate = useNavigate();
    const { token, id } = useAuth();
    const [openModal, setOpenModal] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [accordionExpanded, setAccordionExpanded] = useState(true);
    const [images, setImages] = useState([1,2,3]);

    useEffect(() => {




        fetchData();
        fetchImage();




    }, [])

    const editProject = () => {

        navigate('/editproject/' + project_id, { state: { details: details } });

    };



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

            setdetails(result.data);
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    };

    const fetchImage = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", token);
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "auth_user_id": id,
            "project_id": project_id
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/backend/api/get-project-images", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (result.status == '200') {
                    console.log(result.data);
                    setImages(result.data);
                    console.log(images);
                }
                else {
                    console.log(result);
                }
            })
            .catch((error) => console.error(error));
    }

    const handleAccordionToggle = () => {
        setAccordionExpanded(!accordionExpanded);
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const handleOpenModal = (index) => {
        setCurrentImageIndex(index);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
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
                                <h1 className="m-0">Project Detail</h1>
                            </div>{/* /.col */}
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">

                                    <button className='btn btn-info' onClick={editProject}>Edit</button>
                                    <PrintableComponent details={details} />

                                </ol>
                            </div>{/* /.col */}
                        </div>{/* /.row */}
                    </div>{/* /.container-fluid */}
                </div>
                {/* /.content-header */}
                {/* Main content */}
                <section className="content">



                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-lg-4 col-sm-12">
                                <div style={{ width: '100%', padding: '20px', height: '100%', backgroundColor: 'white' }}>
                                    <h1 style={{ fontSize: '1.2rem', color: 'green' }}>Project Image</h1>
                                    <img
                                        src={Logo}

                                        style={{
                                            width: '90%',
                                            height: 'auto', // Ensures the image height adjusts proportionally
                                            maxWidth: '90%', // Ensures the image does not exceed its container width
                                            maxHeight: '90%' // Limits the maximum height of the image
                                        }}
                                        alt="Project Image" // Provide an alt attribute for accessibility
                                    />
                                </div>
                            </div>
                            <div className="col-lg-8 col-sm-12 mt-sm-2">
                                <div style={{ width: '100%', padding: '20px', height: '100%', backgroundColor: 'white' }}>
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

                    </div>




                    <div className="container-fluid mt-4">

                        <>
                            <Accordion expanded={accordionExpanded} onChange={handleAccordionToggle}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    sx={{ bgcolor: '#0391a3', color: 'whitesmoke', borderRadius: '5px' }}
                                >
                                    <Typography>Show Gallery</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div style={{ width: '100%' }}>
                                        <ImageList sx={{ width: '100%', height: 'auto' }} cols={6}>
                                            {images.length === 0 ? "No images " : null}
                                            {images?.map((item, index) => (
                                                <ImageListItem key={index}>
                                                    <img
                                                        src={"https://picsum.photos/150/150?random="+index}
                                                        alt={item.id}
                                                        loading="lazy"
                                                        style={{ width: '100%', padding: '10px', height: 'auto', cursor: 'pointer' }}
                                                        onClick={() => handleOpenModal(index)}
                                                    />
                                                </ImageListItem>
                                            ))}
                                        </ImageList>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                            <Modal open={openModal} onClose={handleCloseModal}>
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        bgcolor: '#DCF2F1',
                                        boxShadow: 24,
                                        p: 3,
                                        maxWidth: '50%',
                                        width: '100%',
                                        maxHeight: '80vh',
                                        overflow: 'auto',
                                        borderRadius: '8px',

                                    }}
                                >
                                    <img
                                        src={"https://picsum.photos/150/150?random="+currentImageIndex}
                                        alt={images[currentImageIndex]?.id}
                                        loading="lazy"
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                    <div style={{ textAlign: 'center' }}>
                                        <IconButton onClick={handlePrevImage}>
                                            <ArrowBackIos />
                                        </IconButton>
                                        <IconButton onClick={handleNextImage}>
                                            <ArrowForwardIos />
                                        </IconButton>
                                    </div>
                                </Box>
                            </Modal>
                        </>

                    </div>



                </section>
                {/* /.content */}

            </div>
            <Footer />
        </div>
    )
}

export default ProjectDetails