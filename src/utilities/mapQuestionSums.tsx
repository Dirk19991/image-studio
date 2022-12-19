import { Question } from '../features/progressPanel/Sums';
import classes from '../features/progressPanel/Sums.module.css';

export function mapQuestionSums(elem: Question) {
  return elem.id % 5 === 0 ? (
    <div key={elem.id} className={classes.white}>
      {new Intl.NumberFormat('en-US').format(elem.price)}
    </div>
  ) : (
    <div key={elem.id}>{new Intl.NumberFormat('en-US').format(elem.price)}</div>
  );
}
