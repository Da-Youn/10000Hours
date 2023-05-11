import React from 'react';
import titleLogo from '../../assets/img/title.png';
import '../../assets/css/Header.css';

function Header() {
  return (
    <div className="title">
      <img className="title-img" src={titleLogo} alt="logo" />
    </div>
  );
}

export default Header;
