import React from 'react';
import MobileCarServiceMain from "../Components/MobileRepair/MobileServiceMain";
import MobileCarHealthCheck from "../Components/MobileRepair/MobileCarHealthCheck";
import MobileCarBanner from "../Components/MobileRepair/MobileCarBanner";
import MobileCarHowItWork from "../Components/MobileRepair/MobileCarHowItWork";
import'../Components/MobileRepair/css/banner.css';
import'../Components/MobileRepair/css/MobileHealthCheck.css';
import'../Components/MobileRepair/css/MobileHowiwork.css';
function MobileCarService() {
  return (
     <>
        <MobileCarServiceMain title={'Mobile Auto Service'} index={0}/>
        <MobileCarHealthCheck/>
        <MobileCarBanner/>
        <MobileCarHowItWork/>
     </>
  );
}

export default MobileCarService;
