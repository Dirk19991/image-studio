import classes from "./Answer.module.css";
import classNames from "classnames/bind";
import { useState, useEffect } from "react";

export default function Answer({
  answer,
  index,
  progress,
  setProgress,
  answered,
  setAnswered,
  correct,
  setCorrect,
  fiftyFifty,
  setFiftyFifty,
  correctAnswer,
  incorrectAnswers,
}) {
  const answerLetters = ["A", "B", "C", "D"];

  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    setClicked(false);
    setAnswered(false);
    setFiftyFifty((prev) => {
      return { ...prev, active: false };
    });
  }, [progress, setAnswered, setFiftyFifty]);

  let cx = classNames.bind(classes);

  let className = cx({
    answer: true,
    clicked: clicked === true,
    correct: correct.correctHighlighted === true && answer === correctAnswer,
    invisible:
      fiftyFifty.active === true &&
      (answer === incorrectAnswers[0] || answer === incorrectAnswers[1]),
  });

  return (
    <div
      onClick={
        answered
          ? () => {}
          : () => {
              setAnswered(true);
              setClicked(true);

              setTimeout(() => {
                if (answer === correctAnswer && progress === 15) {
                  setCorrect({
                    correctHighlighted: true,
                    lostGame: false,
                    finishedGame: true,
                  });
                } else if (answer === correctAnswer) {
                  setCorrect({
                    correctHighlighted: true,
                    lostGame: false,
                    finishedGame: false,
                  });

                  setTimeout(() => {
                    setProgress((prev) => prev + 1);
                    setAnswered(false);
                    setClicked(false);
                    setCorrect({
                      correctHighlighted: false,
                      lostGame: false,
                      finishedGame: false,
                    });

                    if (fiftyFifty.active) {
                      setFiftyFifty({ active: false, used: true });
                    }
                  }, 1000);
                } else {
                  setCorrect({
                    correctHighlighted: true,
                    lostGame: true,
                    finishedGame: true,
                  });
                }
              }, 1000);
            }
      }
      className={className}
    >
      <span className={classes.letter}>{answerLetters[index]}: </span>{" "}
      <span>{answer}</span>
    </div>
  );
}
