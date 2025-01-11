import "./servicePlan.scss";
import * as React from "react";
import { Button } from "react-bootstrap";
import ServicePlanCard from '../../ui/servicePlanCard/ServicePlanCard'
const ServicePlans = ({data}) => {
  return (
    <div className="container servicePlanContainer ">
      {/* <h2 className="lightTitle"> AC Service & Maintanance Plans</h2> */}

        <ServicePlanCard data ={data}/>
     
    </div>
  );
};

export default ServicePlans;
