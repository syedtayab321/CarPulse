import React from 'react';
import CarDetailingPage1 from "../Components/CarDetailing/CarDetailingPage1";
import './../assets/CarDetailing/carDetailing.css';
import './../assets/CarDetailing/CarDetailingPage2.css'
import CarDetailingPage2 from "../Components/CarDetailing/CarDetailingPage2";
export default function CarDetailingMainPage(){
    return(
        <>
          <CarDetailingPage1/>
          <CarDetailingPage2/>
        </>
    );
}