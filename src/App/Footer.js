import React, { useEffect } from "react";
import "../CSS/footer.css";
import { setMenuActions } from "../JS/toSectionButtons";
import logo from "../Images/logo.svg";
import facebook from "../Images/facebook.svg";
import instagram from "../Images/instagram.svg";
import twitter from "../Images/twitter.svg";
import treckmobil from "../Images/treckmobil.svg";
import treckmobilC1 from "../Images/treckmobil_semicircle1.svg";
import treckmobilC2 from "../Images/treckmobil_semicircle2.svg";

export default function Footer() {
  useEffect(() => {
    setMenuActions(".footer_buttons_container");
  }, []);

  return (
    <footer>
      <div className="footer_treckmobil">
        <div className="f_treckmobil_wrapper">
          <img id="treckmobil" src={treckmobil} alt="treckmobil" />
          <img src={treckmobilC1} alt="treckmobil1" />
        </div>
        <img src={treckmobilC2} alt="treckmobil2" />
      </div>
      <div className="footer_background"></div>
      <div className="footer_container width_container">
        <div className="footer_form_container">
          <div className="footer_text_outlined">
            We provide traffic management consultants so you get started
            quickly, contact us for a quote today!
          </div>
          <form className="footer_form" onSubmit={(ev) => ev.preventDefault()}>
            <span>Name</span>
            <input placeholder="Your name" />
            <span>Email address</span>
            <input placeholder="Your email address" />
            <button className="button_arrow_right">Get started</button>
          </form>
        </div>
        <div className="footer_nav_container">
          <nav className="top_nav">
            <img className="top_logo" src={logo} alt="logo" />
            <ul className="footer_buttons_container top_buttons_container">
              <li>
                <button data-section="about">About</button>
              </li>
              <li>
                <button data-section="howTo">How to</button>
              </li>
              <li>
                <button data-section="faqs">Faqs</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="footer_socials_container">
        <div className="footer_socials_wrapper width_container">
          <span>Copyright @ 2019</span>
          <span className="footer_socials">
            <a href="www.test.com">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="www.test.com">
              <img src={twitter} alt="twitter" />
            </a>
            <a href="www.test.com">
              <img src={instagram} alt="instagram" />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
