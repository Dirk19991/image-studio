import classes from "./Answer.module.css";
import { useState } from "react";
import data from "../data/questions.json";
import classNames from "classnames/bind";

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

  let cx = classNames.bind(classes);

  let className = cx({
    answer: true,
    clicked: clicked === true,
    correct: correct === true && answer === correctAnswer,
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
                if (answer === correctAnswer) {
                  setCorrect(true);

                  setTimeout(() => {
                    setProgress((prev) => prev + 1);
                    setAnswered(false);
                    setClicked(false);
                    setCorrect(false);

                    if (fiftyFifty.active) {
                      setFiftyFifty({ active: false, used: true });
                    }
                  }, 1000);
                } else {
                  setCorrect(true);
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
