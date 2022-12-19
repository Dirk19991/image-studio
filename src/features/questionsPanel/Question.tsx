import React from 'react';
import classes from './Question.module.css';
import data from '../../data/questions.json';
import { useAppSelector } from '../../store';

export default function Question() {
  const progress = useAppSelector((state) => state.progress.progress);

  const question = data.filter((elem) => elem.id === progress)[0].question;

  return <div className={classes.question}>{question}</div>;
}
