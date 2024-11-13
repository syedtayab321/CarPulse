import React from 'react';
import './../assets/RoadSideAssistant/roadSidePage1.css';
import './../assets/RoadSideAssistant/roadSidepage2.css';
import'./../assets/RoadSideAssistant/roadsidePage3.css';
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
