import { useState, MouseEvent, useEffect } from "react";

// audios imports
import cev_h2 from "../assets/Cev_H2.mp3";
import dsc_oh from "../assets/Dsc_Oh.mp3";
import heater1 from "../assets/Heater-1.mp3";
import heater2 from "../assets/Heater-2.mp3";
import heater3 from "../assets/Heater-3.mp3";
import heater4_1 from "../assets/Heater-4_1.mp3";
import heater6 from "../assets/Heater-6.mp3";
import kick_n_hat from "../assets/Kick_n_Hat.mp3";
import rp4_kick_1 from "../assets/RP4_KICK_1.mp3";

const DrumBox = () => {
  const [soundMsg, setSoundMsg] = useState("Sound");

  useEffect(() => {
    const keyDownHandler = ({ key }: { key: any }) => {
      playAudio(key);
    };

    window.addEventListener("keydown", keyDownHandler);
    return () => {
      window.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    playAudio(event.currentTarget.name);
  };

  // function that given a key handles the audio and audio text. The allows keys are 'q w e a s d z x c'.
  const playAudio = (key: string) => {
    let sound: string = "";
    switch (key) {
      case "q":
        sound = heater1;
        setSoundMsg("Heater 1");
        break;
      case "w":
        sound = heater2;
        setSoundMsg("Heater 2");
        break;
      case "e":
        sound = heater3;
        setSoundMsg("Heater 3");
        break;
      case "a":
        sound = heater4_1;
        setSoundMsg("Heater 4");
        break;
      case "s":
        sound = heater6;
        setSoundMsg("Clap");
        break;
      case "d":
        sound = dsc_oh;
        setSoundMsg("Open HH");
        break;
      case "z":
        sound = kick_n_hat;
        setSoundMsg("Kick n' Hat");
        break;
      case "x":
        sound = rp4_kick_1;
        setSoundMsg("Kick");
        break;
      case "c":
        sound = cev_h2;
        setSoundMsg("Closed HH");
        break;

      default:
        sound = "";
    }
    new Audio(sound).play();
  };

  return (
    <div className="min-vw-100 min-vh-100 bg-primary">
      <div className="container-fluid">
        <div className="row pt-5 align-items-center text-center">
          <div className="col-md-10 col-12 mx-auto">
            <div className="card bg-secondary rounded-4 shadow-lg">
              <div className="card-body ">
                <div className="card-title text-info fs-2 fw-bold">
                  Drum Machine
                </div>
                <div className="card-text text-primary fw-semibold">
                  the third project of the freeCodeCamp's Front End Development
                  Libraries certification
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row align-items-center mt-5 pt-4">
          <div className="col-md-6 col-sm-9 col-11 mx-auto border border-info p-5 bg-secondary rounded-4 shadow-lg">
            <div className="row align-items-center text-center">
              <div className="col-6 mx-auto">
                <div className="card bg-primary rounded-4">
                  <div className="fs-6 py-1">{soundMsg}</div>
                </div>
              </div>
            </div>
            <div className="row text-center mt-4">
              <div className="col mybtn">
                <button
                  name="q"
                  className="btn btn-info fs-2 fw-bold"
                  onClick={handleClick}
                >
                  Q
                </button>
              </div>
              <div className="col">
                <button
                  name="w"
                  className="btn btn-info fs-2 fw-bold"
                  onClick={handleClick}
                >
                  W
                </button>
              </div>
              <div className="col">
                <button
                  name="e"
                  className="btn btn-info fs-2 fw-bold"
                  onClick={handleClick}
                >
                  E
                </button>
              </div>
            </div>
            <div className="row text-center mt-3">
              <div className="col">
                <button
                  name="a"
                  className="btn btn-info fs-2 fw-bold"
                  onClick={handleClick}
                >
                  A
                </button>
              </div>
              <div className="col">
                <button
                  name="s"
                  className="btn btn-info fs-2 fw-bold"
                  onClick={handleClick}
                >
                  S
                </button>
              </div>
              <div className="col">
                <button
                  name="d"
                  className="btn btn-info fs-2 fw-bold"
                  onClick={handleClick}
                >
                  D
                </button>
              </div>
            </div>
            <div className="row text-center mt-3">
              <div className="col">
                <button
                  name="z"
                  className="btn btn-info fs-2 fw-bold"
                  onClick={handleClick}
                >
                  Z
                </button>
              </div>
              <div className="col">
                <button
                  name="x"
                  className="btn btn-info fs-2 fw-bold"
                  onClick={handleClick}
                >
                  X
                </button>
              </div>
              <div className="col">
                <button
                  name="c"
                  className="btn btn-info fs-2 fw-bold"
                  onClick={handleClick}
                >
                  C
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <nav className="navbar pb-2 mt-2">
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
    </div>
  );
};

export default DrumBox;
