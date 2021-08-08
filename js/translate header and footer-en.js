const { i18next } = window;

i18next.init({
  lng: "ar", // if you're using a language detector, do not define the lng option

  resources: {
    en: {
      translation: {
        // Header

        home: "Home",
        about: "About",
        services: "Services",
        projects: "Projects",
        contacts: "Contact Us",
        language: "Language",
        linkat: "Quick Links",
        adress: "P.O Box 18378 Ajman.UAE",
        footabout: "About Al Hadar",

      },
    },
    ar: {
      translation: {
        // Header

        home: "الصفحة الرئيسية",
        about: "معلومات عنا",
        services: "خدماتنا",
        projects: "مشاريعنا",
        contacts: "تواصل معنا",
        jobs:"فرص العمل",
        language: "اللغة",
        linkat: "الروابط",
        adress: "صندوق بريد 18378 عجمان",
        footabout: "عن شركتنا",


        // Footer
      },
    },
  },
});
// initialized and ready to go!
// i18next is already initialized, because the translation resources where passed via init function
document.querySelectorAll(".nav-link")[0].innerHTML = i18next.t("home");
document.querySelectorAll(".nav-link")[1].innerHTML = i18next.t("about");
document.querySelectorAll(".nav-link")[2].innerHTML = i18next.t("services");
document.querySelectorAll(".nav-link")[3].innerHTML = i18next.t("projects");
document.querySelectorAll(".nav-link")[4].innerHTML = i18next.t("contacts");
document.querySelectorAll(".nav-link")[5].innerHTML = i18next.t("jobs");
document.querySelectorAll("#dropdown03")[0].innerHTML = i18next.t("language");


document.querySelector("#linkat").innerHTML = i18next.t("linkat");
document.querySelectorAll(".footmen")[0].innerHTML = i18next.t("home");
document.querySelectorAll(".footmen")[1].innerHTML = i18next.t("about");
document.querySelectorAll(".footmen")[2].innerHTML = i18next.t("services");
document.querySelectorAll(".footmen")[3].innerHTML = i18next.t("projects");
document.querySelectorAll(".footmen")[4].innerHTML = i18next.t("contacts");
document.querySelectorAll(".footmen")[5].innerHTML = i18next.t("jobs");
document.querySelector("#footabout").innerHTML = i18next.t("footabout");
document.querySelector("#adress").innerHTML = i18next.t("adress");



