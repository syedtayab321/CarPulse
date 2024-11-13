import React from 'react';
import BattriesHeroSection from "./Components/BattriesHeroSection";
import BattriesAboutUs from "./Components/BattriesAboutSection";
import BattriesServices from "./Components/BattriesServicesSection";
import BattriesFooter from "./Components/BattriesFooter";
import ContactUs from "../Pages/ContactUs";

const BattriesMainPage = () => {
  return (
      <>
          <BattriesHeroSection/>
          <BattriesAboutUs/>
          <BattriesServices/>
          <ContactUs/>
          <BattriesFooter/>
      </>
  );
};

export default BattriesMainPage;
