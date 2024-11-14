import React from "react";
import {Routes,Route} from "react-router-dom";
import MainPage from "./Pages/MainPage";
import Navbar from "./Components/CommonComponents/Navbar";
import Footer from "./Components/CommonComponents/footer";
import AboutUsPage from "./Components/MainPageComponents/Aboutus";
import ServicesDetailsPage from "./Pages/ServiceDetailsPage";
import OfferDetails from "./Pages/offerDetails";
import ContactUs from "./Components/MainPageComponents/ContactUs";
import LoginPage from "./Components/CommonComponents/Login";
import SignupPage from "./Components/CommonComponents/SignUpScreen";
import './App.css'
import FloatingWhatsAppButton from "./Components/CommonComponents/floatingActionButton";
import 'bootstrap/dist/css/bootstrap.min.css';
import BattriesMainPage from "./BattriesPortal/BattriesMainPage";
import CarRepair from "./Pages/CarRepair";
import MobileCarService from "./Pages/MobileCarService";
import RoadSideAssistantMainPage from "./Pages/RoadSideAssitantMain";
import QrCodeBanner from "./Components/CommonComponents/floatinAppQrCode";
import CarRenewalMainPage from "./Pages/CarRenewal";
import WrantyPolicy from "./Components/MainPageComponents/WrantyPolicy";
import MajorServices from "./Components/MainPageComponents/MajorServicePage";
import CarDetailingMainPage from "./Pages/CarDetailingMainPage";
import CustomContactComponent from "./Components/CommonComponents/CustomContactComponent";

function App() {
  return (
    <>
      <FloatingWhatsAppButton/>
      <QrCodeBanner/>
      <Navbar/>
      <Routes>
          <Route path='/' element={<MainPage/>} />
          <Route path='/battries' element={<BattriesMainPage/>} />
          <Route path='/aboutus' element={<AboutUsPage/>} />
          <Route path='/major-services' element={<MajorServices/>} />
          <Route path='/serviceDetails' element={<ServicesDetailsPage/>} />
          <Route path='/carServiceDetails' element={<OfferDetails/>} />
          <Route path='/contactus' element={<ContactUs/>} />
          <Route path='/warranty' element={<WrantyPolicy/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/signup' element={<SignupPage/>} />

          <Route path='/carRepair' element={<CarRepair/>} />
          <Route path='/mobileCarService' element={<MobileCarService/>} />
          <Route path='/roadsideAssistant' element={<RoadSideAssistantMainPage/>} />
          <Route path='/carRenewal' element={<CarRenewalMainPage/>} />
          <Route path='/carDetailing' element={<CarDetailingMainPage/>} />
      </Routes>
        <CustomContactComponent/>
        <Footer/>
    </>
  );
}

export default App;
