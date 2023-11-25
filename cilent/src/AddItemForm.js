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
      console.log("success");
    });
  } 

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (itemName.trim() !== '' && expiryDate.trim() !== '') {
      addItem({ id: Date.now(), name: itemName, expiryDate });
      addFood(); // Moved inside the validation check
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
        onChange={(event) => {
          setItemName(event.target.value);
        }}
      />
      <input
        type="date"
        placeholder="Choose expiry date"
        value={expiryDate}
        onChange={(event) => {
          setExpiryDate(event.target.value);
        }}
      />
      <button onClick={addFood}>Add Item</button>
    </form>
  );
};

export default AddItemForm;