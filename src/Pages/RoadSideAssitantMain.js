import React from 'react';
import '../Components/RoadSideAssitant/css/roadSidePage1.css';
import '../Components/RoadSideAssitant/css/roadSidepage2.css';
import'../Components/RoadSideAssitant/css/roadsidePage3.css';
import RoadsideAssistancePage1 from "../Components/RoadSideAssitant/RoadSideAsstantPage1";
import RoadsideAssistancePage2 from "../Components/RoadSideAssitant/RoadSideAssistantPage2";
import RoadSideAssistantPage3 from "../Components/RoadSideAssitant/RoadSideAssistantPage3";
function RoadSideAssistantMainPage() {
  return (
     <>
        <RoadsideAssistancePage1/>
        <RoadsideAssistancePage2/>
        <RoadSideAssistantPage3/>
     </>
  );
}

export default RoadSideAssistantMainPage;
