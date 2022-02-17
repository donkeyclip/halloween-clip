import { HTMLClip, loadPlugin, AudioPlayback } from "@donkeyclip/motorcortex";
import html from "./clip.html";
import css from "!!raw-loader!./clip.css";
import { initParams } from "./initParams";
import threejsDefinition from "@donkeyclip/motorcortex-threejs";
const threejs = loadPlugin(threejsDefinition);
import { scene, sceneAnimation, ground, cameraLookAt } from "./incidents";
import { introScene } from "./scenes/intro";
import { firstScene } from "./scenes/scene1";
import { secondScene } from "./scenes/scene2";
import { thirdScene } from "./scenes/scene3";
import { transitionScene } from "./scenes/transitionScene";
import { fourthScene } from "./scenes/scene4";

export const clip = new HTMLClip({
  html,
  css,
  host: document.getElementById("clip"),
  initParams: initParams[0].value,
  fonts: [
    {
      type: "google-font",
      src: "https://fonts.googleapis.com/css2?family=Creepster&display=swap",
    },
    {
      type: "google-font",
      src: "https://fonts.googleapis.com/css2?family=Griffy&display=swap",
    },
  ],
  audioSources: [
    {
      src: "https://donkey-spaces.ams3.cdn.digitaloceanspaces.com/assets/halloween-clip/halloween.mp3",
      id: "soundtrack",
      classes: ["sounds"],
      base64: false,
    },
  ],
  containerParams: {
    width: "1920px",
    height: "1080px",
  },
});

const songPlayback = new AudioPlayback({
  selector: "~#soundtrack",
  startFrom: 0,
  duration: 35000,
});

clip.addIncident(songPlayback, 10);

const threeClip = new threejs.Clip(
  {
    renderers: {
      parameters: [],
      settings: {
        setClearColor: ["#010101"],
      },
    },
    scenes: {
      fog: ["#010101", 0, 80],
    },
    lights: [
      {
        type: "HemisphereLight",
        parameters: ["#fff", "#fff", 1],
      },
    ],
    cameras: [
      {
        id: "camera_1",
        type: "PerspectiveCamera",
        parameters: [45, 1920 / 1080, 0.01, 10000],
        settings: {
          position: { x: 1, y: -1, z: -8 },
          lookAt: [0, -1, -41],
        },
      },
    ],
    entities: [scene, ground, cameraLookAt],
    controls: { maxDistance: 50000, enable: true, enableEvents: true },
  },
  {
    selector: ".three-clip",
    containerParams: {
      width: "1920px",
      height: "1080px",
    },
  }
);
threeClip.addIncident(sceneAnimation, 0);
introScene(threeClip, clip, 0, 11000);

transitionScene(threeClip, clip, 11000, 500);
firstScene(threeClip, clip, 11250, 4000);

transitionScene(threeClip, clip, 15250, 500);
secondScene(threeClip, clip, 15500, 4000);

transitionScene(threeClip, clip, 19500, 500);
thirdScene(threeClip, clip, 19750, 4000);

fourthScene(threeClip, clip, 23750, 10000);

window.threeClip = threeClip;
// threeClip.addIncident(cameraAnimation2, 3700);
// threeClip.addIncident(cameraAnimation3, 8700);
// threeClip.addIncident(cameraAnimation4, 18700);

// clip.addIncident(
//   opacity(1, ".first-text-later", 2000, "linear", "@stagger(0, 2000)"),
//   3700
// );
// clip.addIncident(
//   opacity(0, ".first-text-later", 1000, "linear", "@stagger(0, 2000)"),
//   15000
// );
// clip.addIncident(
//   opacity(1, ".second-text-later", 2000, "linear", "@stagger(0, 2000)"),
//   15200
// );
// clip.addIncident(
//   opacity(0, ".second-text-later", 1000, "linear", "@stagger(0, 2000)"),
//   25000
// );
// clip.addIncident(opacity(1, ".subscribe-wrapper", 500, "linear"), 28500);
clip.addIncident(threeClip, 0);
