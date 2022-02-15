import { animate, cameraAnimation, objectAnimation } from "../incidents";

export const secondScene = (threeClip, clip, fromDuration, toDuration) => {
  //   got object
  threeClip.addIncident(
    objectAnimation({ x: 6, y: 0.7, z: -7 }, 1),
    fromDuration
  );
  threeClip.addIncident(
    cameraAnimation({ x: 6.8, y: 0.7, z: -4.5 }, 1),
    fromDuration
  );
  threeClip.addIncident(
    cameraAnimation({ x: 6.8, y: 0.7, z: -4.5 }, toDuration - 1),
    fromDuration + 1
  );
};
