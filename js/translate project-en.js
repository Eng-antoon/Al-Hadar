// const {i18next} = window;
// console.log(i18next)

i18next.init({
  lng: currentLanguage, // if you're using a language detector, do not define the lng option

  resources: {
    en: {
      translation: {
        titlesmall: "On Construction Projects",

        head1: "Projects",
        home: "Home",
        projecttitle: "Projects",
        worktitle: "Our work",
        para: "We have so many projects, so you can take a look",

        // About Us Page
      },
    },
    ar: {
      translation: {
        titlesmall: "مشاريع البناء",

        head1: "المشاريع",
        home: "الصفحة الرئيسية",
        projecttitle: "المشاريع",
        worktitle: "عن عملنا",
        para: "لدينا العديد من المشاريع ، لذا يمكنك إلقاء نظرة",
      },
    },
  },
});
// initialized and ready to go!
// i18next is already initialized, because the translation resources where passed via init function

document.querySelector("#titlesmall").innerHTML = i18next.t("titlesmall");

document.querySelector("#head1").innerHTML = i18next.t("head1");
document.querySelector("#home").innerHTML = i18next.t("home");
document.querySelector("#projecttitle").innerHTML = i18next.t("projecttitle");
document.querySelector("#worktitle").innerHTML = i18next.t("worktitle");
document.querySelector("#para").innerHTML = i18next.t("para");
