const { axios } = window;

const baseURL = `http://localhost:8000`;
axios.defaults.baseURL = `${baseURL}/api`;
// axios.defaults.baseURL = `${baseURL}/public/api`;

const translation = {
  en: {
    titlesmall: "On Construction Projects",
    head1: "Projects",
    // Home: "Home",
    // projecttitle: "Projects",
    ourWork: "Our Work",
    takeALook: "We have so many projects, so you can take a Look",
  },
  ar: {
    titlesmall: "في مشاريع البناء",
    head1: "المشاريع",
    // Home: "الصفحة الرئيسية",
    // projecttitle: "المشاريع",
    ourWork: "أعمالنا",
    takeALook: "لدينا العديد من المشاريع ، يمكنك إلقاء نظرة",
  },
};

// description: "askjckos"
// description_a: "سنبتؤشسنميتنمشستين"
// id: 2
// images: (3) ["projects/415470634d760b7667ffcbc9d6ab8d86.jpg", "projects/52839ac03c7360b3a5c5885fe2db6f63.jpg", "projects/3657fdfc957a23627d20d7ba49cbef4e.jpg"]
// short_description: "msklcskmclms"
// short_description_a: "شسبنمشستنمب"
// title: "klcms"

const Projects = () => {
  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    prepareTextsLanguage();
    axios.get(`/projects`).then(({ data }) => {
      setProjects(data);
    });
  }, []);

  return (
    <>
      <div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
              <div className="section-title">
                <span id="worktitle" className="h6 text-color">
                  {translation[currentLanguage]["ourWork"]}
                </span>
                <h2 id="para" className="mt-3 content-title">
                  {translation[currentLanguage]["takeALook"]}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <Project projects={projects} />
      </div>
    </>
  );
};

const Project = ({ projects }, i) => {
  return (
    <div className="container">
      <div className="row portfolio-gallery d-flex justify-content-center">
        {projects.map(
          ({
            id,
            title,
            title_a,
            images,
            short_description,
            short_description_a,
          }) => {
            const image = images?.length > 0 ? images[0] : "";
            return (
              <div key={id} className="col-lg-4 col-md-6">
                <div
                  className="portflio-item position-relative mb-4"
                  style={{ width: "100%", height: "100%" }}
                >
                  <a href={`Projectdetails.html#${id}`}>
                    <img
                      src={`${baseURL}/storage/${image}`}
                      alt="project"
                      className="img-fluid w-100 aspect-ratio-1"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <i className="overlay-item" />
                    <div className="portfolio-item-content">
                      <h3 className="mb-0 text-white">
                        {currentLanguage == "en" ? title : title_a}
                      </h3>
                      <p className="text-white-50">
                        {currentLanguage == "en"
                          ? short_description
                          : short_description_a}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

const prepareTextsLanguage = () => {
  document.querySelector("#titlesmall").innerHTML =
    translation[currentLanguage]["titlesmall"];
  document.querySelector("#head1").innerHTML =
    translation[currentLanguage]["head1"];
  // document.querySelector("#Home").innerHTML = translation[currentLanguage]["Home"];
  // document.querySelector("#projecttitle").innerHTML =
  //   translation[currentLanguage]["projecttitle"];
};

ReactDOM.render(<Projects />, document.querySelector("#react-root-project"));
