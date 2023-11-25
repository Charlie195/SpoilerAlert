import React, { useState } from 'react';

const AddItemForm = ({ addItem }) => {
  const [itemName, setItemName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  const handleInputChange = (e) => {
    setItemName(e.target.value);
  };

  const handleDateChange = (e) => {
    setExpiryDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (itemName.trim() !== '' && expiryDate.trim() !== '') {
      addItem({ id: Date.now(), name: itemName, expiryDate });
      setItemName('');
      setExpiryDate('');
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
      <input
        type="date"
        placeholder="Choose expiry date"
        value={expiryDate}
        onChange={handleDateChange}
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItemForm;