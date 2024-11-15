import React from 'react';
import CarContractPage1 from "../Components/CarContracts/CarContractPage1";
import ServiceTable from "../Components/CarContracts/ContractServicesTable";
import CarContractPage2 from "../Components/CarContracts/CarContractPage2";

 const CarContractMain = ()=>{
    return(
        <>
            <CarContractPage1/>
            <CarContractPage2 title={'Service Contract'}/>
            <ServiceTable/>
        </>
    );
}
export default  CarContractMain