import React, { useState } from "react";
import "./header.css";
function Header() {
  const [navBar, setNavbar] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const changeNavbarBG = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  const togglemenufunc = (e) => {
    e.preventDefault();
    setToggleMenu(!toggleMenu);
  };
  window.addEventListener("scroll", changeNavbarBG);
  return (
    <header className={navBar ? "header active" : "header"}>
      <div>
        <div
          className="hamburger-menu-container"
          onClick={(e) => togglemenufunc(e)}
        >
          <div className={navBar ? "bar1 active" : "bar1"}></div>
          <div className={navBar ? "bar2 active" : "bar2"}></div>
          <div className={navBar ? "bar3 active" : "bar3"}></div>
        </div>
        <div className={toggleMenu ? "fs-container active" : "fs-container"}>
          <div
            style={{ paddingTop: "50px", marginLeft: "50px" }}
            onClick={(e) => togglemenufunc(e)}
          >
            <div className="fs-bar1"></div>
            <div className="fs-bar2"></div>
            <div className="fs-bar3"></div>
          </div>
          <div className="menu">
            <ul>
              <li>
                <a href="#">STAFF</a>
              </li>
              <li>
                <a href="#">SERVICES</a>
              </li>
              <li>
                <a href="#">PRODUCTS</a>
              </li>
              <li>
                <a href="#">CONTACT</a>
              </li>
              <li>
                <a href="#">JOURNAL</a>
              </li>
              <li>
                <a href="#">POLICIES</a>
              </li>
            </ul>
          </div>
          <div></div>
        </div>

        <h1>B</h1>
      </div>
      <div>
        <button className={navBar ? "icon-button active" : "icon-button"}>
          <i className="fab fa-facebook-f"></i>
        </button>
        <button className={navBar ? "icon-button active" : "icon-button"}>
          <i className="fab fa-instagram"></i>
        </button>
        <button className="globalbutton">Request an Appointment</button>
      </div>
    </header>
  );
}

export default Header;
