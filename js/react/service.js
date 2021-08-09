// "use strict";

// const e = React.createElement;
const { axios } = window;

const baseURL = `http://localhost:8000`;
axios.defaults.baseURL = `${baseURL}/api`;
// axios.defaults.baseURL = `${baseURL}/public/api`;

// description     : "ascnsklanc"
// description_a     : "klnckls"
// id     : 2
// images     : ["services/a5e419ec0a0d48140dff1d72bf3bc1f1.png"]
// short_description     : "nckl"
// short_description_a     : "nsklc"
// title     : "sklcn"

const Service = () => {
  const [service, setService] = React.useState([]);

  React.useEffect(() => {
    const id = window.location.hash.substring(1);
    axios.get(`/services/${id}`).then(({ data }) => {
      setService(data);
      setServiceTitle(
        currentLanguage == "en" ? data.title : data.title_a,
        currentLanguage == "en" ? "About the Service" : "تفاصيل عن خدمة"
      );
    });
  }, []);

  // axios.get(`/services`).then(({ data }) => {
  //   data.forEach(({ id, title, title_a, images }) => {
  //     const image = `${baseURL}/storage/${images[0]}`;
  //     if (currentLanguage == "en") addServiceToServicesPage(id, image, title);
  //     else addServiceToServicesPage(id, image, title_a);
  //   });
  // });

  return (
    <>
      <Description
        desriptionTitle={currentLanguage == "en" ? "Description" : "الوصف"}
        description={
          currentLanguage == "en" ? service.description : service.description_a
        }
      />
      <Images images={service?.images?.length > 0 ? service.images : []} />
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

const setServiceTitle = (title, about) => {
  document.querySelector(
    "body > div > section.page-title.projectheadbg > div > div > div > div > h1"
  ).innerHTML = title;
  document.querySelector("#titlepage").innerHTML = about;
};

ReactDOM.render(<Service />, document.querySelector("#react-root"));
