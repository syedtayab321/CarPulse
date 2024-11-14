import React from 'react';
import './../assets/CarRenewal/css/CarRenewalPage1.css';
import './../assets/CarRenewal/css/carRenewalPage2.css';
import CarRenewalPage1 from "../Components/CarRenewalCompnents/CarRenewalPage1";
import CarRenewalPage2 from "../Components/CarRenewalCompnents/CarRenewalPage2";
export default function CarRenewalMainPage(){
    return(
        <>
          <CarRenewalPage1/>
          <CarRenewalPage2/>
        </>
    );
}