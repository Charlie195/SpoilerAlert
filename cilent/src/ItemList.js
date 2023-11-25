import React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";


const ItemList = ({ items, removeItem }) => {
  // const [addButtonPressed, setAddButtonPressed] = useState(false);
  // const [deleteButtonPressed, setDeleteButtonPressed] = useState(false);
  const [foodData, setFoodData] = useState(null);

  const deleteFood = (id) => {
    axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setFoodData(
        foodData.filter((val) => {
          return val.id !== id;
        })
      );
    });
  };

  useEffect(() => {
    axios.get("http://localhost:3001/foods").then((response) => {
      setFoodData(response.data);
      console.log("Hey");
    });
  }, [items]);

  return (
    <div>
      {foodData && <ul>
        {foodData.map((foodData) => (
          <li key={foodData.id}>
            <div>
              <strong>{foodData.itemName}</strong>
              <p>Expiry Date: {foodData.expiryDate}</p>
            </div>
            <button onClick={() => deleteFood(foodData.id)}>Remove</button>
          </li>
        ))}
      </ul>}
    </div>
  );
};

export default ItemList;