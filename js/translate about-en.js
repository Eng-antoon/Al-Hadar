// const { i18next } = window;

// const currentLanguage = localStorage.getItem("lang");

i18next.init({
  lng: currentLanguage, // if you're using a language detector, do not define the lng option

  resources: {
    en: {
      translation: {
        // Header
        titlepage: "About Us",

        abouthead1: "Al Hadar Company",
        head: "About Us",
        pagename: "About Us",
        homepage: "Home",
        briefdesc: "A brief about us",
        moredesc:
          "AL Hader General Contracting has attained its reputation as one of the reliable and diversified contracting firms in Ajman-UAE. Since 2007 AL Hader General Contracting LLC has provided its clients with viable solutions to any complexities in their construction needs. The company’s strength lies in traditional construction methods re-enforced by creative, fresh approaches to cutting edge technologies and delivery systems. AL Hader Co. has assembled a team of construction professionals that offer a single source solution for all construction related needs. AL Hader Co. LLC supports its clients in every aspect from project inception to commission of the fully operational facility.” Al Hader is capable of executing professionally all types of works that the clients may require in Dubai and Northern emirates.",
        spec: "Al Hadar is Specialized in:",
        parali1: "Building Contracting.",
        parali2: "Facilities Management Division.",
        parali3: "Interiors Division.",
        firsttitle: "Our Mission",
        sectitle: "Vission",
        thirtitle: "Our Approach",
        paramiss:
          "Our mission is to deliver for our customers the best quality of construction services at competitive rates with highest level of professionalism and integrity resulting in long term relationships with our employees, customers, suppliers and subcontractors",
        paraviss:
          "AL Hader Co. LLC is committed to building long-term relationships based on integrity Performance, value, and client satisfaction. We will continue to meet the changing needs our clients with our quality services delivered by the most qualified people. Our vision is to be recognized and respected as one of the premier total facility management companies in UAE.",
        paraapp:
          "We strive to fulfill and exceed our customer expectations with quality, reliability and on time services.",
      },
    },
    ar: {
      translation: {
        // Header

        titlepage: "معلومات عنا",
        pagename: "معلومات عنا",
        abouthead1: "شركة الحضر",
        head: "معلومات عنا",
        homepage: "الصفحة الرئيسية",
        briefdesc: "نبذة مختصرة عنا",
        moredesc:
          "اكتسبت الحضر للمقاولات العامة سمعتها باعتبارها واحدة من شركات المقاولات الموثوقة والمتنوعة في عجمان - الإمارات العربية المتحدة. منذ عام 2007 ، قدمت شركة الحاضر للمقاولات العامة ذ.م.م لعملائها حلولًا قابلة للتطبيق لأي تعقيدات في احتياجات البناء الخاصة بهم. تكمن قوة الشركة في أساليب البناء التقليدية المعززة بأساليب إبداعية وحديثة للتقنيات المتطورة وأنظمة التسليم. قامت شركة الحاضر بتجميع فريق من المتخصصين في مجال التشييد الذين يقدمون حل مصدر واحد لجميع الاحتياجات المتعلقة بالتشكيل. تدعم شركة الحاضر ش.م. الهدير قادر على تنفيذ مهني لجميع أنواع الأعمال التي قد يحتاجها العملاء في دبي والإمارات الشمالية.",
        spec: "شركة الحضر متخصصة في:",
        parali1: "مقاولات البناء",
        parali2: "قسم إدارة المرافق",
        parali3: "قسم الديكورات الداخلية",
        firsttitle: "مهمتنا",
        sectitle: "رؤيتنا",
        thirtitle: "هدفنا",
        paramiss:
          "مهمتنا هي أن نقدم لعملائنا أفضل جودة لخدمات البناء بأسعار تنافسية مع أعلى مستوى من الاحتراف والنزاهة مما يؤدي إلى علاقات طويلة الأمد مع موظفينا وعملائنا وموردينا ومقاولينا من الباطن",
        paraviss:
          "تلتزم شركة الحضر ببناء علاقات طويلة الأمد على أساس الأداء والقيمة ورضا العملاء. سنستمر في تلبية الاحتياجات المتغيرة لعملائنا من خلال خدماتنا عالية الجودة التي يقدمها أكثر الأشخاص المؤهلين. تتمثل رؤيتنا في أن يتم الاعتراف بها واحترامها كواحدة من الشركات الرائدة في إدارة المرافق الشاملة في الإمارات العربية المتحدة.",
        paraapp:
          "نحن نسعى جاهدين لتحقيق وتجاوز توقعات عملائنا من خلال خدمات الجودة والموثوقية وفي الوقت المحدد.",

        // Footer
      },
    },
  },
});
// initialized and ready to go!
// i18next is already initialized, because the translation resources where passed via init function

document.querySelector("#titlepage").innerHTML = i18next.t("titlepage");

document.querySelector("#head").innerHTML = i18next.t("head");
// document.querySelector("#pagename").innerHTML = i18next.t("pagename");
// document.querySelector("#homepage").innerHTML = i18next.t("homepage");
document.querySelector("#briefdesc").innerHTML = i18next.t("briefdesc");
document.querySelector("#moredesc").innerHTML = i18next.t("moredesc");
document.querySelector("#spec").innerHTML = i18next.t("spec");
document.querySelector("#parali1").innerHTML = i18next.t("parali1");
document.querySelector("#parali2").innerHTML = i18next.t("parali2");
document.querySelector("#parali3").innerHTML = i18next.t("parali3");
document.querySelector("#firsttitle").innerHTML = i18next.t("firsttitle");
document.querySelector("#sectitle").innerHTML = i18next.t("sectitle");
document.querySelector("#thirtitle").innerHTML = i18next.t("thirtitle");
document.querySelector("#paramiss").innerHTML = i18next.t("paramiss");
document.querySelector("#paraviss").innerHTML = i18next.t("paraviss");
document.querySelector("#paraapp").innerHTML = i18next.t("paraapp");
