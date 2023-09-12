/*
import React, { useState } from "react";
import "./App.css";

const chocolatesData = [
  { id: 1, name: "Milk Chocolate", price: 2 },
  { id: 2, name: "Dark Chocolate", price: 3 },
  { id: 3, name: "White Chocolate", price: 4 },
  { id: 4, name: "Kissme", price: 5 },
  { id: 5, name: "Cadbury", price: 5 },
  { id: 6, name: "Dairy Milk", price: 5 },
  { id: 7, name: "Lazy Choco", price: 5 },
  { id: 8, name: "Orange Chocolates", price: 5 },
  { id: 9, name: "Choko-Moko Chocolates", price: 5 },
  { id: 10, name: "E-clares", price: 5 },

  // Add more chocolates here
];

function Chocolates({ onSelect }) {
  const [selected, setSelected] = useState([]);

  const handleSelect = (chocolate) => {
    if (selected.includes(chocolate)) {
      setSelected(selected.filter((c) => c !== chocolate));
    } else if (selected.length < 8) {
      setSelected([...selected, chocolate]);
    } else {
        alert('Maximum 8 chocolates allowed in the pack.');
      }
  };

  return (
    <div>
      <marquee><h2>** Available Chocolates **</h2></marquee>
      <ul>
        {chocolatesData.map((chocolate) => (
          <li key={chocolate.id}>
            <label>
              <input
                type="checkbox"
                onChange={() => handleSelect(chocolate)}
                checked={selected.includes(chocolate)}
              />
              {chocolate.name} - $ {chocolate.price}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={() => onSelect(selected)}>Add to Pack</button>
    </div>
  );
}

export default Chocolates;
*/


import React, { useState } from 'react';

const Chocolate = ({ chocolate, onChocolateSelect }) => {
  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);
    onChocolateSelect(chocolate, newQuantity);
  };

  return (
    <div className="chocolate-item">
      <label>
        <input
          type="checkbox"
          onChange={() => onChocolateSelect(chocolate, quantity)}
        />
        {chocolate.name} (${chocolate.price.toFixed(2)})
      </label>
      <input
        type="number"
        min="0"
        max={8}
        value={quantity}
        onChange={handleQuantityChange}
      />
    </div>
  );
};

export default Chocolate;
