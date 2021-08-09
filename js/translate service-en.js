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
        servicehead: "خدمات",
        head1: "خدماتنا",
        headline: "ما الذي نفعله",
        home: "الصفحة الرئيسية",
        intro: "نحن نقدم مجموعة واسعة من الخدمات الإبداعية",
        // subhead1:"العمل الداخلي",
        fparali1: "تصميم وتنفيذ أعمال عالية الجودة من دهانات الجبس والجص.",
        fparali2:
          "القيام بجميع أعمال التذهيب والرخام والتحف والخشب القديم الملمس على أيدي خبراء محترفين.",
        subhead2: "خدمات السباكة",
        fpara:
          "توفر شركة الحضر  خدمات السباكة والإصلاح كاملة. خبرتنا هي إجراء الإصلاحات في المنازل القديمة التي تحتوي على نظام سباكة قديم.",
        subhead3: "مطبخ",
        fpara1: "إزالة واستبدال ونقل السباكة لأسطح العمل الجديدة.",
        subhead4: "القبو",
        sparali1: "شريط مبلل",
        sparali2: "مضخة مستنقع",
        sparali3: "قاذفات الصرف الصحي",

        subhead5: "أنابيب الغاز",
        tparali1: "مصابيح الغاز",
        tparali2: "مولدات غاز / كهرباء احتياطية",
        tparali3: "موقد غاز وشواية",
        subhead6: "إصلاح أو استبدال فرن الغاز / المرجل",
        fpara2: "لدينا خلفية واسعة في التحكم في أجهزة الغاز وإصلاحها والخدمة.",
        subhead7: "الخدمات الكهربائية",
        fpara3:
          "سواء كانت متطلباتك الكهربائية كبيرة أو صغيرة ، يمكنك التأكد من أن لدينا المهارات والخبرات اللازمة لتحقيق رضاك ​​التام. خدماتنا:",
        foparali1: "تجديد الأسلاك المحلية",
        foparali2: "منشآت البناء المحلية الجديدة",
        foparali3: "منشآت تجارية جديدة",
        foparali4: "المنشآت الصناعية الجديدة",
        subhead8: "خدمة التبليط",
        fpara4:
          "تقدم شركة الحضر مجموعة واسعة من الخدمات لعملائنا. يمكننا أن نتولى جميع أعمال التحضير التي ينطوي عليها مشروع التبليط الخاص بك ، بدءًا من إزالة البلاط الموجود والأرضيات الفرعية وحتى تركيب التدفئة تحت الأرضية ، كما أننا نتخلص من القلق بشأن التعاقد مع مقاولين منفصلين ونضمن تنفيذ جميع الأعمال إلى الأحدث. من اللوائح وأعلى المعايير ، فيما يلي قائمة ببعض خدماتنا.",
        subhead9: "خدمة النجارة",
        fpara5:
          "يمكن لشركة الحضر تصميم وإنشاء خزانات مخصصة جديدة ، والحصول على سكوتش ، وتقليم ، ومصاريع ، وأفاريز. يمكن طرح الأعمال الخشبية الحالية وإنقاذها وإصلاحها لتبدو وكأنها جديدة. يمكننا إنقاذ الأرضيات الخشبية من الخزائن والغرف الصغيرة في منزلك لإصلاح الغرف الكبيرة أو دمج الأخشاب والأبواب التي تم إنقاذها من أحد شركائنا. يمكن ترك الخشب في حالته الطبيعية أو مصقول أو ملطخًا أو ملمعًا.",
        fparalast: "دعنا نساعدك في الانتهاء من حمام الطابق السفلي الجديد",
      },
    },
  },
});
// initialized and ready to go!
// i18next is already initialized, because the translation resources where passed via init function

document.querySelector("#head1").innerHTML = i18next.t("head1");
document.querySelector("#headline").innerHTML = i18next.t("headline");
document.querySelector("#homepagelink").innerHTML = i18next.t("home");
document.querySelector("#inpage").innerHTML = i18next.t("head1");
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
