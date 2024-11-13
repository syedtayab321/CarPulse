import React from 'react';
import MobileCarServiceMain from "../Components/MobileRepair/MobileServiceMain";
import MobileCarHealthCheck from "../Components/MobileRepair/MobileCarHealthCheck";
import MobileCarBanner from "../Components/MobileRepair/MobileCarBanner";
import MobileCarHowItWork from "../Components/MobileRepair/MobileCarHowItWork";
import'./../assets/mobileCarService/banner.css';
import'./../assets/mobileCarService/MobileHealthCheck.css';
import'./../assets/mobileCarService/MobileHowiwork.css';
function MobileCarService() {
  return (
     <>
        <MobileCarServiceMain/>
        <MobileCarHealthCheck/>
        <MobileCarBanner/>
        <MobileCarHowItWork/>
     </>
  );
}

export default MobileCarService;
