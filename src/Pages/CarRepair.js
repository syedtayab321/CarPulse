import React from 'react';
import RequestQuote from "../Components/CarRepairComponents/CarRepairMainpage";
import  './../assets/carRepaircss/carRepairMain.css';
import './../assets/carRepaircss/carService.css';
import CarServices from "../Components/CarRepairComponents/CarRepairServicesPage";
function CarRepair() {
  return (
     <>
        <RequestQuote/>
        <CarServices/>
     </>
  );
}

export default CarRepair;
