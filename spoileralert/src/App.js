
import React, { useState } from 'react';

import Header from './Header.js';
import AddItemForm from './AddItemForm.js';
import ItemList from './ItemList.js';

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const removeItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };

  return (
    <div>
      <Header />
      <AddItemForm addItem={addItem} />
      <ItemList items={items} removeItem={removeItem} />
    </div>
  );
};

export default App;
