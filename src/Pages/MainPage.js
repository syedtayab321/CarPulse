import HomePage from "../Components/MainPageComponents/HomePage";
import KeyFeatures from "../Components/MainPageComponents/KeyFeautures";
import AboutUsPage from "../Components/MainPageComponents/Aboutus";
import WarrantyPolicy from "../Components/MainPageComponents/WrantyPolicy";
import FAQs from "../Components/MainPageComponents/Faqs";
import React from "react";
import MajorServices from "../Components/CommonComponents/MajorServicePage";
import HowItWorks from "../Components/ServiceDetailsComponents/Page2";
import QrCodeBanner from "../Components/CommonComponents/floatinAppQrCode";

export default function MainPage(){
    return(
        <>
            <QrCodeBanner/>
            <HomePage/>
            <AboutUsPage/>
            <MajorServices title={'Car Renewal'} index={0} />
            <HowItWorks/>
            <KeyFeatures/>
            <WarrantyPolicy/>
            <FAQs/>
        </>
    );
}