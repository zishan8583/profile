import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../../store/authContext'
import { IconButton, Grid, Button, TextField, Typography } from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import ListIcon from '@mui/icons-material/List';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import AddIcon from '@mui/icons-material/Add';
import Pagination from '@mui/material/Pagination';
import { Table, TableHead, TableBody, TableCell, TableRow, TableFooter, Box } from '@mui/material';

const Home = ({ projectStatus, more, showDetailsHandler }) => {
  const [viewType, setViewType] = useState('list');
  const { token, id } = useAuth();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      
      setData([
        {
          "id": 1,
          "project_title": "City Mall Construction",
          "contractor_name": "ABC Constructions",
          "project_type": "Commercial",
          "contractor_contact": "9876543210",
          "estimated_cost_in_rs": 50000000
        },
        {
          "id": 2,
          "project_title": "Highway Expansion",
          "contractor_name": "XYZ Infrastructure Ltd.",
          "project_type": "Civil Engineering",
          "contractor_contact": "9123456789",
          "estimated_cost_in_rs": 20000000
        },
        {
          "id": 3,
          "project_title": "Residential Apartments",
          "contractor_name": "Dream Homes Pvt. Ltd.",
          "project_type": "Residential",
          "contractor_contact": "9345678901",
          "estimated_cost_in_rs": 15000000
        },
        {
          "id": 4,
          "project_title": "Bridge Construction",
          "contractor_name": "Steel Bridges Co.",
          "project_type": "Infrastructure",
          "contractor_contact": "9753102468",
          "estimated_cost_in_rs": 12000000
        },
        {
          "id": 5,
          "project_title": "School Building Project",
          "contractor_name": "Edu Build Corp.",
          "project_type": "Educational",
          "contractor_contact": "9234567890",
          "estimated_cost_in_rs": 8000000
        }
      ]
      );
      return;

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

        if (projectStatus === 'ongoing') {

          const newData = result.data.filter(item => item.status === 'Ongoing');

          setData(newData);
        }
        else if (projectStatus === 'completed') {

          const newData = result.data.filter(item => item.status === 'Completed');

          setData(newData);
        }
        else {
          setData(result.data)
        }



      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();


  }, []);

  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setPage(1);
  };

  // const filteredData = data?.filter((project) =>
  //   project.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //   project.project_title.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //   project.contractor_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //   project.contractor_contact.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //   project.project_type.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentData = filteredData?.slice(indexOfFirstItem, indexOfLastItem);


  const newProject = () => {
    navigate("/createproject");
  };

  const handleShowMoreClick = (id) => {

    if (more === 'fund') {
      showDetailsHandler(id)
    }
    else {
      navigate(`/projects/${id}`);
    }
  };

  const toggleViewType = () => {
    setViewType(viewType === 'table' ? 'list' : 'table');
  };


  return (
    <div className="content-wrapper">

      {/* Content Header (Page header) */}
      <div className="content-header mb-4 shadow-sm " style={{ backgroundColor: 'white', padding: '0.5rem' }} >
        <div className="container-fluid">
          <Grid container justifyContent="space-between" alignItems="center" mb={2}>
            <Grid item xs={12} sm={6}>
              <Button
                variant={viewType === 'list' ? 'contained' : 'outlined'}
                color="primary"
                onClick={() => toggleViewType('list')}
                sx={{
                  mr: 2, fontWeight: viewType === 'list' ? 'bold' : 'normal',
                  fontSize: viewType === 'list' ? '1.1rem' : '0.8rem'

                }}
              >
                Smart view
              </Button>
              <Button
                variant={viewType === 'table' ? 'contained' : 'outlined'}
                color="primary"
                onClick={() => toggleViewType('table')}
                sx={{ fontWeight: viewType === 'table' ? 'bold' : 'normal', fontSize: viewType === 'table' ? '1.1rem' : '0.8rem' }}
              >
                Tabular View
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ textAlign: 'right' }}>
              {!more &&
                <Button
                  variant="outlined"
                  onClick={newProject}
                  startIcon={<AddIcon />}
                  sx={{ fontWeight: 'bold', fontSize: '0.8rem' }}
                >
                  New project
                </Button>

              }

            </Grid>
          </Grid>
        </div>{/* /.container-fluid */}
      </div>

      {/* /.content-header */}
      {/* Main content */}
      <section className="content">
        <div className="container-fluid">

          {

            viewType == 'table' ? (
              <>

                <div className="card" >
                  <div className="card-header" style={{ backgroundColor: '#0391a3' }}>
                    <div className="d-flex align-items-center justify-content-between ">

                      <div className='col-lg-6 col-sm-12' style={{ fontWeight: 'bold', color: 'white', fontSize: '1.3rem' }}>
                        PROJECT LIST
                      </div>


                      <div className="col-lg-3 col-sm-12">

                        <TextField
                          label="Search"
                          variant="filled"
                          value={searchQuery}
                          onChange={handleSearchChange}
                          sx={{backgroundColor:'white', borderRadius:'5px'}}
                          fullWidth
                        />

                      </div>


                    </div>
                  </div>
                  <div className="card-body" style={{ overflowY: 'auto', width: '100%' }}>

                    <div>




                      {data.length === 0 && <p>Table is empty...</p>}

                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem' }}>ID</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem' }}>Project Title</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem' }}>Contractor Name</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem' }}>Type</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem' }}>Contact</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem' }}>Estimated Cost (₹)</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem' }}>Actions</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {data.map((project) => (
                            <TableRow key={project.id}>
                              <TableCell sx={{ fontSize: '1rem' }}>{project.id}</TableCell>
                              <TableCell sx={{ fontSize: '1rem' }}>{project.project_title}</TableCell>
                              <TableCell sx={{ fontSize: '1rem' }}>{project.contractor_name}</TableCell>
                              <TableCell sx={{ fontSize: '1rem' }}>{project.project_type}</TableCell>
                              <TableCell sx={{ fontSize: '1rem' }}>{project.contractor_contact}</TableCell>
                              <TableCell sx={{ fontSize: '1rem' }}>₹ {project.estimated_cost_in_rs}</TableCell>
                              <TableCell sx={{ fontSize: '1rem' }}>
                                <Button
                                  onClick={() => handleShowMoreClick(project.id)}
                                  variant="contained"
                                  color="success"
                                >
                                  More
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                        <TableFooter>
                          <TableRow>
                            <TableCell colSpan={7}>
                              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Pagination
                                  count={Math.ceil(data.length / itemsPerPage)}
                                  page={page}
                                  onChange={handleChangePage}
                                  variant="outlined"
                                  color="primary"
                                />
                              </Box>
                            </TableCell>
                          </TableRow>
                        </TableFooter>
                      </Table>
                    </div>
                  </div>
                </div>
              </>
            )

              : <SmartView data={data} handleShowMoreClick={handleShowMoreClick} />

          }



        </div>{/* /.container-fluid */}
      </section>
      {/* /.content */}

    </div>

  )
}




const SmartView = ({ data, handleShowMoreClick }) => {
  return (
    <div className="" style={{ height: '70vh' }}>
      <div className="scrollable-container " style={{ maxHeight: '100%', overflowY: 'auto', marginLeft: '20px', marginRight: '20px' }}>

        {!data?.length ? 'Data is empty....' : null}

        {data?.map((item, index) => (
          <div key={index} style={styles.projectCard}>
            <div style={styles.projectHeader}>
              <h2 style={styles.projectTitle}>{item.project_title}</h2>
            </div>
            <div style={styles.projectContent}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} lg={8}>
                  <div style={styles.projectDetails}>
                    <p>
                      <strong>Project type:</strong> {item.project_type} | <strong>Physical progress:</strong> 45 | <strong>Assigned Contractor:</strong> {item.contractor_name}<br />
                      {item.project_description}
                    </p>
                  </div>
                </Grid>
                <Grid item xs={12} lg={4} textAlign="right">
                  {/* <div style={styles.projectActions}>
                    <IconButton aria-label="print">
                      <PrintIcon />
                    </IconButton>
                    <IconButton aria-label="list" sx={{ ml: 1 }}>
                      <ListIcon />
                    </IconButton>
                  </div> */}
                </Grid>
              </Grid>
              <div style={styles.projectButton}>
                <button style={styles.button} onClick={() => handleShowMoreClick(item.id)}>Details <ArrowRightIcon /></button>
              </div>
            </div>
          </div>
        ))}


      </div>

    </div>

  )
}



const styles = {
  projectCard: {
    border: '1px solid #ddd',
    borderRadius: '10px',
    marginBottom: '20px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  projectHeader: {
    backgroundColor: '#0391a3',
    color: '#fff',
    padding: '12px',
    borderBottom: '1px solid #ddd',
    borderTopLeftRadius: '4px',
    borderTopRightRadius: '4px',
  },
  projectTitle: {
    margin: 0,
    fontSize: '1.5rem'
  },
  projectContent: {
    padding: '12px',
  },
  projectDetails: {
    marginBottom: '20px',
    fontSize: '1rem',
  },
  projectActions: {
    textAlign: 'right',
  },
  projectButton: {
    marginTop: '20px',
    textAlign: 'right',
  },
  button: {
    padding: '6px 12px',
    fontSize: '0.9rem',
    backgroundColor: '#1976d2',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};
export default Home