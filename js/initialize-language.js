if (!localStorage.getItem("lang")) localStorage.setItem("lang", "en");

const currentLanguage = localStorage.getItem("lang");

const english = document.querySelector(
  "#navbarsExample09 > form > ul > li:nth-child(1) > a"
);
const arabic = document.querySelector(
  "#navbarsExample09 > form > ul > li:nth-child(2) > a"
);

english.style.cursor = "pointer";
arabic.style.cursor = "pointer";

english.addEventListener("click", () => changeLanguage("en"));
arabic.addEventListener("click", () => changeLanguage("ar"));

function changeLanguage(lang) {
  if (lang == currentLanguage) return;
  localStorage.setItem("lang", lang);
  setTimeout(() => {
    window.location.reload();
  }, 100);
}

if (currentLanguage == "ar") {
  const body = document.querySelector("body");
  body.setAttribute("dir", "rtl");

  // const navBar = document.querySelector(
  //   "ul.navbar-nav.navbar-nav-scroll.animate__animated.animate__heartBeat"
  // );
  // navBar.classList.remove("ms-auto");
  // navBar.classList.add("me-auto");

  // const wavyAbedousGroup = document.querySelector(".wavy");
  // wavyAbedousGroup?.setAttribute("dir", "ltr");

  // const pageTitle = document.querySelector("title");
  // pageTitle.innerText = "ابيدوس";

  // const footerTeleNumber = document.querySelectorAll(".p-small")[1];
  // footerTeleNumber.setAttribute("style", "direction: ltr;text-align: right;");
}
