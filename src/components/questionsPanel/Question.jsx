import classes from './Question.module.css';
import data from '../../data/questions.json';
import { useSelector } from 'react-redux';

export default function Question() {
  const reduxProgress = useSelector((state) => state.progress.progress);

  const question = data.filter((elem) => elem.id === reduxProgress)[0].question;

  return <div className={classes.question}>{question}</div>;
}
