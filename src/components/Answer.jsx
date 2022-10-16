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
}) {
  const answerLetters = ["A", "B", "C", "D"];
  const correctAnswer = data.filter((elem) => elem.id === progress)[0]
    .correctAnswer;

  const [clicked, setClicked] = useState(false);
  const [correct, setCorrect] = useState(false);

  let cx = classNames.bind(classes);

  let className = cx({
    answer: true,
    clicked: clicked === true,
    correct: correct === true,
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
                  }, 700);
                }
              }, 700);
            }
      }
      className={className}
    >
      <span className={classes.letter}>{answerLetters[index]}: </span> {answer}
    </div>
  );
}
