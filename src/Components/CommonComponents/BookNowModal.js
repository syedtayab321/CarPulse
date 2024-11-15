import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { getFirestore, doc, setDoc, collection, addDoc } from 'firebase/firestore';
import { app } from '../../FirebaseConfig';
import './css/bookNowModal.css';
import { v4 as uuidv4 } from 'uuid';
const db = getFirestore(app);

const CustomBookNowModal = ({ show, handleClose, serviceName, packageName, price }) => {
  const [formData, setFormData] = useState({
    username: '',
    location: '',
    phoneNumber: '',
    useremail: '',
    serviceName: serviceName,
    packageName: packageName,
    price: price,
    orderID: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.username) formErrors.username = 'Name is required';
    if (!formData.location) formErrors.location = 'Location is required';
    if (!/^\d{10}$/.test(formData.phoneNumber)) formErrors.phoneNumber = 'Enter a valid 10-digit mobile number';
    if (!formData.useremail) formErrors.useremail = 'Email is required';

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
       const orderID = uuidv4();
        const orderRef = doc(db, 'Orders', orderID); // Use orderID as document name
        const orderData = { ...formData, orderID };
        await setDoc(orderRef, orderData);
        alert('Form submitted successfully');
        handleClose();
      } catch (error) {
        console.error('Error adding document: ', error);
        alert('Error saving data. Please try again.');
      }
    }
  };

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
              name="username"
              value={formData.username}
              onChange={handleChange}
              isInvalid={!!errors.username}
            />
            <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
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

          <Form.Group controlId="formUserEmail" className="mt-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="useremail"
              value={formData.useremail}
              onChange={handleChange}
              isInvalid={!!errors.useremail}
            />
            <Form.Control.Feedback type="invalid">{errors.useremail}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formPhoneNumber" className="mt-3">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              isInvalid={!!errors.phoneNumber}
            />
            <Form.Control.Feedback type="invalid">{errors.phoneNumber}</Form.Control.Feedback>
          </Form.Group>

          <Button type="submit" variant="success" className="w-100 mt-4 submit-btn">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default CustomBookNowModal;
