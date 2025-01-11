import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import ServicePlans from "../../components/service/servicePlans/ServicePlans";
import ServiceType from "../../components/service/serviceType/ServiceType";
import "./service.css";
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const Service = () => {
  const [data, setData] = useState()
  const location = useLocation()
  const { id } = location.state

  useEffect(() => {
    
    getData()
    getFaq()
  
  }, [])
  

  function getData() {
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  id
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("/category/get", requestOptions)
  .then(response => response.json())
  .then(result => {
    if (result.status == 200) {
      setData(result.data)
    }
  })
  .catch(error => console.log('error', error));
  }

  const getFaq = () =>{
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "faq_id": id
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("/faq/get", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  }


  return (
    <div className="serviceContainer" >
      {/* servicetpye */}

      <ServiceType data={data?.categoryData} />

      {/* serviceplans */}

      <ServicePlans data = {data?.serviceData} />

      {/* faq */}

      <div className="faqContainer">
        <h2 className="lightTitle">FAQ</h2>
        <Accordion style={{backgroundColor:'#112D4E', marginBottom:20}} >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{color:'white'}}/>}
            aria-controls="panel1a-content"
            id="panel1a-header">
            <Typography color={'white'}>Question no. 1</Typography>
          </AccordionSummary>
          <AccordionDetails style={{backgroundColor:'white'}}>
            <Typography >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{backgroundColor:'#112D4E', marginBottom:20}} >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{color:'white'}}/>}
            aria-controls="panel1a-content"
            id="panel1a-header">
            <Typography color={'white'}>Question no. 2</Typography>
          </AccordionSummary>
          <AccordionDetails style={{backgroundColor:'white'}}>
            <Typography >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Service;
