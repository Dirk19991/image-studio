import data from "../data/questions.json";
import classes from "./Sums.module.css";
import classNames from "classnames/bind";

export default function Sums({ progress, setProgress }) {
  return (
    <div className={classes.sums}>
      <div className={classes.questionNumbers}>
        {data
          .sort((a, b) => b.price - a.price)
          .map((elem) => {
            const white = elem.id % 5 === 0;
            const highlighted = elem.id === progress;
            const highlightedWhite = elem.id === progress && elem.id % 5 === 0;
            const highlightedIsOne =
              elem.id === progress && (elem.id === 1 || elem.id === 11);
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
          })}
      </div>
      <div className={classes.questionSums}>
        {data
          .sort((a, b) => b.price - a.price)
          .map((elem) =>
            elem.id % 5 === 0 ? (
              <div key={elem.id} className={classes.white}>
                {new Intl.NumberFormat("en-US").format(elem.price)}
              </div>
            ) : (
              <div key={elem.id}>
                {new Intl.NumberFormat("en-US").format(elem.price)}
              </div>
            )
          )}
      </div>
    </div>
  );
}
