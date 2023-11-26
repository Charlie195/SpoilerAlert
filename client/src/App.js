import React, { useState } from 'react';
import NightModeToggle from './NightModeToggle.js'
import Header from './Header.js';
import AddItemForm from './AddItemForm.js';
import ItemList from './ItemList.js';
import spoilerAlertWhiteLogo from "./spoilerAlertWhiteLogo.png";
import spoilerAlertBlackLogo from "./spoilerAlertBlackLogo.png";

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

  return (
    <div id="justforhover" className={`container ${nightMode ? 'night-mode' : ''}`}>
      
      <div className={`app-container ${nightMode ? 'night-mode' : ''}`}>
        <NightModeToggle toggleNightMode={toggleNightMode} nightMode={nightMode} />
        <Header nightMode={nightMode} />
        
        
        <AddItemForm className='search' addItem={addItem} />
        <ItemList className='but' items={items} removeItem={removeItem} />
        
      </div>
    </div>
  );
}

export default App;
