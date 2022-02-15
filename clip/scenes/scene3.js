import { animate, cameraAnimation, objectAnimation } from "../incidents";

export const thirdScene = (threeClip, clip, fromDuration, toDuration) => {
  //   got object
  threeClip.addIncident(
    objectAnimation({ x: 1, y: 1, z: -9 }, 1),
    fromDuration
  );
  threeClip.addIncident(
    cameraAnimation({ x: 4, y: 1, z: -9 }, 1),
    fromDuration
  );
  threeClip.addIncident(
    cameraAnimation({ x: 4, y: 1, z: -9 }, toDuration - 1),
    fromDuration + 1
  );
};
