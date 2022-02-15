import { animate, cameraAnimation } from "../incidents";

export const introScene = (threeClip, clip, fromDuration, toDuration) => {
  // show the welcome text
  clip.addIncident(
    animate({ opacity: 0.84 }, ".curtain", toDuration * 0.2),
    fromDuration + toDuration * 0.06
  );
  clip.addIncident(
    animate({ opacity: 1 }, ".welcome-text-wrapper", toDuration * 0.2),
    fromDuration + toDuration * 0.06
  );
  //   hide the curtain
  clip.addIncident(
    animate({ opacity: 0 }, ".curtain", toDuration * 0.4),
    fromDuration + toDuration * 0.53
  );

  //   got to the moon scene
  threeClip.addIncident(
    cameraAnimation({ x: 1, y: 1, z: -8 }, toDuration * 0.4, "easeOutCubic"),
    fromDuration + toDuration * 0.53
  );
  //   hide the welcome text
  clip.addIncident(
    animate({ opacity: 0 }, ".welcome-text-wrapper", toDuration * 0.06),
    fromDuration + toDuration * 0.93
  );
};
