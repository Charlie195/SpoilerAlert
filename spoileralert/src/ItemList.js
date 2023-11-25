// ItemList.js

import React from 'react';

const ItemList = ({ items, removeItem }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name}
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
