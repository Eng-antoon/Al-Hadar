// const { i18next } = window;

// const currentLanguage = localStorage.getItem("lang");

i18next.init({
  lng: "ar", // if you're using a language detector, do not define the lng option

  resources: {
    en: {
      translation: {
        // Header

        address: "P.O Box 18378 Ajman.UAE",
        titlepage: "Contact Us",
        phrase: "We Love To Be In Touch",
        home: "Home",
        msgdelete: "Your message was sent successfully.",
        contactpage: "Contact Us",
        sendmsg: "Send a message",
        contactinfo: "Contact Information",
        emailplace: "Email Address",
        nameplace: "Your Name",
        yourmsgplace: "Your Message",
        butonsub: "Send Message",
        atyourserv: "We are always at your service",
        emial: "Email:",
        


      
        // About Us Page
      },
    },
    ar: {
      translation: {
        // Header
        titlepage: "تواصل معنا",
        phrase: "نحب أن نكون على اتصال",
        home: "الصفحة الرئيسية",
        msgdelete: "لقد تم ارسال رسالتك بنجاح.",
        contactpage: "تواصل معنا",
        sendmsg: "ارسل رسالة",
        contactinfo: "معلومات الاتصال",
        emailplace: "البريد الإلكتروني",
        nameplace: "الاسم",
        yourmsgplace: "رسالتك",
        butonsub: "ارسال",
        atyourserv: "نحن دائما في خدمتكم",
        emial: "البريد الالكتروني:",
        
        address: "صندوق بريد 18378 عجمان",
        
        // Footer
      },
    },
  },
});
// initialized and ready to go!
// i18next is already initialized, because the translation resources where passed via init function


// document.querySelector("#address").innerText = i18next.t("address")
document.querySelector("#titlepage").innerText = i18next.t("titlepage")
document.querySelector("#phrase").innerText = i18next.t("phrase")
document.querySelector("#home").innerText = i18next.t("home")
document.querySelector("#contactpage").innerText = i18next.t("contactpage")
document.querySelector("#msgdelete").innerText = i18next.t("msgdelete")
document.querySelector("#sendmsg").innerText = i18next.t("sendmsg")
document.querySelector("#contactinfo").innerText = i18next.t("contactinfo")
document.querySelector("#nameplace").setAttribute("placeholder", i18next.t("nameplace"));
document.querySelector("#emailplace").setAttribute("placeholder", i18next.t("emailplace"));
document.querySelector("#yourmsgplace").setAttribute("placeholder", i18next.t("yourmsgplace"));
document.querySelector("#butonsub").innerText = i18next.t("butonsub")
document.querySelector("#atyourserv").innerText = i18next.t("atyourserv")
document.querySelector("#emial").innerText = i18next.t("emial")


