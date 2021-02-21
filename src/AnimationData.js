export const moveForeground = [
  {
    transform: "translateX(-10%)",
  },
  {
    transform: "translateX(100%)",
  },
];
export const sceneryFrames = [
  {
    transform: "translateX(100%)",
  },
  {
    transform: "translateX(-100%)",
  },
];
export const spriteFrames = [
  {
    transform: "translateY(0)",
  },
  {
    transform: "translateY(-100%)",
  },
];
export const sceneryTimingBackground = {
  duration: 36000,
  iterations: Infinity,
};
export const sceneryTimingForeground = {
  duration: 12000,
  iterations: Infinity,
};

export const spriteTiming = {
  easing: "steps(7, end)",
  direction: "reverse",
  duration: 600,
  playbackRate: 0,
  iterations: Infinity,
};
