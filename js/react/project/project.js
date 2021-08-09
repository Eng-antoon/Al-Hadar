// "use strict";

// const e = React.createElement;
const { axios } = window;

const baseURL = `http://localhost:8000`;
axios.defaults.baseURL = `${baseURL}/api`;

const translation = {
  en: {
    titlehead: "About the project",
    locationhead: "The Location of the Project",
    // Home: "Home",
    // projecttitle: "Projects",
    Description: "Simple Description",
  },
  ar: {
    titlehead: "معلومات عن المشروع",
    locationhead: "موقع المشروع",
    // Home: "الصفحة الرئيسية",
    // projecttitle: "المشاريع",
    Description: "الوصف",
  },
};

const Project = () => {
  const [project, setProject] = React.useState([]);

  React.useEffect(() => {
    const id = window.location.hash.substring(1);
    axios.get(`/projects/${id}`).then(({ data }) => {
      console.log(data.title);
      setProject(data);
      if (data.title || data.title_a)
        setProjectTitle(currentLanguage == "en" ? data.title : data.title_a);
    });
  }, []);
  return (
    <>
      <Description
        description={
          currentLanguage == "en" ? project.description : project.description_a
        }
        location={
          currentLanguage == "en"
            ? project.short_description
            : project.short_description_a
        }
      />
      <Images images={project?.images?.length > 0 ? project.images : []} />
    </>
  );
};

const Description = ({ description, location }) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-7 text-center">
          <div className="section-title">
            <span id="locationhead" className="h6 text-color"></span>
            <h2
              className="mt-3 content-title"
              dangerouslySetInnerHTML={{ __html: location }}
            ></h2>
          </div>
          <div className="section-title">
            <span id="desc" className="h6 text-color"></span>
            <p
              className="mt-5"
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>
          </div>
        </div>
        {/*             
        <div class="section-title">
          <span id="locationhead" class="h6 text-color"></span>
          <h2 class="mt-3 content-title">{location}</h2>
        </div>
        <div className="col-lg-7 text-center">
          <div className="section-title">
            <span id="simpdesc" className="h6 text-color"></span>
            <p className="mt-5">{description}</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

const Images = ({ images }) => {
  return (
    <div className="container">
      <div className="row portfolio-gallery d-flex justify-content-center">
        {images.map((image) => {
          console.log(`${baseURL}/storage/${image}`);

          return (
            <div className="col-lg-4 col-md-6">
              <div
                className="portflio-item position-relative mb-4"
                style={{ width: "100%", height: "100%" }}
              >
                <a
                  href={`${baseURL}/storage/${image}`}
                  className="popup-gallery"
                >
                  <img
                    src={`${baseURL}/storage/${image}`}
                    alt="service-image"
                    className="img-fluid w-100 aspect-ratio-1"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <i className="ti-fullscreen overlay-item"></i>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const setProjectTitle = (title) => {
  //   titlehead
  // locationhead
  // Description
  document.querySelector("#titlehead").innerHTML =
    translation[currentLanguage]["titlehead"];
  document.querySelector(
    "body > div > section.page-title.projectheadbg > div > div > div > div > h1"
  ).innerHTML = title;

  document.querySelector("#locationhead").innerHTML =
    translation[currentLanguage]["locationhead"];
  document.querySelector("#desc").innerHTML =
    translation[currentLanguage]["Description"];
  // document.querySelector(
  //   "body > div > section.page-title.projectheadbg > div > div > div > div > h1"
  // ).innerHTML = title;
  // document.querySelector("#titlepage").innerHTML = about;

  // document.querySelector("#locationhead").innerHTML =
};

ReactDOM.render(<Project />, document.querySelector("#react-root-project"));
