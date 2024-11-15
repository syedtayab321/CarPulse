import React, { useState } from 'react';
import { signUp } from '../../BackendFunctions/Auth';
import {Button, Form, Container, Row, Col, Spinner} from 'react-bootstrap';
import './css/SignUpPage.css';
import { Link } from "react-router-dom";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    phoneNumber: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { name, email,phoneNumber, location, password } = formData;
    const result = await signUp(name, email,phoneNumber, password, location);

    setLoading(false);
    if (result.success) {
      alert('Account created successfully!');
    } else {
      alert(`Error creating account: ${result.error}`);
    }
  };

  return (
    <Container fluid className="signup-container">
      <Row className="signup-content">
        <Col md={6} className="signup-image d-none d-md-block">
        </Col>

        <Col md={6} className="signup-form">
          <h2 className="text-center mb-4">Create Account</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formphoneNumber" className="mb-3">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your Mobile Number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formLocation" className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Create a password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button type="submit" className="sign-in-btn w-100" disabled={loading}>
              {loading ? (
                <Spinner animation="border" role="status" size="sm">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              ) : (
                'Create Account'
              )}
            </Button>

            <Link to='/' type="button" className="google-sign-in-btn mt-3">
              Back to Home Page
            </Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignupPage;
