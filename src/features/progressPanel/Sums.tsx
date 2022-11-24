import data from '../../data/questions.json';
import classes from './Sums.module.css';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export default function Sums() {
  const reduxProgress = useSelector(
    (state: RootState) => state.progress.progress
  );

  interface Question {
    id: number;
    question: string;
    price: number;
    answers: string[];
    incorrectAnswers: string[];
    correctAnswer: string;
  }

  function mapQuestionNumbers(elem: Question) {
    const white = elem.id % 5 === 0;
    const highlighted = elem.id === reduxProgress;
    const highlightedWhite = elem.id === reduxProgress && elem.id % 5 === 0;
    const highlightedIsOne =
      elem.id === reduxProgress && (elem.id === 1 || elem.id === 11);
    let cx = classNames.bind(classes);
    let className = cx({
      white: white,
      highlighted: highlighted,
      highlightedWhite: highlightedWhite,
      highlightedIsOne: highlightedIsOne,
    });
    return (
      <div key={elem.id} className={className}>
        {elem.id}
      </div>
    );
  }

  function mapQuestionSums(elem: Question) {
    return elem.id % 5 === 0 ? (
      <div key={elem.id} className={classes.white}>
        {new Intl.NumberFormat('en-US').format(elem.price)}
      </div>
    ) : (
      <div key={elem.id}>
        {new Intl.NumberFormat('en-US').format(elem.price)}
      </div>
    );
  }

  return (
    <div className={classes.sums}>
      <div className={classes.questionNumbers}>
        {data.sort((a, b) => b.price - a.price).map(mapQuestionNumbers)}
      </div>
      <div className={classes.questionSums}>
        {data.sort((a, b) => b.price - a.price).map(mapQuestionSums)}
      </div>
    </div>
  );
}
