import React from 'react';
import '../Components/RoadSideAssitant/css/roadSidePage1.css';
import '../Components/RoadSideAssitant/css/roadSidepage2.css';
import'../Components/RoadSideAssitant/css/roadsidePage3.css';
import RoadsideAssistancePage1 from "../Components/RoadSideAssitant/RoadSideAsstantPage1";
import RoadsideAssistancePage2 from "../Components/RoadSideAssitant/RoadSideAssistantPage2";
import RoadSideAssistantPage3 from "../Components/RoadSideAssitant/RoadSideAssistantPage3";
import MajorServicePage from "../Components/CommonComponents/MajorServicePage";
function RoadSideAssistantMainPage() {
  return (
     <>
        <RoadsideAssistancePage1/>
        <MajorServicePage title={'Roadside Assistance'} index={0}/>
        <MajorServicePage title={'Roadside Assistance'} index={1}/>
        <MajorServicePage title={'Roadside Assistance'} index={2}/>
        <RoadsideAssistancePage2/>
        <RoadSideAssistantPage3/>
     </>
  );
}

export default RoadSideAssistantMainPage;
