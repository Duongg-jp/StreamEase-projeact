import "../component/Card.css";

export default function Contact() {
  return (
    <>
      <h1 className="text-white">Got a plant? Contact us now</h1>
      <div className="container d-flex justify-content-center align-items-center ">
        <div className="row mx-0">
          <div className="col-12 col-md-6">
            <form className=" row g-3">
              <div className="col-12">
                <label
                  for="inputEmail4"
                  className="form-label text-white text-left"
                >
                  Email
                </label>
                <input type="email" className="form-control" id="inputEmail4" />
              </div>

              <div className="col-12">
                <label
                  for="inputAddress"
                  className="form-label text-white text-left"
                >
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                />
              </div>
              <div className="col-12">
                <label
                  for="inputAddress2"
                  className="form-label text-white text-left"
                >
                  Address 2
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress2"
                  placeholder="Apartment, studio, or floor"
                />
              </div>
              <div className="col-md-6">
                <label
                  for="inputCity"
                  className="form-label text-white text-left"
                >
                  City
                </label>
                <input type="text" className="form-control" id="inputCity" />
              </div>
              <div className="col-md-4">
                <label
                  for="inputState"
                  className="form-label text-white text-left"
                >
                  State
                </label>
                <select id="inputState" className="form-select">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div className="col-md-2">
                <label
                  for="inputZip"
                  className="form-label text-white text-left"
                >
                  Zip
                </label>
                <input type="text" className="form-control" id="inputZip" />
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label className="form-check-label" for="gridCheck"></label>
                </div>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="col-12 col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.6321598570366!2d105.82099841113538!3d21.007377180555867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac8183e1347f%3A0x5b6324f68e320dae!2zxJDhuqFpIEjhu41jIFRodeG7tyBM4bujaSAtIDE3NSBUw6J5IFPGoW4gKEPhu5l0IFRyxrDhu5tjKQ!5e0!3m2!1svi!2s!4v1691753684812!5m2!1svi!2s"
              width="100%"
              height="450"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
