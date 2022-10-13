import data from "../data/questions.json";
import classes from "./Sums.module.css";
export default function Sums() {
  return (
    <div className={classes.sums}>
      <div className={classes.questionNumbers}>
        {data
          .sort((a, b) => b.price - a.price)
          .map((elem) =>
            elem.id % 5 === 0 ? (
              <div className={classes.white}>{elem.id}</div>
            ) : (
              <div>{elem.id}</div>
            )
          )}
      </div>
      <div className={classes.questionSums}>
        {data
          .sort((a, b) => b.price - a.price)
          .map((elem) =>
            elem.id % 5 === 0 ? (
              <div className={classes.white}>
                {new Intl.NumberFormat("en-US").format(elem.price)}
              </div>
            ) : (
              <div>{new Intl.NumberFormat("en-US").format(elem.price)}</div>
            )
          )}
      </div>
    </div>
  );
}
