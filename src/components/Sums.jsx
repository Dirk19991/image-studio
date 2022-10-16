import data from "../data/questions.json";
import classes from "./Sums.module.css";
import classNames from "classnames/bind";

export default function Sums({ progress, setProgress }) {
  return (
    <div className={classes.sums}>
      <div className={classes.questionNumbers}>
        {data
          .sort((a, b) => b.price - a.price)
          .map((elem) =>
            elem.id % 5 === 0 ? (
              <div key={elem.id} className={classes.white}>
                {elem.id}
              </div>
            ) : (
              <div key={elem.id}>{elem.id}</div>
            )
          )}
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
