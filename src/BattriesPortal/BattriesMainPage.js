import React from 'react';
import BattriesHeroSection from "./Components/BattriesHeroSection";
import BattriesAboutUs from "./Components/BattriesAboutSection";
import BattriesServices from "./Components/BattriesServicesSection";
import BattriesFooter from "./Components/BattriesFooter";
import ContactUs from "../Components/MainPageComponents/ContactUs";
import BatteryProducts from "./Components/BatteryProducts";

const BattriesMainPage = () => {
  return (
      <>
          <BattriesHeroSection/>
          <BattriesAboutUs/>
          <BatteryProducts/>
          <BattriesServices/>
          <ContactUs/>
          <BattriesFooter/>
      </>
  );
};

export default BattriesMainPage;
