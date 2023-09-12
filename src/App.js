// import React, { useState } from 'react';
// import './App.css';
// import Chocolates from './components/Chocolates';
// import SelectedChocolates from './components/CustomPack';

// function App() {
//   const [selectedChocolates, setSelectedChocolates] = useState([]);

//   const addToPack = (chocolates) => {
//     setSelectedChocolates(chocolates);
//   };

//   return (
//     <div className="App">
//       <h1>Custom Chocolate Pack</h1>
//       <Chocolates onSelect={addToPack} />
//       <SelectedChocolates selectedChocolates={selectedChocolates} />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import './App.css';
import CustomPack from './components/CustomPack';

function App() {
  return (
    <div className="App">
      <CustomPack />
    </div>
  );
}

export default App;
















































// // import logo from './logo.svg';
// /*
// import "./App.css";
// import JSONDATA from "./MOCK_DATA.json";
// import { useState } from "react";

// function App() {
//   const [searchName, setSearchName] = useState("");

//   return (
//     <div className="App">
//       <input
//         type="text"
//         placeholder="Search.."
//         onChange={(event) => {
//           setSearchName(event.target.value);
//         }}
//       />
//       {JSONDATA.filter((val) => {
//         if (searchName === "") {
//           return val;
//         } else if (
//           val.first_name.toLowerCase().includes(searchName.toLowerCase())
//         ) {
//           return val;
//         }
//       }).map((val, key) => {
//         return (
//           <div className="user" key={key}>
//             <p>{val.first_name}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default App;
// */