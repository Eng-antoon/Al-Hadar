// const {i18next} = window;
// console.log(i18next)

i18next.init({
  lng: currentLanguage, // if you're using a language detector, do not define the lng option

  resources: {
    en: {
      translation: {
        servicehead: "Services",
        head1: "Our services",
        headline: "What We Do",
        home: "Home",
        intro: "We provide a wide range of creative services",
        // subhead1:"Interior Work",
        fparali1:
          "Designing and executing high quality works of gypsum and plaster paints.",
        fparali2:
          "Undertaking all works of gilding, marbleizing, antiques and old touch wood at the hands of professional experts.",
        subhead2: "Plumbing Services",
        fpara:
          "Al Hader LLC Plumbing provides full-service plumbing and repair. Our expertise is making repairs in older homes that have an older plumbing system.",
        subhead3: "Kitchen",
        fpara1:
          "Remove, replace, and relocation of plumbing for new countertops New appliance installation, hoods/venting, full ranges, electric to gas",
        subhead4: "Basement",
        sparali1: "Wet bar",
        sparali2: "Sump pump",
        sparali3: "Sewage ejectors",

        subhead5: "Gas Piping",
        tparali1: "Gas lights",
        tparali2: "Gas/electric back-up generators",
        tparali3: "Gas fireplace and grill",
        subhead6: "Gas furnace/boiler repair or replace",
        fpara2:
          "We have an extensive background in gas appliance control, repair,and service.",
        subhead7: "Electrical Services",
        fpara3:
          "Whether your Electrical requirements are large or small, you can be sure that we have the necessary skills and expertise to achieve your complete satisfaction. Our Services:",
        fparali1: "Domestic Rewiring",
        fparali2: "Domestic New Build Installations",
        fparali3: "Commercial New Installations",
        fparali4: "Industrial New Installations",
        subhead8: "Tiling Service",
        fpara4:
          "Al Hader LLC offers a vast range of services to our clients. We can take care of all the preparation work involved in your tiling project, from removal of existing tiles and sub floors to installation of under floor heating, we take the worry out of hiring separate contractors and insure all the work is carried out to the latest of regulations and to the highest standards, below is a list of some our services.",
        subhead9: "Carpentry Service",
        fpara5:
          "The Hader LLC can design and create new custom cabinetry, wainscoting, trim, shutters, and cornices. Existing woodwork can be exposed, salvaged and repaired to look like new. We can salvage wood floors from closets and small rooms in your home to repair larger rooms or incorporate salvaged wood and doors from one of our Partners. Wood can be left in its natural state, sanded, stained or varnished.",
        fparalast: "Let us help you get your new basement bathroom completed",

        // About Us Page
      },
    },
    ar: {
      translation: {
        servicehead: "??????????",
        head1: "??????????????",
        headline: "???? ???????? ??????????",
        home: "???????????? ????????????????",
        intro: "?????? ???????? ???????????? ?????????? ???? ?????????????? ??????????????????",
        // subhead1:"?????????? ??????????????",
        fparali1: "?????????? ???????????? ?????????? ?????????? ???????????? ???? ???????????? ?????????? ??????????.",
        fparali2:
          "???????????? ?????????? ?????????? ?????????????? ?????????????? ???????????? ???????????? ???????????? ???????????? ?????? ???????? ?????????? ??????????????.",
        subhead2: "?????????? ??????????????",
        fpara:
          "???????? ???????? ??????????  ?????????? ?????????????? ???????????????? ??????????. ???????????? ???? ?????????? ?????????????????? ???? ?????????????? ?????????????? ???????? ?????????? ?????? ???????? ?????????? ????????.",
        subhead3: "????????",
        fpara1: "?????????? ???????????????? ???????? ?????????????? ?????????? ?????????? ??????????????.",
        subhead4: "??????????",
        sparali1: "???????? ????????",
        sparali2: "???????? ????????????",
        sparali3: "???????????? ?????????? ??????????",

        subhead5: "???????????? ??????????",
        tparali1: "???????????? ??????????",
        tparali2: "???????????? ?????? / ???????????? ????????????????",
        tparali3: "???????? ?????? ????????????",
        subhead6: "?????????? ???? ?????????????? ?????? ?????????? / ????????????",
        fpara2: "?????????? ?????????? ?????????? ???? ???????????? ???? ?????????? ?????????? ???????????????? ??????????????.",
        subhead7: "?????????????? ????????????????????",
        fpara3:
          "???????? ???????? ???????????????? ???????????????????? ?????????? ???? ?????????? ?? ?????????? ???????????? ???? ???? ?????????? ???????????????? ???????????????? ?????????????? ???????????? ???????? ????????????????. ??????????????:",
        foparali1: "?????????? ?????????????? ??????????????",
        foparali2: "?????????? ???????????? ?????????????? ??????????????",
        foparali3: "?????????? ???????????? ??????????",
        foparali4: "?????????????? ???????????????? ??????????????",
        subhead8: "???????? ??????????????",
        fpara4:
          "???????? ???????? ?????????? ???????????? ?????????? ???? ?????????????? ????????????????. ???????????? ???? ?????????? ???????? ?????????? ?????????????? ???????? ?????????? ?????????? ?????????? ?????????????? ?????????? ???? ?? ?????????? ???? ?????????? ???????????? ?????????????? ?????????????????? ?????????????? ???????? ?????????? ?????????????? ?????? ?????????????? ?? ?????? ???????? ?????????? ???? ?????????? ???????? ?????????????? ???? ?????????????? ?????????????? ?????????? ?????????? ???????? ?????????????? ?????? ????????????. ???? ?????????????? ?????????? ???????????????? ?? ???????? ?????? ?????????? ???????? ??????????????.",
        subhead9: "???????? ??????????????",
        fpara5:
          "???????? ?????????? ?????????? ?????????? ???????????? ???????????? ?????????? ?????????? ?? ?????????????? ?????? ?????????? ?? ???????????? ?? ?????????????? ?? ??????????????. ???????? ?????? ?????????????? ?????????????? ?????????????? ???????????????? ???????????????? ?????????? ???????????? ??????????. ???????????? ?????????? ???????????????? ?????????????? ???? ?????????????? ???????????? ?????????????? ???? ?????????? ???????????? ?????????? ?????????????? ???? ?????? ?????????????? ???????????????? ???????? ???? ?????????????? ???? ?????? ??????????????. ???????? ?????? ?????????? ???? ?????????? ???????????????? ???? ?????????? ???? ???????????? ???? ????????????.",
        fparalast: "???????? ???????????? ???? ???????????????? ???? ???????? ???????????? ???????????? ????????????",
      },
    },
  },
});
// initialized and ready to go!
// i18next is already initialized, because the translation resources where passed via init function

document.querySelector("#head1").innerHTML = i18next.t("head1");
document.querySelector("#headline").innerHTML = i18next.t("headline");
// document.querySelector("#homepagelink").innerHTML = i18next.t("home");
// document.querySelector("#inpage").innerHTML = i18next.t("head1");
document.querySelector("#firstofpage").innerHTML = i18next.t("head1");
document.querySelector("#introtopage").innerHTML = i18next.t("intro");

// // document.querySelector("#subhead1").innerHTML = i18next.t("subhead1");
document.querySelector("#fparali1").innerHTML = i18next.t("fparali1");
document.querySelector("#fparali2").innerHTML = i18next.t("fparali2");
document.querySelector("#subhead2").innerHTML = i18next.t("subhead2");
document.querySelector("#fpara").innerHTML = i18next.t("fpara");
document.querySelector("#subhead3").innerHTML = i18next.t("subhead3");
document.querySelector("#fpara1").innerHTML = i18next.t("fpara1");
document.querySelector("#subhead4").innerHTML = i18next.t("subhead4");
document.querySelector("#sparali1").innerHTML = i18next.t("sparali1");
document.querySelector("#sparali2").innerHTML = i18next.t("sparali2");
document.querySelector("#sparali3").innerHTML = i18next.t("sparali3");

document.querySelector("#subhead5").innerHTML = i18next.t("subhead5");
document.querySelector("#tparali1").innerHTML = i18next.t("tparali1");
document.querySelector("#tparali2").innerHTML = i18next.t("tparali2");
document.querySelector("#tparali3").innerHTML = i18next.t("tparali3");
document.querySelector("#subhead6").innerHTML = i18next.t("subhead6");
document.querySelector("#fpara2").innerHTML = i18next.t("fpara2");
document.querySelector("#subhead7").innerHTML = i18next.t("subhead7");
document.querySelector("#fpara3").innerHTML = i18next.t("fpara3");
document.querySelector("#foparali1").innerHTML = i18next.t("foparali1");
document.querySelector("#foparali2").innerHTML = i18next.t("foparali2");
document.querySelector("#foparali3").innerHTML = i18next.t("foparali3");
document.querySelector("#foparali4").innerHTML = i18next.t("foparali4");
document.querySelector("#subhead8").innerHTML = i18next.t("subhead8");
document.querySelector("#fpara4").innerHTML = i18next.t("fpara4");
document.querySelector("#subhead9").innerHTML = i18next.t("subhead9");
document.querySelector("#fpara5").innerHTML = i18next.t("fpara5");
document.querySelector("#fparalast").innerHTML = i18next.t("fparalast");
