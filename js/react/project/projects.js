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

const Projects = () => {
  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    prepareTextsLanguage();
    axios.get(`/projects`).then(({ data }) => {
      console.log(projects);
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
        <Images images={projects?.images?.length > 0 ? projects.images : []} />
      </div>
    </>
  );
};

const Images = ({ images }) => (
  <div className="container-fluid">
    <div className="row portfolio-gallery">
      {images.map((image) => (
        <div className="col-lg-4 col-md-6">
          <div className="portflio-item position-relative mb-4">
            <a href="Projectdetails.html">
              <img
                src={`${baseURL}/storage/${image}`}
                alt="project"
                className="img-fluid w-100"
              />
              <i className="overlay-item" />
              <div className="portfolio-item-content">
                <h3 className="mb-0 text-white">Project Al Hera</h3>
                <p className="text-white-50">The Address - Location</p>
              </div>
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
);

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
