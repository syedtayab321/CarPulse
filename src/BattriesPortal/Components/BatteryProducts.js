import React from "react";
import { useNavigate } from "react-router-dom";
import "./../css/batteryProducts.css";

const batteries = [
  {
    id: 1,
    name: "Excide Battery",
    price: "AED 150",
    capacity: "100Ah",
    image: require('./../../assets/images/battery1.jpg'),
  },
  {
    id: 2,
    name: "Amaron Battery",
    price: "AED 200",
    capacity: "120Ah",
    image: require('./../../assets/images/battery1.jpg'),
  },
  {
    id: 3,
    name: "Luminous Battery",
    price: "AED 540",
    capacity: "110Ah",
    image: require('./../../assets/images/battery1.jpg'),
  },
  {
    id: 4,
    name: "Amaron Battery",
    price: "AED 780",
    capacity: "120Ah",
    image: require('./../../assets/images/battery1.jpg'),
  },
  {
    id: 5,
    name: "Luminous Battery",
    price: "AED 450",
    capacity: "110Ah",
    image: require('./../../assets/images/battery1.jpg'),
  },
   {
    id: 6,
    name: "Luminous Battery",
    price: "AED 200",
    capacity: "110Ah",
    image: require('./../../assets/images/battery1.jpg'),
  },
  {
    id: 7,
    name: "Luminous Battery",
    price: "AED 450",
    capacity: "110Ah",
    image: require('./../../assets/images/battery1.jpg'),
  },
   {
    id: 8,
    name: "Luminous Battery",
    price: "AED 200",
    capacity: "110Ah",
    image: require('./../../assets/images/battery1.jpg'),
  },
];

const BatteryProducts = () => {
  const navigate = useNavigate();

  const handleCardClick = (battery) => {
    navigate(`/battery-details/${battery.id}`, { state: battery });
  };

  return (
    <div className="battery-products-container">
      <h1 className="page-title">Battery Products</h1>
      <div className="battery-cards">
        {batteries.map((battery) => (
          <div
            className="battery-card"
            key={battery.id}
            onClick={() => handleCardClick(battery)}
          >
            <img src={battery.image} alt={battery.name} className="battery-image" />
            <h2>{battery.name}</h2>
            <p>Price: {battery.price}</p>
            <p>Capacity: {battery.capacity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BatteryProducts;
