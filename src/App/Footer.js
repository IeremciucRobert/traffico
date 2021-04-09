import React from "react";
import "../CSS/footer.css";
import logo from "../Images/logo.svg";
import facebook from "../Images/facebook.svg";
import instagram from "../Images/instagram.svg";
import twitter from "../Images/twitter.svg";
import treckmobil from "../Images/treckmobil.svg";

export default function Footer() {
  return (
    <footer>
      <div className="footer_treckmobil">
        <img src={treckmobil} />
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
            <img className="top_logo" src={logo} />
            <ul className="footer_buttons_container top_buttons_container">
              <li>
                <a>About</a>
              </li>
              <li>
                <a>How to</a>
              </li>
              <li>
                <a>Faqs</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="footer_socials_container">
        <div className="footer_socials_wrapper width_container">
          <span>Copyright @ 2019</span>
          <span className="footer_socials">
            <a>
              <img src={facebook} />
            </a>
            <a>
              <img src={twitter} />
            </a>
            <a>
              <img src={instagram} />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
