// NightModeToggle.js

import React from 'react';

const NightModeToggle = ({ toggleNightMode, nightMode }) => {
  return (
    <label>
      <input type="checkbox" checked={nightMode} onChange={toggleNightMode} />
      Night Mode
    </label>
  );
};

export default NightModeToggle;
