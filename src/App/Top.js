import React from "react";
import "../CSS/top.css";
import logo from "../Images/logo.svg";
import mobel from "../Images/mobel.svg";

export default function Top() {
  return (
    <>
      <header className="top">
        <div className="width_container">
          <nav className="top_nav">
            <img className="top_logo" src={logo} />
            <ul className="top_buttons_container">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">How to</a>
              </li>
              <li>
                <a href="#">Faqs</a>
              </li>
              <li className="top_button_active">
                <a href="#">Contact us</a>
              </li>
            </ul>
          </nav>
          <h3 className="top_title">Your awesome traffic permit consultant.</h3>
          <button className="top_button_start button_arrow_right">
            Get Started
          </button>
        </div>
      </header>
      <div className="mobel_container">
        <img src={mobel} />
      </div>
    </>
  );
}
