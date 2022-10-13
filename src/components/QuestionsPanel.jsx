import classes from "./QuestionsPanel.module.css";
import Question from "./Question";
import Answer from "./Answer";

export default function QuestionsPanel() {
  return (
    <div className={classes.questions}>
      <Question />
      <Answer />
      <Answer />
      <Answer />
      <Answer />
    </div>
  );
}
