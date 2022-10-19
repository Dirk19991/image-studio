import classes from "./QuestionsPanel.module.css";
import Question from "./Question";
import Answer from "./Answer";
import data from "../data/questions.json";
import { useState } from "react";
import calculatePrize from "../utilities/calculatePrize";

export default function QuestionsPanel({
  progress,
  setProgress,
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

  const answers = data.filter((elem) => elem.id === progress)[0].answers;
  const prize = calculatePrize(progress, correct.lostGame);

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
                setProgress(1);
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
            {progress !== 15 && (
              <button
                onClick={() => {
                  setProgress(progress + 1);
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
        <div className={classes.header}>Вопрос {progress}</div>
        <Question progress={progress} />
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
              progress={progress}
              setProgress={setProgress}
              correctAnswer={correctAnswer}
              incorrectAnswers={incorrectAnswers}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
