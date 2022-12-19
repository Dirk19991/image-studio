import { useState } from 'react';
import classes from './StartScreen.module.css';
import { setProgress } from '../progressPanel/progressSlice';
import { useAppDispatch } from '../../store';

export default function StartScreen() {
  const [animation, setAnimation] = useState(false);

  const dispatch = useAppDispatch();

  const handleStartGame = () => {
    setAnimation(true);
    setTimeout(() => {
      dispatch(setProgress(1));
    }, 600);
  };

  const animationStyles = animation
    ? `${classes.wrapper} ${classes.animation}`
    : classes.wrapper;

  return (
    <div className={animationStyles}>
      <div className={classes.title}>
        Кто хочет стать миллионером? (Frontend edition)
      </div>
      <div onClick={handleStartGame} className={classes.start}>
        Начать игру
      </div>
    </div>
  );
}
