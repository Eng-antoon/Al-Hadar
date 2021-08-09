// "use strict";

// const e = React.createElement;
const { axios } = window;

const baseURL = `http://localhost:8000`;
axios.defaults.baseURL = `${baseURL}/api`;
// axios.defaults.baseURL = `${baseURL}/public/api`;

const Service = () => {
  const [services, setServices] = React.useState([]);

  React.useEffect(() => {
    axios.get("/services").then(({ data }) => {
      setServices(data);
    });
    if (currentLanguage == "ar")
      document
        .querySelector(
          "body > div > section.page-title.bg-1 > div > div > div > div > ul"
        )
        .setAttribute("dir", "rtl");
  }, []);

  // axios.get(`/services`).then(({ data }) => {
  //   data.forEach(({ id, title, title_a, images }) => {
  //     const image = `${baseURL}/storage/${images[0]}`;
  //     if (currentLanguage == "en") addServiceToServicesPage(id, image, title);
  //     else addServiceToServicesPage(id, image, title_a);
  //   });
  // });

  return (
    <div className="row portfolio-gallery d-flex justify-content-center">
      {services.map(({ id, title, title_a, images, location, location_a }) => {
        const image = images.length > 0 ? images[0] : "";

        return (
          <div key={id} className="col-lg-4 col-md-6">
            <div
              className="portflio-item position-relative mb-4"
              style={{ width: "100%", height: "100%" }}
            >
              <a href={`ashkal.html#${id}`}>
                <img
                  src={`${baseURL}/storage/${image}`}
                  alt="img"
                  className="img-fluid w-100 aspect-ratio-1"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <i className="overlay-item" />
                <div className="portfolio-item-content">
                  <h3
                    className="mb-0 text-white"
                    style={
                      currentLanguage == "ar" ? { textAlign: "right" } : {}
                    }
                  >
                    {currentLanguage == "en" ? title : title_a}
                  </h3>
                  <p
                    className="text-white-50"
                    style={
                      currentLanguage == "ar" ? { textAlign: "right" } : {}
                    }
                  >
                    {currentLanguage == "en" ? location : location_a}
                  </p>
                </div>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// // const domContainer = document.querySelector(".portfolio-gallery");
// // ReactDOM.render(e(Service), domContainer);
// ReactDOM.render(<Service />, domContainer);

ReactDOM.render(<Service />, document.querySelector(".portfolio-gallery"));
