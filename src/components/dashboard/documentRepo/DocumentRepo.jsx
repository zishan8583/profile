import React, { useEffect, useState } from 'react'

import Header from '../template/Header'
import SideNav from '../template/SideNav'
import Footer from '../template/Footer'
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../../store/authContext'
import Home from '../project/Home';
import { Button } from '@mui/material';
import { ArrowBack, Add, InsertDriveFile } from '@mui/icons-material';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';


const DocumentRepo = () => {

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
            {showDetails ? <DocDetails details={details} project_id={projectId} close={setShowDetails} /> : <Home more={'fund'} showDetailsHandler={showDetailsHandler} />}
            <Footer />
        </div>
    )
}


export const DocDetails = ({ close, project_id }) => {
    const navigate = useNavigate();
    const [selectedDocument, setSelectedDocument] = useState(null)
    const { token, id } = useAuth();
    const [documents, setDocumentName] = useState([]);
    const [uploadedDocuments, setUploadedDocuments] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        fetchUploadedDocuments();
    }, []);


    const fetchUploadedDocuments = async () => {
        try {

            const response = await fetch('/backend/api/get-project-images', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token,
                },
                body: JSON.stringify({
                    auth_user_id: id,
                    project_id: project_id,
                }),
            });

            const result = await response.json();

            if (response.ok && result.status == 200) {

                console.log(result.data);
                setUploadedDocuments(result.data);

            } else {
                alert('failed to load Documents')
                console.error('Failed to fetch uploaded documents');
            }
        } catch (error) {
            console.error('Error fetching uploaded documents:', error);
        }
    };

    const handleAddDocument = async () => {
        if (!selectedDocument) {
            console.error('No document selected');
            return;
        }

      
        const allowedExtensions = ['pdf', 'doc', 'docx', 'ppt', 'pptx', 'jpg', 'jpeg', 'png', 'gif'];
 
        const fileName = selectedDocument.name;
        const fileExtension = fileName.split('.').pop().toLowerCase();

      
        if (!allowedExtensions.includes(fileExtension)) {
            console.error('Unsupported file format');
            alert('Unsupported file format');
            return;
        }

   

        const maxSizeInBytes = 50 * 1024 * 1024; 

        if (selectedDocument.size > maxSizeInBytes) {
            console.error('File size exceeds the limit (50 MB)');
            alert('File size exceeds the limit (50 MB)');
            return;
        }

     

        try {
            const formData = new FormData();
            formData.append('files[]', selectedDocument);
            formData.append("auth_user_id", id);
            formData.append("project_id", project_id);

            const response = await fetch('/backend/api/upload-project-images', {
                method: 'POST',
                body: formData,
                headers: {
                    'Authorization': token,
                },
            });

            const result = await response.json()

            if (response.ok) {

                alert('Documents uploaded successfully')
                setSelectedDocument(null);
                setOpen(false);
            } else {
                alert('Failed to upload documents');
                console.error('Failed to upload documents', result);
            }
        } catch (error) {
            console.error('Error uploading documents:', error);

        }
    };



    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedDocument(file);
        console.log("dsfsdfsdf", file);
    };





    const handleOpenModal = () => {
        setOpen(true);
    };

    const handleCloseModal = () => {
        setOpen(false);
    };
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
                                    onClick={handleOpenModal}
                                >
                                    <Add sx={{ fontSize: '30px' }} /> <span style={{ fontSize: '15px', marginLeft: '2px' }}>Add</span>
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

                    <div className="card" >
                        <div className="card-header" style={{ backgroundColor: '#0391a3' }}>
                            <h3 className="card-title" style={{ color: 'white' }}>Documents</h3>
                        </div>
                        <div className="card-body d-flex flex-wrap" >

                            <div className="d-flex w-100">

                                {uploadedDocuments.length === 0 ? "No Documents " : null}
                                {uploadedDocuments.map((document, index) => (

                                    <button
                                        key={index}
                                        onClick={() => window.open(document.file_url, '_blank')}
                                        className="btn text-decoration-none d-flex align-items-center p-4 flex-column flex-wrap"
                                    >
                                        <InsertDriveFile sx={{ fontSize: 48 }} /> {/* Larger file icon */}
                                        <span className="ml-2">File{index + 1}</span> {/* Document name */}
                                    </button>
                                ))}
                            </div>




                            <Dialog open={open} onClose={handleCloseModal}>
                                <DialogTitle>Upload Document</DialogTitle>
                                <DialogContent>

                                    <input
                                        type="file"
                                        onChange={handleFileChange}
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleCloseModal} color="secondary">
                                        Cancel
                                    </Button>
                                    <Button onClick={handleAddDocument} color="primary">
                                        Upload
                                    </Button>
                                </DialogActions>
                            </Dialog>


                        </div>
                    </div>

                </div>{/* /.container-fluid */}
            </section>
            {/* /.content */}

        </div>
    )
}








export default DocumentRepo