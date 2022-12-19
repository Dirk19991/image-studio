import classes from './QuestionsPanel.module.css';
import Question from './Question';
import Answer from './Answer';
import Help from '../progressPanel/Help';
import data from '../../data/questions.json';
import { calculateSum } from '../../utilities/calculateSum';
import { useAppDispatch, useAppSelector } from '../../store';
import { startGame, continueGame } from '../progressPanel/progressSlice';
import calculatePrize from '../../utilities/calculatePrize';
import calculateFriendAnswer from '../../utilities/calculateFriendAnswer';
import calculateAudiencePercentage from '../../utilities/calculateAudiencePercentage';
import { useMediaQuery } from 'react-responsive';

interface QuestionsPanelProps {
  className?: string;
  correctAnswer: string;
}

export default function QuestionsPanel({ correctAnswer }: QuestionsPanelProps) {
  const progress = useAppSelector((state) => state.progress.progress);
  const finishedGame = useAppSelector((state) => state.progress.finishedGame);
  const lostGame = useAppSelector((state) => state.progress.lostGame);
  const dispatch = useAppDispatch();

  const friendAnswer = calculateFriendAnswer(progress);
  const audiencePercentage = calculateAudiencePercentage(progress);

  const answers = data.filter((elem) => elem.id === progress)[0].answers;
  const prize = calculatePrize(progress, lostGame);

  const isMobile = useMediaQuery({ query: '(max-width: 820px)' });

  const formattedSum = calculateSum(progress === null ? 1 : progress);

  const startGameHandler = () => {
    dispatch(startGame());
  };

  const continueGameHandler = () => {
    dispatch(continueGame());
  };

  return (
    <div className={finishedGame ? classes.questions : classes.questionsNoWin}>
      {finishedGame && (
        <div className={classes.win}>
          <div>Выигрыш: {prize}</div>
          <div className={classes.buttonWrapper}>
            <button onClick={startGameHandler} className={classes.button}>
              Сыграть снова
            </button>
            {progress !== 15 && (
              <button onClick={continueGameHandler} className={classes.button}>
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
            <div className={classes.mobile}>{formattedSum}</div>
          </>
        ) : (
          <div className={classes.mobile}>{formattedSum}</div>
        )}
        {isMobile ? (
          <div className={classes.header}>Вопрос {progress} / 15</div>
        ) : (
          <div className={classes.header}>Вопрос {progress}</div>
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
