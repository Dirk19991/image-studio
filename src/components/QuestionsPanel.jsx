import classes from "./QuestionsPanel.module.css";
import Question from "./Question";
import Answer from "./Answer";
import data from "../data/questions.json";

export default function QuestionsPanel({ progress, setProgress }) {
  const answers = data.filter((elem) => elem.id === progress)[0].answers;

  return (
    <div className={classes.questions}>
      <div className={classes.header}>Вопрос {progress}</div>
      <Question progress={progress} />
      <div className={classes.answers}>
        {answers.map((answer, index) => (
          <Answer answer={answer} index={index} progress={progress} />
        ))}
      </div>
    </div>
  );
}
