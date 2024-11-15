import React, { useState } from 'react';
import './css/contractTable.css';

const ServiceTable = () => {
    const [activeTab, setActiveTab] = useState('minor');

    const minorServiceData = [
        { item: "Oil 5W30 (Free Promotion)", contract: true, package: true },
        { item: "Oil Filter", contract: true, package: true },
        { item: "AC Filter", contract: true, package: false },
        { item: "Collection & Delivery", contract: true, package: true },
        { item: "All Fluids Top-Up", contract: true, package: true },
        { item: "Air Filter", contract: true, package: false },
        { item: "Tyre Check & Air Pressure", contract: true, package: true },
        // Add more items as necessary
    ];

    const majorServiceData = [
        { item: "Brake Check", contract: true, package: true },
        { item: "Spark Plugs", contract: true, package: false },
        { item: "Computer Diagnostics Report", contract: true, package: true },
        { item: "AC Checkup", contract: true, package: true },
        // Add more items as necessary
    ];

    const renderTable = (data) => (
        <table className="table table-bordered">
            <thead>
                <tr className="bg-success text-white">
                    <th scope="col">WHAT'S INCLUDED</th>
                    <th scope="col">Contract</th>
                    <th scope="col">Package</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        <td>{row.item}</td>
                        <td>{row.contract ? '✔️' : '❌'}</td>
                        <td>{row.package ? '✔️' : '❌'}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

    return (
        <div className="main-table container mt-5">
            <h2 className="text-center">HERE'S WHAT YOU GET</h2>
            <div className="d-flex justify-content-center my-3">
                <button
                    className={`btn ${activeTab === 'minor' ? 'btn-success' : 'btn-outline-success'}`}
                    onClick={() => setActiveTab('minor')}
                >
                    Minor Service
                </button>
                <button
                    className={`btn ${activeTab === 'major' ? 'btn-success' : 'btn-outline-success'} ml-2`}
                    onClick={() => setActiveTab('major')}
                >
                    Major Service
                </button>
            </div>
            <div className="table-responsive">
                {activeTab === 'minor' ? renderTable(minorServiceData) : renderTable(majorServiceData)}
            </div>
        </div>
    );
};

export default ServiceTable;
