import React, { useState } from 'react';
import axios from "axios";

const AddItemForm = ({ addItem }) => {
  const [itemName, setItemName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  const addFood = () => {
    axios.post("http://localhost:3001/create", {
      itemName: itemName,
      expiryDate: expiryDate,
      dateNow: Date.now()
    }).then(() => {
      if (itemName.trim() !== '' && expiryDate.trim() !== '') {
        addItem({ id: Date.now(), name: itemName, expiryDate });
        setItemName('');
        setExpiryDate('');
      }
    });
  } 

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // Get the current date and format it as "YYYY-MM-DD"
  const currentDate = new Date();
  const formattedCurrentDate = currentDate.toISOString().split('T')[0];

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter item name"
        value={itemName}
        onChange={(event) => {
          setItemName(event.target.value);
        }}
      />
      <input
        className='dateInput'
        type="date"
        placeholder="Choose expiry date"
        value={expiryDate}
        onChange={(event) => {
          setExpiryDate(event.target.value);
        }}
        min={formattedCurrentDate}
      />
      <button onClick={addFood}>Add Item</button>
    </form>
  );
};

export default AddItemForm;