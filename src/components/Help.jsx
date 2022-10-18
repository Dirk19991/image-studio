import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import classes from "./Help.module.css";
import HelpModal from "./HelpModal";
import { useState } from "react";

export default function Help({
  fiftyFifty,
  setFiftyFifty,
  friendCall,
  setFriendCall,
  audienceHelp,
  setAudienceHelp,
  progress,
  friendAnswer,
  audiencePercentage,
}) {
  const [open, setOpen] = useState({ open: false, type: undefined });
  const handleOpen = (type) => setOpen({ open: true, type: type });
  const handleClose = (type) => setOpen({ open: false, type: type });

  let helpMessage;
  if (open.type === "friendCall") {
    helpMessage = `Ваш друг думает, что правильный ответ - ${friendAnswer}`;
  } else if (open.type === "audienceHelp") {
    helpMessage = `${audiencePercentage}% зрителей считает, что правильный ответ - ${friendAnswer}`;
  }

  return (
    <>
      <div className={classes.wrapper}>
        {open && (
          <HelpModal
            open={open}
            handleClose={handleClose}
            helpMessage={helpMessage}
          />
        )}
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

        <div
          onClick={() => {
            if (progress !== null && !friendCall.used) {
              handleOpen("friendCall");
              setFriendCall({ used: true });
            }
          }}
          className={
            friendCall.used
              ? `${classes.help} ${classes.helpUsed}`
              : `${classes.help}`
          }
        >
          <FontAwesomeIcon icon={faPhone} size="xl" />
        </div>
        <div
          onClick={() => {
            if (progress !== null && !audienceHelp.used) {
              handleOpen("audienceHelp");
              setAudienceHelp({ used: true });
            }
          }}
          className={
            audienceHelp.used
              ? `${classes.help} ${classes.helpUsed}`
              : `${classes.help}`
          }
        >
          <FontAwesomeIcon icon={faPeopleGroup} size="xl" />
        </div>
      </div>
    </>
  );
}
