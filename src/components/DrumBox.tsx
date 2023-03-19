const DrumBox = () => {
  return (
    <div className="container-fluid">
      <div className="row align-items-center">
        <div className="col-md-6 col-sm-9 col-11 mx-auto border border-info p-5 bg-secondary rounded-4 shadow-lg">
          <div className="row text-center mt-1">
            <div className="col mybtn">
              <button className="btn btn-info fs-2 fw-bold px-4">Q</button>
            </div>
            <div className="col">
              <button className="btn btn-info fs-2 fw-bold px-4">W</button>
            </div>
            <div className="col">
              <button className="btn btn-info fs-2 fw-bold px-4">E</button>
            </div>
          </div>
          <div className="row text-center mt-3">
            <div className="col">
              <button className="btn btn-info fs-2 fw-bold">A</button>
            </div>
            <div className="col">
              <button className="btn btn-info fs-2 fw-bold">S</button>
            </div>
            <div className="col">
              <button className="btn btn-info fs-2 fw-bold">D</button>
            </div>
          </div>
          <div className="row text-center mt-3">
            <div className="col">
              <button className="btn btn-info fs-2 fw-bold">Z</button>
            </div>
            <div className="col">
              <button className="btn btn-info fs-2 fw-bold">X</button>
            </div>
            <div className="col">
              <button className="btn btn-info fs-2 fw-bold">C</button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <nav className="navbar pb-2 ">
        <div className="container-fluid justify-content-center">
          <span className="navbar-brand fs-6 text-light">by cwjki</span>
          <a
            className="navbar-brand"
            href="https://github.com/cwjki"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-github text-light"></i>
          </a>
          <a
            className="navbar-brand"
            href="https://www.linkedin.com/in/juan-carlos-casteleiro/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-linkedin text-light"></i>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default DrumBox;
