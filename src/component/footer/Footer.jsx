import React from "react";
import "./footer.css";
import Logo from "../../asset/logo-white.svg";
function Footer() {
  return (
    <div className="footer-container">
      <div className="inner-container">
        <img src={Logo} alt="" />
        <div>
          <h4>Address</h4>
          <p>2nd Floor, 10011 82 Ave, Edmonton, AB T6E 1Z2 (780) 429 4242</p>
        </div>
        <div>
          <h4>Hours</h4>
          <ul>
            <li>Monday: 9am-3pm</li>
            <li>Tuesday: 9am-7pm</li>
            <li>Wednesday: 10am-8pm</li>
            <li>Thursday: 11am-9pm</li>
            <li>Friday: 9am-7pm</li>
            <li>Saturday: 10am-4pm</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#">Staff</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Journal</a>
            </li>
            <li>
              <a href="#">Policies</a>
            </li>
          </ul>
        </div>
        <div className="newsletter-container">
          <h4>JOIN OUR NEWSLETTER</h4>
          <p>
            Join up and get notified about new products, updates and special
            offers. You can unsubscribe at any time.
          </p>
          <div className="form-container">
            <input type="text" placeholder="Enter your Email"/>
            <button>
              <i class="fas fa-arrow-right"></i>
            </button>
          </div>
          <div>
            <button className="icon-button" style={{marginRight: "20px"}}>
              <i className="fab fa-facebook-f"></i>
            </button>
            <button className="icon-button">
              <i className="fab fa-instagram"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
