// const { i18next } = window;

// i18next.languages = ["ar", "en"];
// console.log(i18next);
// const currentLanguage = localStorage.getItem("lang");

i18next.init({
  lng: "en", // if you're using a language detector, do not define the lng option

  resources: {
    en: {
      translation: {
        head1: "Al Hadar Company",
        heading1: "We strive to fulfill",
        heading2: "our customer expectations.",
        why: "Why Al-Hadar Company !!",
        para1: "Al Hader provides services when you need it, where you need it, by timely and by qualified and experienced technical staff",
        whatwedo: "What we do..",
        list1: "Resedintal and Commercial Buildings",
        list2: "Markets Buildings",
        list3: "Villas and Extentions",
        list4: "Warehouses",
        knowmore: "Know more about us",

        
        // About Us Page
      },
    },
    ar: {
      translation: {
        head1: "شركة الحضر",
        heading1: "نحن نسعى جاهدين لتحقيق توقعات عملائنا.",
        heading2: "",
        why: "لماذا شركة الحضر !!",
        para1: "تقدم شركة الحضر الخدمات عندما تحتاجها ، وحيث تحتاجها ، وفي الوقت المناسب وبواسطة كادر فني مؤهل وذو خبرة",
        whatwedo: "ماذا نقدم ..",
        list1: "مباني سكنية وتجارية",
        list2: "مباني الأسواق",
        list3: "الفلل والتوسعات",
        list4: "المستودعات",
        knowmore: "اعرف المزيد عنا",     
        // Footer
      },
    },
  },
});
// initialized and ready to go!
// i18next is already initialized, because the translation resources where passed via init function

document.querySelector("#head1").innerHTML = i18next.t("head1");
document.querySelector("#heading1").innerHTML = i18next.t("heading1");
document.querySelector("#heading2").innerHTML = i18next.t("heading2");
document.querySelector("#why").innerHTML = i18next.t("why");
document.querySelector("#para1").innerHTML = i18next.t("para1");
document.querySelector("#whatwedo").innerHTML = i18next.t("whatwedo");
document.querySelector("#list1").innerHTML = i18next.t("list1");
document.querySelector("#list2").innerHTML = i18next.t("list2");
document.querySelector("#list3").innerHTML = i18next.t("list3");
document.querySelector("#list4").innerHTML = i18next.t("list4");
document.querySelector("#knowmore").innerHTML = i18next.t("knowmore");


