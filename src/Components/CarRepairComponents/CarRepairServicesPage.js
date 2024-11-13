import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';


const CarServices = () => {
  const services = [
    { title: "Car Service Dubai", description: ["Basic car service", "Full car service", "Major car service", "Free pickup and delivery"], icon: "icon-service" },
    { title: "Car Recovery Dubai", description: ["Breakdown recovery", "Flat tyre recovery", "Flat battery recovery", "All types of roadside assistance"], icon: "icon-recovery" },
    { title: "Car Detailing Dubai", description: ["Car polishing", "Interior cleaning", "Exterior cleaning", "Car detailing"], icon: "icon-detailing" },
    { title: "Car AC Repair Dubai", description: ["AC diagnostics and leak test", "AC gas refill", "AC compressor repair", "Full AC system flushing service"], icon: "icon-ac-repair" },
    { title: "Car Oil Change Dubai", description: ["Oil change service at home", "Premium oil change", "Oil filter change", "Oil flushing", "360-degree health check"], icon: "icon-oil-change" },
    { title: "Wheel Alignment Dubai", description: ["Computerised wheel alignment", "Tyre balancing services", "Wheel angle fixing", "360-degree health check"], icon: "icon-wheel-alignment" },
    { title: "Car Maintenance Dubai", description: ["General car maintenance", "Basic, Full, and Major service packages", "Auto mechanical and electrical repairs", "Fuel injection and cleaning services"], icon: "icon-maintenance" },
    { title: "Car Ac Gas Refilling Dubai", description: ["Car aircon regas", "Car ac repair", "Car air conditioning", "Car aircon recharge"], icon: "icon-ac-refill" },
  ];

  return (
    <Container className="my-5 car-services">
      <h2 className="text-center mb-4">OUR CAR SERVICES INCLUDE</h2>
      <Row className="justify-content-center">
        {services.map((service, index) => (
          <Col key={index} md={3} sm={6} xs={12} className="text-center mb-4">
            <div className={`service-icon ${service.icon}`} />
            <h5 className="service-title">{service.title}</h5>
            <ul className="service-description">
              {service.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </Col>
        ))}
      </Row>
      <div className="text-center mt-4">
        <Button variant="outline-success" className="view-all-btn">VIEW ALL SERVICES</Button>
      </div>
    </Container>
  );
};

export default CarServices;
