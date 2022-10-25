import classes from './Question.module.css';
import data from '../../data/questions.json';

export default function Question({ progress }) {
  const question = data.filter((elem) => elem.id === progress)[0].question;

  return <div className={classes.question}>{question}</div>;
}
