import "./App.css";
import useWebAnimations from "@wellyshen/use-web-animations";

import {
  moveForeground,
  sceneryFrames,
  spriteFrames,
  sceneryTimingBackground,
  sceneryTimingForeground,
  spirteTiming,
} from "./AnimationData";
import { useEffect } from "react";

function App() {
  const background1Movement = useWebAnimations({
    keyframes: sceneryFrames,
    timing: sceneryTimingBackground,
  });

  const background2Movement = useWebAnimations({
    keyframes: sceneryFrames,
    timing: sceneryTimingBackground,
  });
  const foreground1Movement = useWebAnimations({
    keyframes: moveForeground,
    timing: sceneryTimingForeground,
  });

  const foreground2Movement = useWebAnimations({
    keyframes: moveForeground,
    timing: sceneryTimingForeground,
  });

  const redQueen_alice = useWebAnimations({
    keyframes: spriteFrames,
    timing: spirteTiming,
  });

  const sceneries = [
    foreground1Movement,
    foreground2Movement,
    background1Movement,
    background2Movement,
  ];

  const adjustBackgroundPlayback = function () {
    if (!redQueen_alice.getAnimation()) return;
    else {
      if (redQueen_alice.getAnimation().playbackRate < 0.8) {
        sceneries.forEach(function (anim) {
          anim.playbackRate =
            (redQueen_alice.getAnimation().playbackRate / 2) * -1;
        });
      } else if (redQueen_alice.getAnimation().playbackRate > 1.2) {
        sceneries.forEach(function (anim) {
          anim.playbackRate = redQueen_alice.getAnimation().playbackRate / 2;
        });
      } else {
        sceneries.forEach(function (anim) {
          anim.playbackRate = 0;
        });
      }
    }
  };
  adjustBackgroundPlayback();

  useEffect(() => {
    const fganimation = foreground1Movement.getAnimation();
    fganimation.currentTime = fganimation.effect.getTiming().duration / 2;
    const bganimation = background1Movement.getAnimation();
    bganimation.currentTime = bganimation.effect.getTiming().duration / 2;
    setInterval(() => {
      /* Set decay */
      if (redQueen_alice.getAnimation()) {
        if (redQueen_alice.getAnimation().playbackRate > 0.4) {
          redQueen_alice.getAnimation().playbackRate *= 0.9;
        }
      } else return;
      adjustBackgroundPlayback();
    }, 3000);

    document.addEventListener("click", () => {
      redQueen_alice.getAnimation().playbackRate *= 1.1;
      adjustBackgroundPlayback();
    });
  });
  console.log(redQueen_alice);
  return (
    <div className="wrapper">
      <div className="sky"></div>
      <div className="earth">
        <div id="red-queen_and_alice">
          <img
            id="red-queen_and_alice_sprite"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png"
            srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x"
            alt="Alice and the Red Queen running to stay in place."
            ref={redQueen_alice.ref}
          />
        </div>
      </div>

      <div className="scenery" id="foreground1" ref={foreground1Movement.ref}>
        <img
          id="palm3"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png"
          srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x"
          alt=" "
        />
      </div>
      <div className="scenery" id="foreground2" ref={foreground2Movement.ref}>
        <img
          id="bush"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png"
          srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x"
          alt=" "
        />
        <img
          id="w_rook_upright"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png"
          srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x"
          alt=" "
        />
      </div>
      <div className="scenery" id="background1" ref={background1Movement.ref}>
        <img
          id="r_pawn_upright"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png"
          srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x"
          alt=" "
        />
        <img
          id="w_rook"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png"
          srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x"
          alt=" "
        />
        <img
          id="palm1"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png"
          srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x"
          alt=" "
        />
      </div>
      <div className="scenery" id="background2" ref={background2Movement.ref}>
        <img
          id="r_pawn"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png"
          srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x"
          alt=" "
        />

        <img
          id="r_knight"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png"
          srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x"
          alt=" "
        />
        <img
          id="palm2"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png"
          srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x"
          alt=" "
        />
      </div>
    </div>
  );
}
export default App;
