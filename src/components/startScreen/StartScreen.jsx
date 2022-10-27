import { useState } from 'react';
import { useDispatch } from 'react-redux';
import classes from './StartScreen.module.css';
import { setProgress } from '../../features/progress/progressSlice';

export default function StartScreen() {
  const [animation, setAnimation] = useState(false);

  const dispatch = useDispatch();

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
            dispatch(setProgress(1));
          }, 600);
        }}
        className={classes.start}
      >
        Начать игру
      </div>
    </div>
  );
}
