import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../FirebaseConfig';
import './css/requestQuoteModal.css';

const RequestQuoteModal = ({ isOpen, onClose }) => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const [formData, setFormData] = useState({
        id: 'QFR7qoy8eJDPW4Z0CpFP',
        phone: userData?.phoneNumber || '',
        requestTime: new Date().toLocaleString(),
        serviceName: 'Select a Service',
        userEmail: userData?.email || '',
        userName: userData?.name || ''
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let formErrors = {};
        if (!formData.phone) formErrors.phone = "Phone number is required.";
        if (!formData.userEmail) formErrors.userEmail = "Email is required.";
        if (!formData.userName) formErrors.userName = "Name is required.";
        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            await addDoc(collection(db, 'quotes'), formData);
            alert("Quote request sent successfully!");
            onClose();
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay quoteModal">
            <div className="modal-container">
                <button onClick={onClose} className="close-button">&times;</button>
                <h2>Request a Quote</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Service Name:</label>
                        <select
                            name="serviceName"
                            value={formData.serviceName}
                            onChange={handleChange}
                        >
                            <option value="Car Renewal">Car Renewal</option>
                            <option value="Car Service">Car Service</option>
                            <option value="Service Contract">Car Contract</option>
                            <option value="RoadSide Assistance">RoadSide Assistance</option>
                            <option value="Car Repair">Car Repair</option>
                            <option value="Mobile Auto Service">Car Maintenance</option>
                            <option value="Car Detailing">Car Inspection</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            name="userEmail"
                            value={formData.userEmail}
                            onChange={handleChange}
                        />
                        {errors.userEmail && <span className="error">{errors.userEmail}</span>}
                    </div>
                    <div className="form-group">
                        <label>Name:</label>
                        <input
                            type="text"
                            name="userName"
                            value={formData.userName}
                            onChange={handleChange}
                        />
                        {errors.userName && <span className="error">{errors.userName}</span>}
                    </div>
                     <div className="form-group">
                        <label>Phone Number:</label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        {errors.phone && <span className="error">{errors.phone}</span>}
                    </div>
                    <button type="submit" className="submit-button">Submit Request</button>
                </form>
            </div>
        </div>
    );
};

export default RequestQuoteModal;
