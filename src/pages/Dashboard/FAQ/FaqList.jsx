import { Visibility, Add, ModeEdit, Delete } from '@mui/icons-material';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../../components/panels/Sidebar';

const FaqList = () => {
  const [faq, setFaq] = useState();

  useEffect(() => {
    getFaq();
  }, []);

  const handleDelete = (id) => {
    
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      id,
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch('/faq/delete', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status === 200) {
          alert('Deleted Succesfully');
          location.reload();
        }
      })
      .catch((error) => {});
  };

  const getFaq = () => {
    const requestOptions = {
      method: 'POST',
      redirect: 'follow',
    };

    fetch('/faq/getAll', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        result.status === 200 ? setFaq(result.data) : null;
      })
      .catch((error) => {});
  };

  return (
    <>
      <Sidebar active={'/faq'} />

      <div className='content-wrapper'>
        {/* Content Header (Page header) */}
        <section className='content-header'>
          <div className='container-fluid'>
            <div className='row mb-2'>
              <div className='col-sm-6'>
                <h1>FAQ List</h1>
              </div>
              <div className='col-sm-6'>
                <ol className='breadcrumb float-sm-right'>
                  <li className='breadcrumb-item'>
                    <a href='#'>Home</a>
                  </li>
                  <li className='breadcrumb-item active'>FAQ List</li>
                </ol>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        {/* Main content */}
        <section className='content'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-6 col-lg-12'>
                <div className='card'>
                  <div className='card-header'>
                    <h3 className='card-title'>List</h3>
                    <div className='card-tools'>
                      <Link to={'/faqlist/addfaq'}>
                        <button className='btn btn-primary'>
                          <Add /> Add New
                        </button>
                      </Link>
                    </div>
                  </div>
                  {/* /.card-header */}
                  <div className='card-body p-0'>
                    <table className='table'>
                      <thead>
                        <tr>
                          <th style={{ width: 10 }}>Id</th>
                          <th>FAQ</th>
                          <th>Category Name</th>
                          <th style={{ width: 40 }}>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {faq?.map((f, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{f.question}</td>
                            <td>{f.category_name}</td>
                            <td className='d-flex'>
                              <Link to="/FaqList/details" state={{ id: f.id }}>
                                <Visibility sx={{ color: 'orange' }} />
                              </Link>
                              <Link to="/faqlist/edit" state={{ id: f.id }}>
                                <ModeEdit sx={{ color: 'green' }} />
                              </Link>

                              <Delete
                                sx={{ color: 'maroon' }}
                                onClick={() => handleDelete(f?.id)}
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {/* /.card-body */}
                </div>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>
    </>
  );
};

export default FaqList;
