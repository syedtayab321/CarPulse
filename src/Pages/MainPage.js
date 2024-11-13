import HomePage from "../Components/MainPageComponents/HomePage";
import CarServices from "../Components/MainPageComponents/MajorServicePage";
import HowWeWork from "../Components/MainPageComponents/HowItWorks";
import KeyFeatures from "../Components/MainPageComponents/KeyFeautures";
import AboutUsPage from "../Components/MainPageComponents/Aboutus";
import WarrantyPolicy from "../Components/MainPageComponents/WrantyPolicy";
import FAQs from "../Components/MainPageComponents/Faqs";
import React from "react";

export default function MainPage(){
    return(
        <>
            <HomePage/>
            <AboutUsPage/>
            <CarServices/>
            <HowWeWork/>
            <KeyFeatures/>
            <WarrantyPolicy/>
            <FAQs/>
        </>
    );
}