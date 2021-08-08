// const {i18next} = window;
// console.log(i18next)

i18next.init({
  // lng: 'ar', // if you're using a language detector, do not define the lng option

  resources: {
    en: {
      translation: {
        titlepage: "About the Service",
        simpdesc: "Simple Description",
        titlepage: "About the Service",
        titlepage: "About the Service",
        titlepage: "About the Service",
        titlepage: "About the Service",


        // About Us Page
      },
    },
    ar: {
      translation: {
        servicehead: "خدماتنا",
      },
    },
  },
});
// initialized and ready to go!
// i18next is already initialized, because the translation resources where passed via init function

document.querySelector("#titlepage").innerHTML = i18next.t("titlepage");
document.querySelector("#simpdesc").innerHTML = i18next.t("simpdesc");
document.querySelector("#titlepage").innerHTML = i18next.t("titlepage");
document.querySelector("#titlepage").innerHTML = i18next.t("titlepage");
document.querySelector("#titlepage").innerHTML = i18next.t("titlepage");
document.querySelector("#titlepage").innerHTML = i18next.t("titlepage");
document.querySelector("#titlepage").innerHTML = i18next.t("titlepage");

