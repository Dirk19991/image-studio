import { useState } from 'react';
import { useDispatch } from 'react-redux';
import classes from './StartScreen.module.css';
import { setProgress } from '../progressPanel/progressSlice';

export default function StartScreen() {
  const [animation, setAnimation] = useState(false);

  const dispatch = useDispatch();

  const handleStartGame = () => {
    setAnimation(true);
    setTimeout(() => {
      dispatch(setProgress(1));
    }, 600);
  };

  return (
    <div
      className={
        animation ? `${classes.wrapper} ${classes.animation}` : classes.wrapper
      }
    >
      <div className={classes.title}>
        Кто хочет стать миллионером? (Frontend edition)
      </div>
      <div onClick={handleStartGame} className={classes.start}>
        Начать игру
      </div>
    </div>
  );
}
