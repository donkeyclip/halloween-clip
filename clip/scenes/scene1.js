import { animate, cameraAnimation, objectAnimation } from "../incidents";

export const firstScene = (threeClip, clip, fromDuration, toDuration) => {
  //   got object instanstly
  threeClip.addIncident(
    objectAnimation({ x: -1, y: 1, z: 1 }, 1),
    fromDuration
  );
  threeClip.addIncident(
    cameraAnimation({ x: 2, y: 1, z: 2.5 }, 1),
    fromDuration
  );
  threeClip.addIncident(
    cameraAnimation({ x: 2, y: 1, z: 2.5 }, toDuration - 1),
    fromDuration + 1
  );
};
