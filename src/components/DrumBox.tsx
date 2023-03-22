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
    let sound: HTMLAudioElement | null;
    switch (key) {
      case "q":
        sound = document.getElementById("Q") as HTMLAudioElement;
        setSoundMsg("Heater 1");
        break;
      case "w":
        sound = document.getElementById("W") as HTMLAudioElement;
        setSoundMsg("Heater 2");
        break;
      case "e":
        sound = document.getElementById("E") as HTMLAudioElement;
        setSoundMsg("Heater 3");
        break;
      case "a":
        sound = document.getElementById("A") as HTMLAudioElement;
        setSoundMsg("Heater 4");
        break;
      case "s":
        sound = document.getElementById("S") as HTMLAudioElement;
        setSoundMsg("Clap");
        break;
      case "d":
        sound = document.getElementById("D") as HTMLAudioElement;
        setSoundMsg("Open HH");
        break;
      case "z":
        sound = document.getElementById("Z") as HTMLAudioElement;
        setSoundMsg("Kick n' Hat");
        break;
      case "x":
        sound = document.getElementById("X") as HTMLAudioElement;
        setSoundMsg("Kick");
        break;
      case "c":
        sound = document.getElementById("C") as HTMLAudioElement;
        setSoundMsg("Closed HH");
        break;

      default:
        sound = null;
    }
    sound?.play();
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

        <div id="drum-machine" className="row align-items-center mt-5 pt-4">
          <div className="col-md-6 col-sm-9 col-11 mx-auto border border-info p-5 bg-secondary rounded-4 shadow-lg">
            <div className="row align-items-center text-center">
              <div className="col-6 mx-auto">
                <div className="card bg-primary rounded-4">
                  <div id="display" className="fs-6 py-1">
                    {soundMsg}
                  </div>
                </div>
              </div>
            </div>
            <div className="row text-center mt-4">
              <div className="col mybtn">
                <button
                  id="Heater 1"
                  name="q"
                  className="btn btn-info fs-2 fw-bold drum-pad"
                  onClick={handleClick}
                >
                  Q<audio id="Q" src={heater1} className="clip"></audio>
                </button>
              </div>
              <div className="col">
                <button
                  id="Heater 2"
                  name="w"
                  className="btn btn-info fs-2 fw-bold drum-pad"
                  onClick={handleClick}
                >
                  W<audio id="W" src={heater2} className="clip"></audio>
                </button>
              </div>
              <div className="col">
                <button
                  id="Heater 3"
                  name="e"
                  className="btn btn-info fs-2 fw-bold drum-pad"
                  onClick={handleClick}
                >
                  E<audio id="E" src={heater3} className="clip"></audio>
                </button>
              </div>
            </div>
            <div className="row text-center mt-3">
              <div className="col">
                <button
                  id="Heater 4"
                  name="a"
                  className="btn btn-info fs-2 fw-bold drum-pad"
                  onClick={handleClick}
                >
                  A<audio id="A" src={heater4_1} className="clip"></audio>
                </button>
              </div>
              <div className="col">
                <button
                  id="Clap"
                  name="s"
                  className="btn btn-info fs-2 fw-bold drum-pad"
                  onClick={handleClick}
                >
                  S<audio id="S" src={heater6} className="clip"></audio>
                </button>
              </div>
              <div className="col">
                <button
                  id="Open HH"
                  name="d"
                  className="btn btn-info fs-2 fw-bold drum-pad"
                  onClick={handleClick}
                >
                  D<audio id="D" src={dsc_oh} className="clip"></audio>
                </button>
              </div>
            </div>
            <div className="row text-center mt-3">
              <div className="col">
                <button
                  id="Kick n' Hat"
                  name="z"
                  className="btn btn-info fs-2 fw-bold drum-pad"
                  onClick={handleClick}
                >
                  Z<audio id="Z" src={kick_n_hat} className="clip"></audio>
                </button>
              </div>
              <div className="col">
                <button
                  id="Kick"
                  name="x"
                  className="btn btn-info fs-2 fw-bold drum-pad"
                  onClick={handleClick}
                >
                  X<audio id="X" src={rp4_kick_1} className="clip"></audio>
                </button>
              </div>
              <div className="col">
                <button
                  id="Closed HH"
                  name="c"
                  className="btn btn-info fs-2 fw-bold drum-pad"
                  onClick={handleClick}
                >
                  C<audio id="C" src={cev_h2} className="clip"></audio>
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
