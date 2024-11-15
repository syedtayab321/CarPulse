import HomePage from "../Components/MainPageComponents/HomePage";
import KeyFeatures from "../Components/MainPageComponents/KeyFeautures";
import AboutUsPage from "../Components/MainPageComponents/Aboutus";
import WarrantyPolicy from "../Components/MainPageComponents/WrantyPolicy";
import FAQs from "../Components/MainPageComponents/Faqs";
import React from "react";
import MajorServices from "../Components/CommonComponents/MajorServicePage";
import ServiceDetailsPage2 from "../Components/ServiceDetailsComponents/Page2";

export default function MainPage(){
    return(
        <>
            <HomePage/>
            <AboutUsPage/>
            <MajorServices title={'Car Renewal'} index={0} />
            <ServiceDetailsPage2/>
            <KeyFeatures/>
            <WarrantyPolicy/>
            <FAQs/>
        </>
    );
}