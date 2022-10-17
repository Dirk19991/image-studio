import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import classes from "./Help.module.css";

export default function Help({ fiftyFifty, setFiftyFifty }) {
  console.log(fiftyFifty.used);

  return (
    <div className={classes.wrapper}>
      <div
        onClick={() => {
          !fiftyFifty.used && setFiftyFifty({ active: true, used: true });
        }}
        className={
          fiftyFifty.used
            ? `${classes.help} ${classes.helpUsed}`
            : `${classes.help}`
        }
      >
        50:50
      </div>
      <div className={classes.help}>
        <FontAwesomeIcon icon={faPhone} size="xl" />
      </div>
      <div className={classes.help}>
        <FontAwesomeIcon icon={faPeopleGroup} size="xl" />
      </div>
    </div>
  );
}
