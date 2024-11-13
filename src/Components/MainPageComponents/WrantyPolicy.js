import React from 'react';
import { Tab, Nav } from 'react-bootstrap';
import './../../assets/css/warrantyPolicy.css';

const WarrantyPolicy = () => {
  return (
    <div className="warranty-policy container mt-5">
      <h2 className="text-center">OUR WARRANTY POLICY</h2>

      <Tab.Container defaultActiveKey="service">
        <div className="nav-section mt-4 mb-4">
          <Nav variant="tabs" className="justify-content-center">
            <Nav.Item>
              <Nav.Link eventKey="service">Service</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="repair">Repair</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="electrical">Electrical</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="ac">A/C</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="batteries">Batteries & Tyres</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>

        <Tab.Content>
          <Tab.Pane eventKey="service">
            <div className="policy-details  p-4">
              <div className="duration">
                <h1 className="text-success">12 MONTHS</h1>
                <h3 className="text-center">OR</h3>
                <h1 className="text-success">10,000 KM</h1>
              </div>
              <div className="divider"></div>
              <div className="details">
                <ul className="list-unstyled">
                  <li>✔ 12 months or 10,000 KM - whichever comes first</li>
                  <li>✔ Warranty on parts and labour</li>
                  <li>✔ Hassle-free claims process</li>
                  <li>✔ Terms & conditions apply</li>
                </ul>
                <p>
                  We provide a 12 month/10,000 KM warranty with every car service.
                  Whether you choose to buy genuine or aftermarket parts from us,
                  both come with a hassle-free warranty policy. The labour is also
                  covered under the warranty.
                </p>
              </div>
            </div>
          </Tab.Pane>

          <Tab.Pane eventKey="repair">
           <div className="policy-details d-flex justify-content-between align-items-center p-4">
              <div className="duration">
                <h1 className="text-success">12 MONTHS</h1>
                <h3 className="text-center">OR</h3>
                <h1 className="text-success">10,000 KM</h1>
              </div>
              <div className="divider"></div>
              <div className="details">
                <ul className="list-unstyled">
                  <li>✔ 12 months or 10,000 KM - whichever comes first</li>
                  <li>✔ Warranty on parts and labour</li>
                  <li>✔ Hassle-free claims process</li>
                  <li>✔ Terms & conditions apply</li>
                </ul>
                <p>
                  We provide a 12 month/10,000 KM warranty with every car service.
                  Whether you choose to buy genuine or aftermarket parts from us,
                  both come with a hassle-free warranty policy. The labour is also
                  covered under the warranty.
                </p>
              </div>
            </div>
          </Tab.Pane>

          <Tab.Pane eventKey="electrical">
            <div className="policy-details d-flex justify-content-between align-items-center p-4">
              <div className="duration">
                <h1 className="text-success">12 MONTHS</h1>
                <h3 className="text-center">OR</h3>
                <h1 className="text-success">10,000 KM</h1>
              </div>
              <div className="divider"></div>
              <div className="details">
                <ul className="list-unstyled">
                  <li>✔ 12 months or 10,000 KM - whichever comes first</li>
                  <li>✔ Warranty on parts and labour</li>
                  <li>✔ Hassle-free claims process</li>
                  <li>✔ Terms & conditions apply</li>
                </ul>
                <p>
                  We provide a 12 month/10,000 KM warranty with every car service.
                  Whether you choose to buy genuine or aftermarket parts from us,
                  both come with a hassle-free warranty policy. The labour is also
                  covered under the warranty.
                </p>
              </div>
            </div>
          </Tab.Pane>

          <Tab.Pane eventKey="ac">
            <div className="policy-details d-flex justify-content-between align-items-center p-4">
              <div className="duration">
                <h1 className="text-success">12 MONTHS</h1>
                <h3 className="text-center">OR</h3>
                <h1 className="text-success">10,000 KM</h1>
              </div>
              <div className="divider"></div>
              <div className="details">
                <ul className="list-unstyled">
                  <li>✔ 12 months or 10,000 KM - whichever comes first</li>
                  <li>✔ Warranty on parts and labour</li>
                  <li>✔ Hassle-free claims process</li>
                  <li>✔ Terms & conditions apply</li>
                </ul>
                <p>
                  We provide a 12 month/10,000 KM warranty with every car service.
                  Whether you choose to buy genuine or aftermarket parts from us,
                  both come with a hassle-free warranty policy. The labour is also
                  covered under the warranty.
                </p>
              </div>
            </div>
          </Tab.Pane>

          <Tab.Pane eventKey="batteries">
            <div className="policy-details d-flex justify-content-between align-items-center p-4">
              <div className="duration">
                <h1 className="text-success">12 MONTHS</h1>
                <h3 className="text-center">OR</h3>
                <h1 className="text-success">10,000 KM</h1>
              </div>
              <div className="divider"></div>
              <div className="details">
                <ul className="list-unstyled">
                  <li>✔ 12 months or 10,000 KM - whichever comes first</li>
                  <li>✔ Warranty on parts and labour</li>
                  <li>✔ Hassle-free claims process</li>
                  <li>✔ Terms & conditions apply</li>
                </ul>
                <p>
                  We provide a 12 month/10,000 KM warranty with every car service.
                  Whether you choose to buy genuine or aftermarket parts from us,
                  both come with a hassle-free warranty policy. The labour is also
                  covered under the warranty.
                </p>
              </div>
            </div>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default WarrantyPolicy;
