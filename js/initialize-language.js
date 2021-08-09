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
  window.location.reload();
}

if (currentLanguage == "ar") {
  const body = document.querySelector("body");
  body.setAttribute("dir", "rtl");
  const headerTopInfo = document.querySelector(".header-top-info").parentNode;
  headerTopInfo.classList.add("text-lg-left", "text-md-left");
  headerTopInfo.classList.remove("text-lg-right", "text-md-right");
  const email = document.querySelector(
    "body > header > div > div > div > div.col-lg-10.col-md-8.text-center.text-lg-left.text-md-left > div > a > span"
  );

  email.style.marginRight = "10px";
}
