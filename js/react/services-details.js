// "use strict";

// const e = React.createElement;
const { axios } = window;

const baseURL = `http://localhost:8000`;
axios.defaults.baseURL = `${baseURL}/api`;
// axios.defaults.baseURL = `${baseURL}/public/api`;

const Service = () => {
  const [services, setServices] = React.useState([]);

  React.useEffect(() => {
    axios.get("/servicesDetails").then(({ data }) => {
      setServices(data);
    });
  }, []);

  return (
    <>
      {services.map(({ id, title, description, title_a, description_a }) => {
        return (
          <div key={id} className="col-lg-4 col-md-6 col-sm-6">
            <div className="service-item mb-5">
              <h4
                id="subhead1"
                className="mb-3"
                style={currentLanguage == "ar" ? { textAlign: "right" } : {}}
              >
                {currentLanguage == "en" ? title : title_a}
              </h4>
              <div
                className="listservices"
                style={currentLanguage == "ar" ? { textAlign: "right" } : {}}
              >
                {currentLanguage == "en" ? description : description_a}
                {/* <li id="fparali1">
                  Designing and executing high quality works of gypsum and
                  plaster paints.
                </li> */}
                {/* <li id="fparali2">
                  Undertaking all works of gilding, marbleizing, antiques and
                  old touch wood at the hands of professional experts.
                </li> */}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

// // const domContainer = document.querySelector(".portfolio-gallery");
// // ReactDOM.render(e(Service), domContainer);
// ReactDOM.render(<Service />, domContainer);

ReactDOM.render(<Service />, document.querySelector("#services-details"));
