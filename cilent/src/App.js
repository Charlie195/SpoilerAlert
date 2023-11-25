import React, { useState } from 'react';
import NightModeToggle from './NightModeToggle.js'
import Header from './Header.js';
import AddItemForm from './AddItemForm.js';
import ItemList from './ItemList.js';
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
    <div className={`container ${nightMode ? 'night-mode' : ''}`}>
      <NightModeToggle toggleNightMode={toggleNightMode} nightMode={nightMode} />
      <div className={`app-container ${nightMode ? 'night-mode' : ''}`}>
        
        
        
        
        <Header />
        
        
        <AddItemForm className='search' addItem={addItem} />
        <ItemList className='but' items={items} removeItem={removeItem} />
        
      </div>
    </div>
  );
}

export default App;
