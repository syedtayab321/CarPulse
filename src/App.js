import React from "react";
import {Routes,Route} from "react-router-dom";
import MainPage from "./Pages/MainPage";
import Navbar from "./Components/CommonComponents/Navbar";
import Footer from "./Components/CommonComponents/footer";
import MajorServicePage from "./Components/MainPageComponents/MajorServicePage";
import AboutUsPage from "./Pages/Aboutus";
import ServicesDetailsPage from "./Pages/ServiceDetailsPage";
import WarrantyPolicy from "./Pages/WrantyPolicy";
import FAQs from "./Pages/Faqs";
import OfferDetails from "./Pages/offerDetails";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
          <Route path='/' element={<MainPage/>} />
          <Route path='/aboutus' element={<AboutUsPage/>} />
          <Route path='/services' element={<MajorServicePage/>} />
          <Route path='/serviceDetails' element={<ServicesDetailsPage/>} />
          <Route path='/carServiceDetails' element={<OfferDetails/>} />
      </Routes>

        <WarrantyPolicy/>
        <FAQs/>
        <Footer/>
    </>
  );
}

export default App;
