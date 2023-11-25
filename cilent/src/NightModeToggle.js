// NightModeToggle.js

import React from 'react';

const NightModeToggle = ({ toggleNightMode, nightMode }) => {
  return (
    <button className={`night-mode-toggle ${nightMode ? 'night-mode' : ''}`} onClick={toggleNightMode}>
      {nightMode ? 'Night Mode Off' : 'Night Mode On'}
    </button>
  );
};

export default NightModeToggle;