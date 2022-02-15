import { animate } from "../incidents";

export const transitionScene = (threeClip, clip, fromDuration, toDuration) => {
  // show the welcome text
  clip.addIncident(
    animate({ opacity: 1 }, ".curtain", toDuration * 0.5),
    fromDuration
  );
  clip.addIncident(
    animate({ opacity: 0 }, ".curtain", toDuration * 0.5),
    fromDuration + toDuration * 0.5
  );
};
