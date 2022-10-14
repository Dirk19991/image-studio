import { useState } from "react";
import classes from "./StartScreen.module.css";

export default function StartScreen({ setProgress }) {
  const [animation, setAnimation] = useState(false);

  return (
    <div
      className={
        animation ? `${classes.wrapper} ${classes.animation}` : classes.wrapper
      }
    >
      <div className={classes.title}>
        Кто хочет стать миллионером? (Frontend edition)
      </div>
      <div
        onClick={() => {
          setAnimation(true);
          setTimeout(() => {
            setProgress(1);
          }, 600);
        }}
        className={classes.start}
      >
        Начать игру
      </div>
      ;
    </div>
  );
}
