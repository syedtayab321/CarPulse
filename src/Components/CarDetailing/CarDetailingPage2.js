import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function CarDetailingPage2() {
    return (
        <Container className="my-5 car-detailing-page">
            <Row>
                <Col md={8}>
                    <h2>Easy and Convenient Car Detailing in Dubai, UAE</h2>
                    <p>
                       Booking a car detailing service at Service My Car is easier than ever. All you need to do is select ‘car detailing’ and provide your details to get a free and instant quote. We provide some of the most comprehensive services of car detailing Dubai has to offer. Our car detailing services prevent any rust or corrosion from making its way to the body and any interior parts. The car interior cleaning that comes with our detailing service also ensures that all allergens and germs are swiftly dealt with, leaving you with a car that is clean inside out.
                    </p>

                    <h4>What is included in a car detailing service?</h4>
                    <p>
                        The auto service and detailing experts will ensure to go over your car’s interior and exterior with the most meticulous attention to detail. With a comprehensive car detailing process that involves washing, waxing, polishing, and buffing, you’ll get your vehicle back looking and feeling brand new.
                        All the parts of your car, including the chassis, headlights, and taillights will get proper polishing work done. Even the areas that are generally harder to reach, such as AC vents, will be thoroughly cleaned
                    </p>

                    <h4>Is it worth detailing a car?</h4>
                    <p>
                        Absolutely. Not only does it save you the time and energy in getting a car wash, but it adds to the value of your vehicle. Getting an auto detailing service done regularly will make aesthetic maintenance a lot easier for you, especially in the long run. Other considerations have to be made, such as the harsh climate in Dubai. Apart from having to deal with coarse dust scratching the surface, extensive exposure to the sun’s UV rays can also damage any protective coatings applied to your vehicle. Our professional detailing services ensures you have a clean and hygienic ride. You also get a better resale value by protecting your car from climatic hazards.
                    </p>

                    <h4>Where to find car detailing near me?</h4>
                    <p>
                       Our pickup and delivery system means you have access to our vehicle detailing services from anywhere in Dubai. The vehicle detailing garages in our network are fully equipped with the best tools to provide you with the best detailing services. Our commitments for a next day delivery means you’ll get a car that looks and feels brand new in no time. Use the Service My Car app or website to make a booking for the best services of detailing and car deep cleaning Dubai has to offer
                    </p>
                </Col>

                <Col md={4}>
                    <Card className="pricing-card">
                        <Card.Body>
                            <div className="most-popular-tag">MOST POPULAR</div>
                            <h3 className="text-center">Basic Service</h3>
                            <h5>What's Included</h5>
                            <ul>
                                <li>Collection & Delivery</li>
                                <li>360 Degree Health Check</li>
                                <li>Car Wash</li>
                                <li>Tyre Check & Air Pressure</li>
                                <li>Oil Filter Replacement (Labour)</li>
                                <li>Oil Change (Labour)</li>
                            </ul>
                            <h5>Parts Not Included</h5>
                            <ul className="not-included">
                                <li>Oil</li>
                                <li>Oil Filter</li>
                            </ul>
                            <div className="price-section">
                                <p>Was <s>200 AED</s></p>
                                <p className="current-price">Now 159 AED</p>
                                <p>Get free wash and AED 40 off when you book today</p>
                            </div>
                            <div className="timer">
                                <span>5 Days</span> : <span>3 Hours</span> : <span>56 Minutes</span> : <span>47 Seconds</span>
                            </div>
                            <Button variant="danger" className="w-100 mt-3">BOOK NOW</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default CarDetailingPage2;
