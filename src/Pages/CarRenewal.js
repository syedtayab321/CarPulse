import React from 'react';
import '../Components/CarRenewalCompnents/css/CarRenewalPage1.css';
import '../Components/CarRenewalCompnents/css/carRenewalPage2.css';
import CarRenewalPage1 from "../Components/CarRenewalCompnents/CarRenewalPage1";
import CarRenewalPage2 from "../Components/CarRenewalCompnents/CarRenewalPage2";
import MajorServicePage from "../Components/CommonComponents/MajorServicePage";
export default function CarRenewalMainPage(){
    return(
        <>
          <MajorServicePage title={'Car Repair'} index={0}/>
          <CarRenewalPage1/>
          <CarRenewalPage2/>
        </>
    );
}