import React, { useState } from "react";
import "../CSS/main.css";
import aboutImage from "../Images/about.svg";
import applyImage from "../Images/apply.svg";
import FAQ from "../Images/FAQ.svg";
import { texts } from "../JS/menu_text.js";

export default function Main() {
  const [selected, setSelected] = useState(null);

  function select(id) {
    id === selected ? setSelected(null) : setSelected(id);
  }

  const [loaded, setLoaded] = useState(5);

  const load = () => {
    if (loaded > texts.length) return;

    setLoaded((prev) => prev + 2);
  };

  return (
    <main>
      <About />
      <Apply />

      <section className="FAQ_section">
        <div className="FAQ_background"></div>
        <div className="FAQ_container width_container">
          <div className="FAQ_top">
            <div>
              <h1 className="main_title">FAQ</h1>
              <h2 className="FAQ_secondTitle">
                Questions and Answers on Professional Traffic Permits:
              </h2>
            </div>
            <div>
              <img src={FAQ} />
            </div>
          </div>
          <div className="FAQ_body">
            <ul className="FAQ_buttons_container">
              {texts.map((text, index) => {
                if (index > loaded) return;
                const checkSelected = text.id === selected;

                return (
                  <li key={text.id}>
                    <button
                      className="FAQ_button"
                      onClick={() => select(text.id)}
                    >
                      <span className="FAQ_button_text">{text.button}</span>
                      <span
                        className={
                          checkSelected
                            ? "FAQ_button_sign"
                            : "FAQ_button_sign FAQ_button_sign_plus"
                        }
                      ></span>
                    </button>
                    <p
                      className={
                        checkSelected ? "FAQ_text FAQ_text_show" : "FAQ_text"
                      }
                    >
                      {text.expanded}
                    </p>
                  </li>
                );
              })}
              <li className="FAQ_loadLI">
                <button className="FAQ_button FAQ_loadMore" onClick={load}>
                  <span className="FAQ_button_text">Load more</span>
                  <span className="FAQ_button_sign FAQ_button_sign_plus"></span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

function About() {
  return (
    <section className="about_container width_container">
      <div className="about_left">
        <h1 className="main_title">About us</h1>
        <p className="about_text main_text">
          The occupational traffic permit is one of the most important things in
          the company when carrying out freight transport. In fact, it is a
          prerequisite for doing business traffic at all.
        </p>
        <div className="text_outlined_container">
          <p className="text_outlined">
            How do you do when you need to obtain a commercial traffic permit
            for freight transport to your business?
          </p>
        </div>
      </div>
      <div className="about_right">
        <img src={aboutImage} />
      </div>
    </section>
  );
}

function Apply() {
  return (
    <section className="apply_container width_container">
      <div className="apply_left">
        <img src={applyImage} />
      </div>
      <div className="">
        <h1 className="main_title">How to apply</h1>
        <p className="apply_text main_text">
          When applying for a traffic permit, there are certain requirements
          that you must meet that are included in the examination: requirements
          for professional knowledge, solid establishment, good reputation and
          financial resources. Important to remember is to confirm your
          application for a traffic permit by the company's company signer or
          CEO.
        </p>
      </div>
    </section>
  );
}
