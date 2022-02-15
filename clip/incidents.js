import { loadPlugin, CSSEffect } from "@donkeyclip/motorcortex";
import threejsDefinition from "@donkeyclip/motorcortex-threejs";
const threejs = loadPlugin(threejsDefinition);

const DtR = (deg) => deg * (Math.PI / 180);

export const animate = (
  animatedAttrs,
  selector,
  duration,
  easing = "linear",
  delay = 0
) =>
  new CSSEffect(
    {
      animatedAttrs,
    },
    {
      selector,
      duration,
      easing,
      delay,
    }
  );
export const cameraLookAt = {
  id: "cameraLookAt",
  object: true,
  settings: {
    position: { x: 0, y: -1, z: -45 },
  },
};
export const opacity = (
  value,
  selector,
  duration,
  easing = "linear",
  delay = 0
) =>
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
      delay,
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
          "https://donkey-spaces.ams3.cdn.digitaloceanspaces.com/assets/halloween-clip/ground.png",
      },
    ],
  },
  settings: {
    position: { x: 1.325, y: -0.7, z: -9.14 },
  },
};
export const scene = {
  id: "scene",
  model: {
    loader: "GLTFLoader",
    file: "https://donkey-spaces.ams3.cdn.digitaloceanspaces.com/assets/halloween-clip/halloween.glb",
  },
  settings: {
    position: { x: 0, y: 0, z: 0 },
  },
};

export const sceneAnimation = new threejs.MorphAnimation(
  {
    attrs: {
      singleLoopDuration: 35000,
      animationName: "Take 001",
    },
    animatedAttrs: {
      time: 35000,
    },
  },
  {
    selector: "!#scene",
    duration: 35000,
  }
);

export const cameraAnimation = (position, duration, easing = "linear") => {
  return new threejs.ObjectAnimation(
    {
      animatedAttrs: {
        position,
        targetEntity: "!#cameraLookAt",
      },
    },
    {
      selector: "!#camera_1",
      duration,
      easing,
    }
  );
};
export const objectAnimation = (position, duration) => {
  return new threejs.ObjectAnimation(
    {
      animatedAttrs: {
        position,
      },
    },
    {
      selector: "!#cameraLookAt",
      duration,
    }
  );
};
