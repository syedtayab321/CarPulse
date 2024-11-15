import React from 'react';
import CarDetailingPage1 from "../Components/CarDetailing/CarDetailingPage1";
import '../Components/CarDetailing/css/carDetailing.css';
import '../Components/CarDetailing/css/CarDetailingPage2.css'
import CarDetailingPage2 from "../Components/CarDetailing/CarDetailingPage2";
export default function CarDetailingMainPage(){
    return(
        <>
            <CarDetailingPage1/>
            <CarDetailingPage2 title={'Car Detailing'} index={0}/>
        </>
    );
}