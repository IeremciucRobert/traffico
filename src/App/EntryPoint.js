import React, { useEffect } from "react";
import Top from "./Top";
import "../CSS/general.css";
import Main from "./Main";
import Footer from "./Footer";

export default function EntryPoint() {
  useEffect(() => {
    let html = document.documentElement;
    let mobel = document.querySelector("#mobel");
    let aboutWrapper = document.querySelector(".about_right");
    let about = document.querySelector("#about_image");
    let applyWrapper = document.querySelector(".apply_left");
    let apply = document.querySelector("#apply_image");
    let footer = document.querySelector("footer");
    let treckmobilWrapper = document.querySelector(".footer_treckmobil");
    let treckmobil = document.querySelector("#treckmobil");

    about.style.transform = `translateX(${
      window.innerWidth - about.offsetLeft
    }px)`;
    apply.style.transform = `translateX(-${
      apply.offsetLeft + apply.clientWidth
    }px)`;

    setTimeout(() => {
      about.style.transition = "all 700ms linear";
      apply.style.transition = "all 700ms linear";
    }, 0);

    document.addEventListener("scroll", function (ev) {
      slideElements();
    });

    slideElements();

    function slideElements() {
      let mobelContainer = document.querySelector(".mobel_container");
      let checkMobelClass = !mobel.classList.contains("mobel_drive");
      let top = html.scrollTop + html.clientHeight;

      if (
        top > mobelContainer.offsetTop + mobelContainer.clientHeight &&
        checkMobelClass
      ) {
        mobel.classList.add("mobel_drive");
      }

      if (top > aboutWrapper.offsetTop + aboutWrapper.clientHeight) {
        about.style.transform = "translateX(0)";
      }

      if (top > applyWrapper.offsetTop + applyWrapper.clientHeight) {
        apply.style.transform = "translateX(0)";
      }
      if (
        top >
        footer.offsetTop +
          (treckmobilWrapper.clientHeight + treckmobilWrapper.offsetTop)
      ) {
        treckmobil.style.transform = "translateX(0)";
      }
    }
  }, []);

  return (
    <>
      <Top />
      <Main />
      <Footer />
    </>
  );
}
