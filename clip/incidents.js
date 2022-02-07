import { loadPlugin,CSSEffect } from "@donkeyclip/motorcortex";
import threejsDefinition from "@donkeyclip/motorcortex-threejs";
const threejs = loadPlugin(threejsDefinition);


const DtR = (deg) => deg * (Math.PI/180);


export const top = (value,selector, duration, easing = "linear",delay = 0,) =>
new CSSEffect(
  {
    animatedAttrs: {
      top: value,
    },
  },
  {
    selector,
    duration,
    easing,
    delay
  }
);
export const opacity = (value,selector, duration, easing = "linear",delay = 0,) =>
new CSSEffect(
  {
    animatedAttrs: {
      opacity: value,
    },
  },
  {
    selector,
    duration,
    easing,
    delay
  }
);

export const ground = {
  geometry: { type: "PlaneGeometry", parameters: [2.65, 1.5] },
  material: {
    type: "MeshBasicMaterial",
    parameters: [
      {
        color: "#999",
        side: "DoubleSide",
        textureMap:
          "./assets/ground.png",
      },
    ],
  },
  settings: {
    position: {x: 1.325, y: -0.7, z: -9.140},
  },
}



export const scene = {
  id: "scene",
  model: {
    loader: "GLTFLoader",
    file: "./assets/halloween.glb",
  },
  settings: {
    position: { x: 0, y: 0, z: 0 },
  },
};

export const sceneAnimation = new threejs.MorphAnimation(
  {
    attrs: {
      singleLoopDuration: 20000,
      animationName: "Take 001",
    },
    animatedAttrs: {
      time: 25000,
    },
  },
  {
    selector: "!#scene",
    duration: 30000,
  }
);

const cameraAnimation = (position,duration,rotation) => {

  if(rotation) {
    return new threejs.ObjectAnimation(
      {
        animatedAttrs: {
          position,
          rotation
        },
      },
      {
        selector: "!#camera_1",
        duration
      }
    );
}
  return new threejs.ObjectAnimation(
    {
      animatedAttrs: {
        position,
      },
    },
    {
      selector: "!#camera_1",
      duration
    }
  );
};
export const cameraAnimation1 = cameraAnimation({x: 1.091, y: 1.456, z: -8.085},2000);
export const cameraAnimation2 = cameraAnimation({x: 1.091, y: 1.456, z: -8.085},5000,{x: 0, y: DtR(-190), z: 0});
export const cameraAnimation3 = cameraAnimation({x: 1.091, y: 1.456, z: 1},10000,{x: 0, y: DtR(-190), z: 0});
export const cameraAnimation4 = cameraAnimation({x: -2.091, y: 1.456, z: 3},10000,{x: 0, y: DtR(-380), z: 0});
