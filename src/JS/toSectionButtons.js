export function setMenuActions(wrapper) {
  let ul = document.querySelector(wrapper);

  ul.addEventListener("click", function (ev) {
    if (!ev.target.closest("button")) return;
    if (!ul.contains(ev.target)) return;

    let target = ev.target.closest("button");

    switch (target.dataset.section) {
      case "about":
        setTop(".about_container");
        return;
      case "howTo":
        setTop(".apply_container");
        return;
      case "faqs":
        setTop(".FAQ_section");
        return;
      case "contactUs":
        setFooterTop();
        return;
      default:
        return;
    }
  });

  function setTop(elem) {
    let element = document.querySelector(elem);
    let top =
      element.offsetTop - parseInt(window.getComputedStyle(element).marginTop);

    window.scrollTo(0, top);
  }
  function setFooterTop() {
    let footer = document.querySelector("footer");

    window.scrollTo(0, footer.offsetTop - 60);
  }
}
