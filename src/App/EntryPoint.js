import React, { useEffect } from "react";
import Top from "./Top";
import "../CSS/general.css";
import Main from "./Main";
import Footer from "./Footer";

export default function EntryPoint() {
  useEffect(() => {
    document.addEventListener("click", function (ev) {
      if (ev.target.closest(".FAQ_buttons_container")) return;
      if (ev.target.closest(".top_hamburger")) return;
      if (!ev.target.closest("a") && !ev.target.closest("button")) return;

      alert("Work in progress");
    });
  });

  return (
    <>
      <Top />
      <Main />
      <Footer />
    </>
  );
}
