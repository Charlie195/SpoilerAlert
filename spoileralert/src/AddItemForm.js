// AddItemForm.js

import React, { useState } from 'react';

const AddItemForm = ({ addItem }) => {
  const [itemName, setItemName] = useState('');

  const handleInputChange = (e) => {
    setItemName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (itemName.trim() !== '') {
      addItem({ id: Date.now(), name: itemName });
      setItemName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter item name"
        value={itemName}
        onChange={handleInputChange}
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItemForm;
