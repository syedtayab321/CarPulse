import React from 'react';
import HowItWorks from "../Components/ServiceDetailsComponents/Page2";
import WrantyPolicy from "../Components/MainPageComponents/WrantyPolicy";
import MajorServicePage from "../Components/CommonComponents/MajorServicePage";

function ServiceDetails() {
  return (
     <>
       <div className='serviceDetailsMain'>
           <MajorServicePage title={'Car Service'} index={0}/>
           <MajorServicePage title={'Car Service'} index={1}/>
           <HowItWorks/>
           <WrantyPolicy/>
       </div>
     </>
  );
}

export default ServiceDetails;
