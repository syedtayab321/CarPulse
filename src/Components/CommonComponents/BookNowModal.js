import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './../../assets/css/bookNowModal.css';
import {useNavigate} from "react-router-dom";

const CustomBookNowModal = ({ show, handleClose }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    mobile: '',
    vehicleNumber: '',
    vehicleType: '',
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.location) formErrors.location = 'Location is required';
    if (!/^\d{10}$/.test(formData.mobile)) formErrors.mobile = 'Enter a valid 10-digit mobile number';
    if (!formData.vehicleNumber) formErrors.vehicleNumber = 'Vehicle number is required';
    if (!formData.vehicleType) formErrors.vehicleType = 'Vehicle type is required';

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Form submitted successfully');
      handleClose();
    }
  };
  const user = localStorage.getItem('user');

  if (user !== null) {
        return (
            <Modal show={show} onHide={handleClose} centered animation={true} dialogClassName="custom-modal">
      <Modal.Header closeButton>
        <Modal.Title>Fill Out Your Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              isInvalid={!!errors.name}
            />
            <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formLocation" className="mt-3">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              isInvalid={!!errors.location}
            />
            <Form.Control.Feedback type="invalid">{errors.location}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formMobile" className="mt-3">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              isInvalid={!!errors.mobile}
            />
            <Form.Control.Feedback type="invalid">{errors.mobile}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formVehicleNumber" className="mt-3">
            <Form.Label>Vehicle Number</Form.Label>
            <Form.Control
              type="text"
              name="vehicleNumber"
              value={formData.vehicleNumber}
              onChange={handleChange}
              isInvalid={!!errors.vehicleNumber}
            />
            <Form.Control.Feedback type="invalid">{errors.vehicleNumber}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formVehicleType" className="mt-3">
            <Form.Label>Vehicle Type</Form.Label>
            <Form.Control
              type="text"
              name="vehicleType"
              value={formData.vehicleType}
              onChange={handleChange}
              isInvalid={!!errors.vehicleType}
            />
            <Form.Control.Feedback type="invalid">{errors.vehicleType}</Form.Control.Feedback>
          </Form.Group>

          <Button type="submit" variant="success" className="w-100 mt-4 submit-btn">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
         );
  }else {
      navigate('/login');
  }

};

export default CustomBookNowModal;
