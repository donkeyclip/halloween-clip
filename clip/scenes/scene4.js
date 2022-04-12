import { animate, cameraAnimation, objectAnimation } from "../incidents";

export const fourthScene = (
  threeClip,
  clip,
  fromDuration,
  toDuration = 1000
) => {
  // got object
  threeClip.addIncident(
    objectAnimation({ x: 1, y: 1, z: -8 }, parseInt(toDuration * 0.2)),
    fromDuration
  );

  threeClip.addIncident(
    objectAnimation({ x: 1, y: 1, z: -0 }, toDuration * 0.3),
    fromDuration + toDuration * 0.4
  );
  threeClip.addIncident(
    objectAnimation({ x: 1, y: 1, z: -6 }, toDuration * 0.3),
    fromDuration + toDuration * 0.7
  );

  //   stay and watch object
  threeClip.addIncident(
    cameraAnimation(
      { x: 4, y: 1, z: -9 },
      parseInt(toDuration * 0.1),
      "easeInOutExpo"
    ),
    fromDuration
  );
  //   move to street
  threeClip.addIncident(
    cameraAnimation({ x: 0.5, y: 1, z: -9.6 }, parseInt(toDuration * 0.3)),
    fromDuration + parseInt(toDuration * 0.1) + 1
  );

  //   move to lake
  threeClip.addIncident(
    cameraAnimation(
      { x: 6, y: 1, z: -1 },
      parseInt(toDuration * 0.2),
      "easeInOutSine"
    ),
    fromDuration + parseInt(toDuration * 0.4) + 1
  );

  //   move to pumkin
  threeClip.addIncident(
    cameraAnimation(
      { x: 1, y: 1, z: 1 },
      parseInt(toDuration * 0.3),
      "easeInOutExpo"
    ),
    fromDuration + parseInt(toDuration * 0.6) + 1
  );
  threeClip.addIncident(
    cameraAnimation({ x: 1, y: 2, z: 9 }, toDuration * 0.1, "easeOutSine"),
    fromDuration + parseInt(toDuration * 0.9) + 1
  );
};

