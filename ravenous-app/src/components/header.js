import React from 'react';
// import './Header.css'; // You can create a separate CSS file for styling if needed

const Header = ({ text }) => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-text">Title:{text}</h1>
      </div>
    </header>
  );
};

export default Header;