const DrumBox = () => {
  return (
    <div className="container-fluid vh-100 vw-100 bg-primary">
      <div className="row align-items-center vh-100 vw-100">
        <div className="col-md-6 col-sm-8 col-12 mx-auto">
          <div className="card shadow bg-secondary rounded-3">
            <div className="container-fluid p-5 border text-center">
              <div className="row align-items-center bg-danger m-1">
                <div className="col-4">
                  <button className="btn text-light border p-4">Q</button>
                </div>
                <div className="col-4">
                  <button className="btn text-light border p-4">W</button>
                </div>
                <div className="col-4">
                  <button className="btn text-light border p-4">E</button>
                </div>
                
              </div>
              <div className="row align-items-center">
                <div className="col-4">
                  <button>Q</button>
                </div>
                <div className="col-4">
                  <button>W</button>
                </div>
                <div className="col-4">
                  <button>E</button>
                </div>
                
              </div>
              <div className="row align-items-center">
                <div className="col-4">
                  <button>Q</button>
                </div>
                <div className="col-4">
                  <button>W</button>
                </div>
                <div className="col-4">
                  <button>E</button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrumBox;
