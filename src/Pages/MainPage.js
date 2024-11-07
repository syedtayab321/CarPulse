import HomePage from "../Components/MainPageComponents/HomePage";
import CarServices from "../Components/MainPageComponents/MajorServicePage";
import HowWeWork from "../Components/MainPageComponents/HowItWorks";
import BrandPage from "../Components/MainPageComponents/BrandPage";
import KeyFeatures from "../Components/MainPageComponents/KeyFeautures";
import AboutUsPage from "./Aboutus";

export default function MainPage(){
    return(
        <>
            <HomePage/>
            <AboutUsPage/>
            <CarServices/>
            <HowWeWork/>
            <BrandPage/>
            <KeyFeatures/>

        </>
    );
}