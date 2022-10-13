import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import classes from "./Help.module.css";

export default function Help() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.help}>50:50</div>
      <div className={classes.help}>
        <FontAwesomeIcon icon={faPhone} size="xl" />
      </div>
      <div className={classes.help}>
        <FontAwesomeIcon icon={faPeopleGroup} size="xl" />
      </div>
    </div>
  );
}
