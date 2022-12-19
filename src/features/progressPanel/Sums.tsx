import data from '../../data/questions.json';
import classes from './Sums.module.css';
import { memo } from 'react';
import { mapQuestionSums } from '../../utilities/mapQuestionSums';
import { mapQuestionNumbers } from '../../utilities/mapQuestionNumbers';

export interface Question {
  id: number;
  question: string;
  price: number;
  answers: string[];
  incorrectAnswers: string[];
  correctAnswer: string;
}

export default memo(function Sums() {
  const questionNumbers = data
    .sort((a, b) => b.price - a.price)
    .map((elem) => mapQuestionNumbers(elem));
  const questionSums = data
    .sort((a, b) => b.price - a.price)
    .map(mapQuestionSums);

  return (
    <div className={classes.sums}>
      <div className={classes.questionNumbers}>{questionNumbers}</div>
      <div className={classes.questionSums}>{questionSums}</div>
    </div>
  );
});
