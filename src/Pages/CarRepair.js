import React from 'react';
import RequestQuote from "../Components/CarRepairComponents/CarRepairMainpage";
import '../Components/CarRepairComponents/css/carService.css';
import CarServices from "../Components/CarRepairComponents/CarRepairServicesPage";
import MajorServicePage from "../Components/CommonComponents/MajorServicePage";
function CarRepair() {
  return (
     <>
        <MajorServicePage title={'Car Repair'} index={0} />
        <RequestQuote/>
        <CarServices/>
     </>
  );
}

export default CarRepair;
