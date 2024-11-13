import React from 'react';
import '../assets/css/servicesDetailsPage1.css';
import ServiceDetailsPage1 from "../Components/ServiceDetailsComponents/Page1";
import ServiceDetailsPage2 from "../Components/ServiceDetailsComponents/Page2";
import WrantyPolicy from "../Components/MainPageComponents/WrantyPolicy";

function ServiceDetails() {
  return (
     <>
       <div className='serviceDetailsMain'>
           <ServiceDetailsPage1/>
           <ServiceDetailsPage2/>
           <WrantyPolicy/>
       </div>
     </>
  );
}

export default ServiceDetails;
