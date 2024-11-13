import React from "react";
import {Routes,Route} from "react-router-dom";
import MainPage from "./Pages/MainPage";
import Navbar from "./Components/CommonComponents/Navbar";
import Footer from "./Components/CommonComponents/footer";
import MajorServicePage from "./Components/MainPageComponents/MajorServicePage";
import AboutUsPage from "./Pages/Aboutus";
import ServicesDetailsPage from "./Pages/ServiceDetailsPage";
import OfferDetails from "./Pages/offerDetails";
import ContactUs from "./Pages/ContactUs";
import LoginPage from "./Components/CommonComponents/Login";
import SignupPage from "./Components/CommonComponents/SignUpScreen";
import './App.css'
import FloatingWhatsAppButton from "./Components/CommonComponents/floatingActionButton";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <FloatingWhatsAppButton/>
      <Navbar/>
      <Routes>
          <Route path='/' element={<MainPage/>} />
          <Route path='/aboutus' element={<AboutUsPage/>} />
          <Route path='/services' element={<MajorServicePage/>} />
          <Route path='/serviceDetails' element={<ServicesDetailsPage/>} />
          <Route path='/carServiceDetails' element={<OfferDetails/>} />
          <Route path='/contactus' element={<ContactUs/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/signup' element={<SignupPage/>} />
      </Routes>
        <Footer/>
    </>
  );
}

export default App;
