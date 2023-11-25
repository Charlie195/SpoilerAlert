import React from 'react';

const ItemList = ({ items, removeItem }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <div>
            <strong>{item.name}</strong>
            <p>Expiry Date: {item.expiryDate}</p>
          </div>
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;