import React from "react";
import "./mainSection.css";
import Logo from '../../asset/logo-white.svg'
function MainSection() {
  return (
    <div className="main-section">
      <div className="main-section-content">
        <img src={Logo} alt="" />
        <h1>BEAUTY WITH A CONSCIENCE</h1>
      </div>
    </div>
  );
}

export default MainSection;
