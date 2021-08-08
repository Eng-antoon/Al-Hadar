console.log(i18next);

i18next.init({
  lng: "en", // if you're using a language detector, do not define the lng option

  resources: {
    en: {
      translation: {
        titlehead: "About the project",
        locationhead: "The Location of the Project",
        desc: "Simple Description",
      },
    },
    ar: {
      translation: {
        titlehead: "حول المشروع",
        locationhead: "موقع المشروع",
        desc: "وصف بسيط عن المشروع",

      },
    },
  },
});
// initialized and ready to go!
// i18next is already initialized, because the translation resources where passed via init function
document.querySelector("#titlehead").innerHTML = i18next.t("titlehead");
document.querySelector("#locationhead").innerHTML = i18next.t("locationhead");
document.querySelector("#desc").innerHTML = i18next.t("desc");

