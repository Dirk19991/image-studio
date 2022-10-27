import classes from './Answer.module.css';
import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setProgress,
  setFiftyFifty,
  setFinishedGame,
  setLostGame,
} from '../../features/progress/progressSlice';
import {
  setClicked,
  setHighlighted,
  setAnswered,
} from '../../features/answer/answerSlice';

export default function Answer({
  answer,
  index,
  correctAnswer,
  incorrectAnswers,
}) {
  const dispatch = useDispatch();
  const reduxProgress = useSelector((state) => state.progress.progress);
  const reduxFiftyFifty = useSelector((state) => state.progress.fiftyFifty);
  const reduxHighlighted = useSelector((state) => state.answer.highlighted);
  const reduxAnswered = useSelector((state) => state.answer.answered);
  const reduxClicked = useSelector((state) => state.answer.clicked[index]);
  const answerLetters = ['A', 'B', 'C', 'D'];

  function onClickAnswer() {
    dispatch(setAnswered(true));
    dispatch(setClicked({ clicked: true, index: index }));

    setTimeout(() => {
      if (answer === correctAnswer && reduxProgress === 15) {
        dispatch(setHighlighted(true));
        dispatch(setLostGame(false));
        dispatch(setFinishedGame(true));
      } else if (answer === correctAnswer) {
        dispatch(setLostGame(false));
        dispatch(setFinishedGame(false));
        dispatch(setHighlighted(true));

        setTimeout(() => {
          dispatch(setProgress(reduxProgress + 1));
          dispatch(setAnswered(false));
          dispatch(setClicked({ clicked: false, index: index }));
          dispatch(setHighlighted(false));
          dispatch(setLostGame(false));
          dispatch(setFinishedGame(false));

          if (reduxFiftyFifty.active) {
            dispatch(setFiftyFifty({ active: false, used: true }));
          }
        }, 1000);
      } else {
        dispatch(setHighlighted(true));
        dispatch(setLostGame(true));
        dispatch(setFinishedGame(true));
      }
    }, 1000);
  }

  useEffect(() => {
    dispatch(setClicked({ clicked: false, index: index }));
    dispatch(setAnswered(false));
  }, [reduxProgress, index, dispatch]);

  let cx = classNames.bind(classes);

  let className = cx({
    answer: true,
    clicked: reduxClicked === true,
    correct: reduxHighlighted === true && answer === correctAnswer,
    invisible:
      reduxFiftyFifty.active === true &&
      (answer === incorrectAnswers[0] || answer === incorrectAnswers[1]),
  });

  return (
    <div
      onClick={reduxAnswered ? () => {} : onClickAnswer}
      className={className}
    >
      <span className={classes.letter}>{answerLetters[index]}: </span>{' '}
      <span>{answer}</span>
    </div>
  );
}
