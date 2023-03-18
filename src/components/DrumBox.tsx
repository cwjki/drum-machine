const DrumBox = () => {
  return (
    <div className="container-fluid bg-primary ">
      <div className="row align-items-center min-vw-100 min-vh-100">
        <div className="col-md-6 col-sm-9 col-11 mx-auto border p-4 bg-secondary rounded-4 shadow-lg">
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
          <div className="row text-center mt-1">
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
          <div className="row text-center mt-1">
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
    </div>
  );
};

export default DrumBox;
