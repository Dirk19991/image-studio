import classes from "./Answer.module.css";

export default function Answer({ answer, index, progress }) {
  const answers = ["A", "B", "C", "D"];

  return (
    <div className={classes.answer}>
      <span className={classes.letter}>{answers[index]}: </span> {answer}
    </div>
  );
}
