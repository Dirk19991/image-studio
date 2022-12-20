import classes from './Answer.module.css';
import classNames from 'classnames/bind';
import {
  winGame,
  nextQuestion,
  loseGame,
} from '../progressPanel/progressSlice';
import { setClicked, setHighlighted, setAnswered } from './answerSlice';
import { RootState } from '../../store';
import { useAppDispatch, useAppSelector } from '../../store/index';

interface AnswerProps {
  answer: string;
  index: number;
  correctAnswer: string;
}

export default function Answer({ answer, index, correctAnswer }: AnswerProps) {
  const dispatch = useAppDispatch();

  const progress = useAppSelector((state) => state.progress.progress);
  const fiftyfifty = useAppSelector((state) => state.progress.fiftyFifty);
  const highlighted = useAppSelector((state) => state.answer.highlighted);
  const answered = useAppSelector((state: RootState) => state.answer.answered);
  const clicked = useAppSelector((state) => state.answer.clicked[index]);
  const incorrectAnswers = useAppSelector(
    (state) => state.incorrectAnswers.incorrectAnswers
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

  let answerStyles = cx({
    answer: true,
    clicked: clicked === true,
    correct: highlighted === true && answer === correctAnswer,
    invisible:
      fiftyfifty.active === true &&
      (answer === incorrectAnswers[0] || answer === incorrectAnswers[1]),
  });

  return (
    <div onClick={answered ? () => {} : onClickAnswer} className={answerStyles}>
      <span className={classes.letter}>{answerLetters[index]}: </span>{' '}
      <span>{answer}</span>
    </div>
  );
}
