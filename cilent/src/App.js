import axios from "axios";
import { useState } from "react";

function App() {
  const [food, setFood] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  const addFood = () => {
    axios.post("http://localhost:3001/create", {
      food: food,
      expiryDate: expiryDate
    }).then(() => {
      console.log("success");
    });
  } 

  return (
    <div className="App">
      <label>Food:</label>
        <input
          type="text"
          onChange={(event) => {
            setFood(event.target.value);
          }}
        />
        <label>Expiry Date:</label>
        <input
          type="text"
          onChange={(event) => {
            setExpiryDate(event.target.value);
          }}
        />
      <button onClick={addFood}>Add Food</button>
    </div>
  );
}

export default App;
