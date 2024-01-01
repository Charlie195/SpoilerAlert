import React from 'react';
import spoilerAlertWhiteLogo from "./spoilerAlertWhiteLogo.png";
import spoilerAlertBlackLogo from "./spoilerAlertBlackLogo.png";

const Header = ({ nightMode }) => {
  const logoSrc = nightMode ? spoilerAlertBlackLogo : spoilerAlertWhiteLogo;

  return (
    <div className="header">
      <h1>SpoilerAlert Header</h1>
      <img src={logoSrc} alt={nightMode ? 'black logo' : 'white logo'} />
    </div>
  );
};

export default Header;