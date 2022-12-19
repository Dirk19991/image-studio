import classNames from 'classnames/bind';
import classes from '../features/progressPanel/Sums.module.css';
import { Question } from '../features/progressPanel/Sums';

export function mapQuestionNumbers(elem: Question) {
  const white = elem.id % 5 === 0;

  let cx = classNames.bind(classes);
  let className = cx({
    white: white,
  });
  return (
    <div key={elem.id} className={className}>
      {elem.id}
    </div>
  );
}
