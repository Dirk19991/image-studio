import classes from './Answer.module.css';
import classNames from 'classnames/bind';

import { useDispatch, useSelector } from 'react-redux';
import {
  winGame,
  nextQuestion,
  loseGame,
} from '../progressPanel/progressSlice';
import { setClicked, setHighlighted, setAnswered } from './answerSlice';
import { RootState } from '../../store';

interface AnswerProps {
  answer: string;
  index: number;
  correctAnswer: string;
}

export default function Answer({ answer, index, correctAnswer }: AnswerProps) {
  const dispatch = useDispatch();
  const progress = useSelector((state: RootState) => state.progress.progress);
  const fiftyfifty = useSelector(
    (state: RootState) => state.progress.fiftyFifty
  );
  const highlighted = useSelector(
    (state: RootState) => state.answer.highlighted
  );
  const answered = useSelector((state: RootState) => state.answer.answered);
  const clicked = useSelector(
    (state: RootState) => state.answer.clicked[index]
  );
  const incorrectAnswers = useSelector(
    (state: RootState) => state.incorrectAnswers.answers
  );
  const answerLetters = ['A', 'B', 'C', 'D'];

  const onClickAnswer = () => {
    dispatch(setAnswered(true));
    dispatch(setClicked({ clicked: true, index: index }));

    setTimeout(() => {
      if (answer === correctAnswer && progress === 15) {
        dispatch(winGame());
      } else if (answer === correctAnswer) {
        dispatch(setHighlighted(true));
        setTimeout(() => {
          dispatch(nextQuestion());
        }, 1000);
      } else {
        dispatch(loseGame());
      }
    }, 1000);
  };

  let cx = classNames.bind(classes);

  let className = cx({
    answer: true,
    clicked: clicked === true,
    correct: highlighted === true && answer === correctAnswer,
    invisible:
      fiftyfifty.active === true &&
      (answer === incorrectAnswers[0] || answer === incorrectAnswers[1]),
  });

  return (
    <div onClick={answered ? () => {} : onClickAnswer} className={className}>
      <span className={classes.letter}>{answerLetters[index]}: </span>{' '}
      <span>{answer}</span>
    </div>
  );
}
