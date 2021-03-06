import React, { useEffect } from "react";
import "../CSS/top.css";
import logo from "../Images/logo.svg";
import mobel from "../Images/mobel.svg";
import { setMenuActions } from "../JS/toSectionButtons";

export default function Top() {
  useEffect(() => {
    let button = document.querySelector(".top_hamburger");
    let menu = document.querySelector(".top_buttons_mobile");

    function handleClick() {
      this.classList.toggle("open");
      menu.classList.toggle("top_buttons_mobile_show");
    }

    function closeMobileMenu(ev) {
      if (
        !ev.target.closest(".top_hamburger") &&
        !ev.target.closest(".top_buttons_mobile")
      ) {
        let menu = document.querySelector(".top_buttons_mobile");
        let button = document.querySelector(".top_hamburger");

        menu.classList.remove("top_buttons_mobile_show");
        button.classList.remove("open");
      }
    }

    button.addEventListener("click", handleClick);
    document.addEventListener("click", closeMobileMenu);

    return () => {
      button.removeEventListener("click", handleClick);
      document.removeEventListener("click", closeMobileMenu);
    };
  });

  useEffect(() => {
    setMenuActions(".top_buttons_container");
  }, []);

  return (
    <>
      <header className="top">
        <div className="width_container">
          <nav className="top_nav">
            <div className="top_logo_wrapper">
              <img className="top_logo" src={logo} alt="logo" />
            </div>
            <ul className="top_buttons_container">
              <li>
                <button data-section="about">About</button>
              </li>
              <li>
                <button data-section="howTo">How to</button>
              </li>
              <li>
                <button data-section="faqs">Faqs</button>
              </li>
              <li className="top_button_active">
                <button data-section="contactUs">Contact us</button>
              </li>
            </ul>
            <button className="top_hamburger">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
            <ul className="top_buttons_mobile">
              <li>
                <a href="www.test.com">About</a>
              </li>
              <li>
                <a href="www.test.com">How to</a>
              </li>
              <li>
                <a href="www.test.com">Faqs</a>
              </li>
              <li className="top_button_mobile_active">
                <a href="www.test.com">Contact us</a>
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
        <div className="mobel_wrapper">
          <img id="mobel" src={mobel} alt="mobel" />
        </div>
      </div>
    </>
  );
}
