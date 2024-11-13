import React from 'react';
import '../assets/css/servicesDetailsPage1.css';
import ServiceDetailsPage1 from "../Components/ServiceDetailsComponents/Page1";
import ServiceDetailsPage2 from "../Components/ServiceDetailsComponents/Page2";

function ServiceDetails() {
  return (
     <>
        <ServiceDetailsPage1/>
        <ServiceDetailsPage2/>
     </>
  );
}

export default ServiceDetails;
