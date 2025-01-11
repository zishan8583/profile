import React, { useState, useEffect } from 'react';
import Header from './template/Header';
import SideNav from './template/SideNav';
import Footer from './template/Footer';
import { Add } from '@mui/icons-material';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const Feedback = () => {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFeedback = {
      id: rows.length + 1,
      name: name,
      feedback: feedback,
      date: new Date().toISOString().split('T')[0], // current date in YYYY-MM-DD format
      category: category,
    };
    setRows([...rows, newFeedback]);
    setName('');
    setFeedback('');
    setDate('');
    setCategory('');
    handleClose();
  };

  const rows = [
    { id: 1, name: 'John Doe', feedback: 'Great service!', date: '2024-06-08', category: 'Service' },
    { id: 2, name: 'Jane Smith', feedback: 'The UI could be improved.', date: '2024-06-07', category: 'UI' },
    { id: 3, name: 'Alice Johnson', feedback: 'Loved the new features!', date: '2024-06-06', category: 'Features' },
    // Add more feedback entries as needed
  ];
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'feedback', headerName: 'Feedback', width: 400 },
    { field: 'date', headerName: 'Date', width: 150 },
    { field: 'category', headerName: 'Category', width: 150 },
  ];
    

  useEffect(() => {
    // Fetch existing feedback data from an API or state management
    // Example:
    // fetchFeedbackData().then(data => setRows(data));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <SideNav />
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6"></div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  {/* <Button variant="contained" onClick={handleOpen}>
                    <Add sx={{ fontSize: '30px' }} />
                    <span style={{ fontSize: '15px', marginLeft: '2px' }}>Add</span>
                  </Button> */}
                </ol>
              </div>
            </div>
          </div>
        </div>

        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div style={{ width: '100%', padding: '20px', backgroundColor: 'white', minHeight: '200px' }}>
                  <h1 style={{ fontSize: '1.2rem', color: 'green' }}>Feedback List</h1>
                  <div style={{ height: 400, width: '100%' }}>
                    <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5, 10, 20]} />
                  </div>
                </div>
              </div>
            </div>

            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
              <DialogTitle>Feedback Form</DialogTitle>
              <DialogContent>
                <form onSubmit={handleSubmit}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    style={{ marginTop: '1rem' }}
                  />
                  <TextField
                    label="Feedback"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    required
                    style={{ marginTop: '1rem' }}
                  />
                  <TextField
                    label="Category"
                    variant="outlined"
                    fullWidth
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                    style={{ marginTop: '1rem' }}
                  />
                </form>
              </DialogContent>
              <DialogActions style={{ padding: '1rem' }}>
                <Button variant="contained" onClick={handleClose} color="secondary" fullWidth>
                  Cancel
                </Button>
                <Button variant="contained" onClick={handleSubmit} color="primary" fullWidth>
                  Submit Feedback
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Feedback;
