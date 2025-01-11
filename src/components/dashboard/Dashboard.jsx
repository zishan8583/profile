import React, { useEffect, useState } from 'react'
import Header from './template/Header'
import SideNav from './template/SideNav'
import Footer from './template/Footer'
import Logo from '../../assets/images/Logo.png';
import gatiShakti from '../../assets/images/gati-shakti.jpeg';
import { GoogleMap, Marker, LoadScript, InfoWindow } from '@react-google-maps/api';
import { useAuth } from '../../store/authContext'
import { Card, CardContent, Typography, CardHeader } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/PowerSettingsNew';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';


const cardStyle = {
    minWidth: 200,
    backgroundColor: '#0391a3',
    color: 'white',
    boxShadow: '0px 5px 7px rgba(0, 0, 0, 0.2)', // Box shadow
    marginBottom: '16px'
};

const contentStyle = {
    textAlign: 'center',
};

const titleStyle = {
    marginBottom: '8px', // Using pixels for margin
};

const countStyle = {
    fontWeight: 'bold',
    fontSize: '2rem',
};

function Map({ onCountsReceived }) {

    const [markerPositions, setMarkerPositions] = useState(null);
    const [activeMarker, setActiveMarker] = useState(null);

    const { token, id } = useAuth();





    useEffect(() => {
        const fetchData = async () => {
            let projectCounts = {};
            try {
                const response = await fetch('backend/api/get-all-projects', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': token
                    },
                    body: JSON.stringify({
                        auth_user_id: id
                    })
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const result = await response.json();


                const transformedDataArray = result.data.map(item => {
                    const coordinatesArray = JSON.parse(item.coordinates);
                    return {
                        lat: coordinatesArray[1],
                        lng: coordinatesArray[0],
                        name: `Contractor: ${item.contractor_name}`,
                        info: item.project_description
                    };
                });

                setMarkerPositions(transformedDataArray);

                projectCounts = getCounts(result.data);

            } catch (error) {
                console.error('Error fetching data:', error);
            }

            onCountsReceived(projectCounts);


        };



        fetchData();
    }, []);




    const getCounts = (dataArray) => {
        let counts = {
            countAll: 0,
            countOngoing: 0,
            countCompleted: 0
        };


        dataArray.forEach(item => {

            counts.countAll++;

            if (item.status === 'Ongoing') {
                counts.countOngoing++;
            } else if (item.status === 'Completed') {
                counts.countCompleted++;
            }
        });

        return counts;
    };

    const mapStyles = {
        height: "500px",
        width: "100%"
    };

    const defaultCenter = {
        lat: 25.906267,
        lng: 93.727592
    };


    const handleMarkerClick = (marker) => {
        setActiveMarker(marker);
    };

    const handleMarkerClose = () => {
        setActiveMarker(null);
    };

    return (
        <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={8}
            center={defaultCenter}
        >
            {markerPositions?.map((position, index) => (
                <Marker
                    key={index}
                    position={position}
                    onClick={() => handleMarkerClick(position)}
                />
            ))}
            {activeMarker && (
                <InfoWindow
                    position={activeMarker}
                    onCloseClick={handleMarkerClose}
                >
                    <div>
                        <h3>{activeMarker.name}</h3>
                        <p>{activeMarker.info}</p>
                    </div>
                </InfoWindow>
            )}
        </GoogleMap>
    );


}


const Dashboard = () => {



    const [counts, setCounts] = useState({});
    const { logout } = useAuth();

    const handleCountsReceived = (counts) => {

        setCounts(counts);
    };

    const handleLogout = () => {

        logout();


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
                                <h1 className="m-0">Dashboard</h1>
                            </div>{/* /.col */}
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    Dashboard

                                </ol>
                            </div>{/* /.col */}
                        </div>{/* /.row */}
                    </div>{/* /.container-fluid */}
                </div>
                {/* /.content-header */}
                {/* Main content */}
                <section className="content" >
                    <div className="container-fluid" >


                        <div className="row"  >

                            <div className="col-lg-9 col-sm-12 " >

                                <Card>
                                    <CardHeader title={
                                        <>
                                            <LocationOnOutlinedIcon sx={{ color: 'red' }} />
                                            Project Locations
                                        </>
                                    }
                                        titleTypographyProps={{ variant: 'h6', fontWeight: 'bold' }}
                                        style={{
                                            backgroundColor: '#DCF2F1',
                                            color: '#000',
                                        }}
                                    />
                                    <CardContent>
                                        <LoadScript
                                            googleMapsApiKey="AIzaSyDHTuoN3QcWZhGCXSFJ-Y2W_D2MSe-DjsM"
                                        >
                                            <Map onCountsReceived={handleCountsReceived} />
                                        </LoadScript>
                                    </CardContent>
                                </Card>

                            </div>

                            <div className="col-lg-3 col-sm-12">

                                <Card style={cardStyle}>
                                    <CardContent style={contentStyle}>
                                        <Typography variant="h6" style={titleStyle}>
                                            Total projects
                                        </Typography>
                                        <Typography variant="h4" style={countStyle}>
                                            {counts.countAll}10
                                        </Typography>
                                    </CardContent>
                                </Card>
                                <Card style={cardStyle}>
                                    <CardContent style={contentStyle}>
                                        <Typography variant="h6" style={titleStyle}>
                                            Total ongoing projects
                                        </Typography>
                                        <Typography variant="h4" style={countStyle}>
                                            {counts.countOngoing}5
                                        </Typography>
                                    </CardContent>
                                </Card>
                                <Card style={cardStyle}>
                                    <CardContent style={contentStyle}>
                                        <Typography variant="h6" style={titleStyle}>
                                            Total completed projects
                                        </Typography>
                                        <Typography variant="h4" style={countStyle}>
                                            {counts.countCompleted}5
                                        </Typography>
                                    </CardContent>
                                </Card>

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

export default Dashboard