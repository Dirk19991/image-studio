import classes from './QuestionsPanel.module.css';
import Question from './Question';
import Answer from './Answer';
import Help from '../progressPanel/Help';
import data from '../../data/questions.json';
import { useDispatch, useSelector } from 'react-redux';
import {
  setProgress,
  setFiftyFifty,
  setFriendCall,
  setAudienceHelp,
  setFinishedGame,
  setLostGame,
} from '../progressPanel/progressSlice';
import { setHighlighted } from './answerSlice';
import calculatePrize from '../../utilities/calculatePrize';
import calculateFriendAnswer from '../../utilities/calculateFriendAnswer';
import calculateAudiencePercentage from '../../utilities/calculateAudiencePercentage';
import { useMediaQuery } from 'react-responsive';
import { RootState } from '../../store';

interface QuestionsPanelProps {
  className?: string;
  correctAnswer: string;
}

export default function QuestionsPanel({ correctAnswer }: QuestionsPanelProps) {
  const reduxProgress = useSelector(
    (state: RootState) => state.progress.progress
  );
  const reduxFinishedGame = useSelector(
    (state: RootState) => state.progress.finishedGame
  );
  const reduxLostGame = useSelector(
    (state: RootState) => state.progress.lostGame
  );
  const reduxFiftyFifty = useSelector(
    (state: RootState) => state.progress.fiftyFifty
  );
  const dispatch = useDispatch();

  const friendAnswer = calculateFriendAnswer(reduxProgress);
  const audiencePercentage = calculateAudiencePercentage(reduxProgress);

  const answers = data.filter((elem) => elem.id === reduxProgress)[0].answers;
  const prize = calculatePrize(reduxProgress, reduxLostGame);

  const isMobile = useMediaQuery({ query: '(max-width: 820px)' });

  function calculateSum(progress: number) {
    return new Intl.NumberFormat('en-US').format(
      data.filter((elem) => elem.id === progress)[0].price
    );
  }

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
    dispatch(setProgress(reduxProgress === null ? 1 : reduxProgress + 1));
    dispatch(setHighlighted(false));
    dispatch(setLostGame(false));
    dispatch(setFinishedGame(false));
    dispatch(setFiftyFifty({ used: reduxFiftyFifty.used, active: false }));
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
        {isMobile ? (
          <>
            <Help
              friendAnswer={friendAnswer}
              audiencePercentage={audiencePercentage}
              className={classes.help}
            />
            <div className={classes.mobile}>
              {calculateSum(reduxProgress === null ? 1 : reduxProgress)}
            </div>
          </>
        ) : (
          ''
        )}
        {isMobile ? (
          <div className={classes.header}>Вопрос {reduxProgress} / 15</div>
        ) : (
          <div className={classes.header}>Вопрос {reduxProgress}</div>
        )}

        <Question />
        <div className={classes.answers}>
          {answers.map((answer, index) => (
            <Answer
              key={index}
              answer={answer}
              index={index}
              correctAnswer={correctAnswer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
