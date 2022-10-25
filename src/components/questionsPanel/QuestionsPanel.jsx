import classes from './QuestionsPanel.module.css';
import Question from './Question';
import Answer from './Answer';
import data from '../../data/questions.json';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProgress } from '../../features/progress/progressSlice';
import calculatePrize from '../../utilities/calculatePrize';

export default function QuestionsPanel({
  fiftyFifty,
  setFiftyFifty,
  setFriendCall,
  setAudience,
  correctAnswer,
  incorrectAnswers,
}) {
  const [answered, setAnswered] = useState(false);
  const [correct, setCorrect] = useState({
    correctHighlighted: false,
    lostGame: false,
    finishedGame: false,
  });
  const reduxProgress = useSelector((state) => state.progress.progress);
  const dispatch = useDispatch();

  const answers = data.filter((elem) => elem.id === reduxProgress)[0].answers;
  const prize = calculatePrize(reduxProgress, correct.lostGame);

  return (
    <div
      className={
        correct.finishedGame ? classes.questions : classes.questionsNoWin
      }
    >
      {correct.finishedGame && (
        <div className={classes.win}>
          <div>Выигрыш: {prize}</div>
          <div className={classes.buttonWrapper}>
            <button
              onClick={() => {
                dispatch(setProgress(null));
                setCorrect({
                  correctHighlighted: false,
                  lostGame: false,
                  finishedGame: false,
                });
                setFiftyFifty({ used: false, active: false });
                setFriendCall({ used: false });
                setAudience({ used: false });
              }}
              className={classes.button}
            >
              Сыграть снова
            </button>
            {reduxProgress !== 15 && (
              <button
                onClick={() => {
                  dispatch(setProgress(reduxProgress + 1));
                  setCorrect({
                    correctHighlighted: false,
                    lostGame: false,
                    finishedGame: false,
                  });
                }}
                className={classes.button}
              >
                Пропустить вопрос и продолжить игру
              </button>
            )}
          </div>
        </div>
      )}
      <div>
        <div className={classes.header}>Вопрос {reduxProgress}</div>
        <Question />
        <div className={classes.answers}>
          {answers.map((answer, index) => (
            <Answer
              fiftyFifty={fiftyFifty}
              setFiftyFifty={setFiftyFifty}
              answered={answered}
              setAnswered={setAnswered}
              correct={correct}
              setCorrect={setCorrect}
              key={index}
              answer={answer}
              index={index}
              correctAnswer={correctAnswer}
              incorrectAnswers={incorrectAnswers}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
