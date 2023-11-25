import React, { useState } from 'react';
import NightModeToggle from './NightModeToggle.js'
import Header from './Header.js';
import AddItemForm from './AddItemForm.js';
import ItemList from './ItemList.js';
import axios from 'axios';
// import mysql from 'mysql';


function App() {
  const [items, setItems] = useState([]);
  const [nightMode, setNightMode] = useState(false);

  const toggleNightMode = () => {
    setNightMode((prevNightMode) => !prevNightMode);
  };

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const removeItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };

  const getFoods = () => {
    axios.get("http://localhost:3001/foods").then((response) => {
      console.log(response);
    });
  }

  // async function fetchData() {
  //   const pool = mysql.createPool({
  //     host: 'localhost',
  //     user: 'root',
  //     password: 'password',
  //     database: 'foodtracker'
  //   }).promise()
    
  //   const result = await pool.query("SELECT * FROM foodtracker.foods")
    
  //   const listOfFoodItems = result[0];
  //   (console.log(listOfFoodItems))
  // };

  return (
    <div className='container'>
      <div className={`app-container ${nightMode ? 'night-mode' : ''}`}>
        
        <NightModeToggle toggleNightMode={toggleNightMode} nightMode={nightMode} />
        
        
        <Header />
        
        
        <AddItemForm className='search' addItem={addItem} />
        <ItemList className='but' items={items} removeItem={removeItem} />
        
      </div>
      <button onClick={getFoods}></button>
    </div>
  );
}

export default App;
