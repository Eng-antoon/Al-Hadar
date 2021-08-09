// "use strict";

// const e = React.createElement;
const { axios } = window;

const baseURL = `http://localhost:8000`;
axios.defaults.baseURL = `${baseURL}/api`;

const Project = () => {
  const [project, setProject] = React.useState([]);

  React.useEffect(() => {
    const id = window.location.hash.substring(1);
    axios.get(`/projects/${id}`).then(({ data }) => {
      console.log(data);
      setProject(data);
      setProjectTitle(
        currentLanguage == "en" ? data.title : data.title_a,
        currentLanguage == "en" ? "About the project" : "تفاصيل عن المشروع"
      );
    });
  }, []);
  return (
    <>
      <Description
        desriptionTitle={currentLanguage == "en" ? "Description" : "الوصف"}
        description={
          currentLanguage == "en" ? project.description : project.description_a
        }
      />
      <Images images={project?.images?.length > 0 ? project.images : []} />
    </>
  );
};

const Description = ({ desriptionTitle, description }) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-7 text-center">
          <div className="section-title">
            <span id="simpdesc" className="h6 text-color">
              {desriptionTitle}
            </span>
            <p className="mt-5">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Images = ({ images }) => {
  console.log(images);
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

const setProjectTitle = (title, about) => {
  document.querySelector(
    "body > div > section.page-title.projectheadbg > div > div > div > div > h1"
  ).innerHTML = title;
  document.querySelector("#titlepage").innerHTML = about;
};

ReactDOM.render(<Project />, document.querySelector("#react-root-project"));
