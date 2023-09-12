// import React from 'react';

// function SelectedChocolates({ selectedChocolates }) {
//   const totalPrice = selectedChocolates.reduce(
//     (total, chocolate) => total + chocolate.price,
//     0
//   );

//   return (
//     <div>
//       <h2>Selected Chocolates here. . . .</h2>
//       <ul>
//         {selectedChocolates.map((chocolate) => (
//           <li key={chocolate.id}>
//             {chocolate.name} :- $ {chocolate.price}
//           </li>
//         ))}
//       </ul>
//       <b><p>Total Price: $ {totalPrice}</p></b>
//     </div>
//   );
// }

// export default SelectedChocolates;

import React, { useState } from 'react';
import Chocolate from './Chocolate';


const chocolatesData = [
  { name: 'Milk Chocolate', price: 2 },
  { name: 'Dark Chocolate', price: 3 },
  { name: 'White Chocolate', price: 2.5 },
  { name: 'Green Chocolate', price: 4},
  { name: 'Blue Chocolate', price: 3.25},
  { name: 'Pink Chocolate', price: 3},
  { name: 'Pinkchocolate', price: 8},
  { name: 'Burry', price: 19},
  { name: 'Candy', price: 19.5},
  { name: 'Eclair', price:25}
  // Add more chocolates as needed
];

const CustomPack = () => {
  const [selectedChocolates, setSelectedChocolates] = useState([]);

  const handleChocolateSelect = (chocolate, quantity) => {
    // Check if the chocolate is already in the selectedChocolates array
    const existingChocolateIndex = selectedChocolates.findIndex(
      (c) => c.name === chocolate.name
    );

    if (quantity === 0) {
      // Remove the chocolate if the quantity is zero
      if (existingChocolateIndex !== -1) {
        setSelectedChocolates((prevSelected) =>
          prevSelected.filter((c) => c.name !== chocolate.name)
        );
      }
    } else {
      // Update or add the chocolate to the selectedChocolates array
      const updatedChocolates = [...selectedChocolates];

      if (existingChocolateIndex !== -1) {
        updatedChocolates[existingChocolateIndex].quantity = quantity;
      } else {
        updatedChocolates.push({ ...chocolate, quantity });
      }

      setSelectedChocolates(updatedChocolates);
    }
  };

  const calculateTotalPrice = () => {
    return selectedChocolates.reduce(
      (total, chocolate) => total + chocolate.price * chocolate.quantity,
      0
    );
  };

  return (
    <div className="custom-pack">
      <marquee><h1 className="custom-pack-title">Build Your Custom Chocolate Pack</h1></marquee>
      <div className="chocolates-container">
        {chocolatesData.map((chocolate, index) => (
          <Chocolate
            key={index}
            chocolate={chocolate}
            onChocolateSelect={handleChocolateSelect}
          />
        ))}
      </div>
      <div className="custom-pack-summary">
        <h2>Custom Pack Summary</h2>
        <ul>
          {selectedChocolates.map((chocolate, index) => (
            <li key={index}>
              {chocolate.name} x {chocolate.quantity}
            </li>
          ))}
        </ul>
        <b><p>Total Price: ${calculateTotalPrice().toFixed(2)}</p></b>
      </div>
    </div>
  );
};

export default CustomPack;
