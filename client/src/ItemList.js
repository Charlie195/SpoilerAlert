import React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";
import { processItems, sortByRawTimeLeft } from "./processData";


const ItemList = ({ items, removeItem }) => {
  const [foodData, setFoodData] = useState(null);

  const deleteFood = (_id) => {
    axios.delete(`http://localhost:3001/delete/${_id}`).then((response) => {
      setFoodData(
        foodData.filter((val) => {
          return val._id !== _id;
        })
      );
    });
  };



  const displayTimeLeft = (time) => {
    if (time < 0) {
      return "NONE"
    }
    return Math.ceil(time / 86400000) + " days";
  }

  useEffect(() => {
    axios.get("http://localhost:3001/foods")
    .then((response) => {
      setFoodData(sortByRawTimeLeft(processItems(response.data)));
      // if (foodData !== null) {
      //   console.log(processItems(foodData));
      // }
      // console.log(processItems(test));
      // console.log(sortByRawTimeLeft(processItems(foodData)).id);
    });

    // const intervalId = setInterval(() => {
    //   setFoodData(foodData);
    // }, 5 * 1000); 

    // // setFoodData(foodData);

    // return () => clearInterval(intervalId);
  }, [items]);

  return (
    <div className="itemList">
      {foodData && <ul>
        <h2 >Expired</h2>
        {foodData.filter((food) => {
          return food.state === "Expired";
        }).map((foodData) => (
          <li className="expired" key={foodData._id} style={{color: getGradientColor(foodData.warningPercentage)}}>
            <div>
              <strong className='foodName'>{foodData.itemName}</strong>
              <p>Time Left: {displayTimeLeft(foodData.rawTimeLeft)}</p>
            </div>
            <button onClick={() => deleteFood(foodData._id)}>Remove</button>
          </li>
        ))}
        <h2>Warning</h2>
        {foodData.filter((food) => {
          return food.state === "Warning";
        }).map((foodData) => (
          <li className="warning" key={foodData._id} style={{color: getGradientColor(foodData.warningPercentage)}}> 
            <div>
              <strong className='foodName'>{foodData.itemName}</strong>
              <p>Time Left: {displayTimeLeft(foodData.rawTimeLeft)}</p>
            </div>
            <button onClick={() => deleteFood(foodData._id)}>Remove</button>
          </li>
        ))}
        <h2>Safe</h2>
        {foodData.filter((food) => {
          return food.state === "Safe";
        }).map((foodData) => (
          <li className="safe" key={foodData._id} style={{color: getGradientColor(foodData.warningPercentage)}}> 
            <div>
              <strong className='foodName'>{foodData.itemName}</strong>
              <p>Time Left: {displayTimeLeft(foodData.rawTimeLeft)}</p>
            </div>
            <button onClick={() => deleteFood(foodData._id)}>Remove</button>
          </li>
        ))}
      </ul>}
    </div>
  );
};

function getGradientColor(percentage) {
  const red = 255 - Math.round((255-69) * (percentage / 100));
  const green = 27 + Math.round((202-27) * (percentage / 100));
  const blue = 107 + Math.round((255-107) * (percentage / 100));
  return `rgb(${red}, ${green}, ${blue})`;
}


export default ItemList;