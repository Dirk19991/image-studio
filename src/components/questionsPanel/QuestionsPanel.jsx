import classes from './QuestionsPanel.module.css';
import Question from './Question';
import Answer from './Answer';
import data from '../../data/questions.json';
import { useDispatch, useSelector } from 'react-redux';
import {
  setProgress,
  setFiftyFifty,
  setFriendCall,
  setAudienceHelp,
  setFinishedGame,
  setLostGame,
} from '../../features/progress/progressSlice';
import { setHighlighted } from '../../features/answer/answerSlice';
import calculatePrize from '../../utilities/calculatePrize';

export default function QuestionsPanel({ correctAnswer, incorrectAnswers }) {
  const reduxProgress = useSelector((state) => state.progress.progress);
  const reduxFinishedGame = useSelector((state) => state.progress.finishedGame);
  const reduxLostGame = useSelector((state) => state.progress.lostGame);
  const dispatch = useDispatch();

  const answers = data.filter((elem) => elem.id === reduxProgress)[0].answers;
  const prize = calculatePrize(reduxProgress, reduxLostGame);

  function startAgain() {
    dispatch(setProgress(null));
    dispatch(setHighlighted(false));
    dispatch(setLostGame(false));
    dispatch(setFinishedGame(false));
    dispatch(setFiftyFifty({ used: false, active: false }));
    dispatch(setFriendCall({ used: false }));
    dispatch(setAudienceHelp({ used: false }));
  }

  function continueGame() {
    dispatch(setProgress(reduxProgress + 1));
    dispatch(setHighlighted(false));
    dispatch(setLostGame(false));
    dispatch(setFinishedGame(false));
  }

  return (
    <div
      className={reduxFinishedGame ? classes.questions : classes.questionsNoWin}
    >
      {reduxFinishedGame && (
        <div className={classes.win}>
          <div>Выигрыш: {prize}</div>
          <div className={classes.buttonWrapper}>
            <button onClick={startAgain} className={classes.button}>
              Сыграть снова
            </button>
            {reduxProgress !== 15 && (
              <button onClick={continueGame} className={classes.button}>
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
