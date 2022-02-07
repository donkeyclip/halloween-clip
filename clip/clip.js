import { HTMLClip, loadPlugin } from "@donkeyclip/motorcortex";
import html from "./clip.html";
import css from "!!raw-loader!./clip.css";
import {initParams } from "./initParams";
import threejsDefinition from "@donkeyclip/motorcortex-threejs";
const threejs = loadPlugin(threejsDefinition);
import {
  scene,
  sceneAnimation,
  cameraAnimation1,
  top,
  ground,
  opacity,
  cameraAnimation2,
  cameraAnimation3,
  cameraAnimation4,

} from "./incidents";

export const clip = new HTMLClip({
  html,
  css,
  host: document.getElementById("clip"),
  initParams: initParams[0].value,
  fonts: [
    {
      type: "google-font",
      src:
        "https://fonts.googleapis.com/css2?family=Creepster&display=swap"
    },
    {
      type: "google-font",
      src:
        "https://fonts.googleapis.com/css2?family=Griffy&display=swap"
    }
  ],
  containerParams: {
    width: "1920px",
    height: "1080px",
  },
});

const threeClip = new threejs.Clip(
  {
    postProcessing: {
      bloomPass: {
        parameters: [1.5, 0.4, 0.85],
        settings: {
          threshold: 0,
          strength: .3,
          radius: 1,
        },
      },
    },
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
        parameters: [45, 1920 / 1080, 1, 1000000],
        settings: {
          position: {x: 1.091, y: -0.999, z: -8.085},
          lookAt: [0, -1, -41],
          far: 100000,
          near: 1,
        },
      },
    ],
    entities: [
      scene,
      ground,
    ],
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
threeClip.addIncident(sceneAnimation,0)
threeClip.addIncident(cameraAnimation1,0)
threeClip.addIncident(cameraAnimation2,3700)
threeClip.addIncident(cameraAnimation3,8700)
threeClip.addIncident(cameraAnimation4,18700)

clip.addIncident(top("50%",".welcome-text-wrapper",1500),500)
clip.addIncident(opacity(0,".later",300,"linear","@stagger(100, 300,.5,linear,omni)"),3000)
clip.addIncident(opacity(1,".first-text-later",2000,"linear","@stagger(0, 2000)"),3700)
clip.addIncident(opacity(0,".first-text-later",1000,"linear","@stagger(0, 2000)"),15000)
clip.addIncident(opacity(1,".second-text-later",2000,"linear","@stagger(0, 2000)"),15200)
clip.addIncident(opacity(0,".second-text-later",1000,"linear","@stagger(0, 2000)"),25000)
clip.addIncident(opacity(1,".subscribe-wrapper",500,"linear"),28500)
clip.addIncident(threeClip, 0);
