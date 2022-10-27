import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import classes from './Help.module.css';
import HelpModal from '../helpModal/HelpModal';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setFiftyFifty,
  setFriendCall,
  setAudienceHelp,
} from '../../features/progress/progressSlice';

export default function Help({ friendAnswer, audiencePercentage }) {
  const [open, setOpen] = useState({ open: false, type: undefined });
  const handleOpen = (type) => setOpen({ open: true, type: type });
  const handleClose = (type) => setOpen({ open: false, type: type });

  const dispatch = useDispatch();

  const reduxProgress = useSelector((state) => state.progress.progress);
  const reduxFiftyFifty = useSelector((state) => state.progress.fiftyFifty);
  const reduxFriendCall = useSelector((state) => state.progress.friendCall);
  const reduxAudienceHelp = useSelector((state) => state.progress.audienceHelp);

  console.log(reduxAudienceHelp);

  let helpMessage;
  if (open.type === 'friendCall') {
    helpMessage = `Ваш друг думает, что правильный ответ - ${friendAnswer}`;
  } else if (open.type === 'audienceHelp') {
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
            !reduxFiftyFifty.used &&
              dispatch(setFiftyFifty({ active: true, used: true }));
          }}
          className={
            reduxFiftyFifty.used
              ? `${classes.help} ${classes.helpUsed}`
              : `${classes.help}`
          }
        >
          50:50
        </div>

        <div
          onClick={() => {
            if (reduxProgress !== null && !reduxFriendCall.used) {
              handleOpen('friendCall');
              dispatch(setFriendCall({ used: true }));
            }
          }}
          className={
            reduxFriendCall.used
              ? `${classes.help} ${classes.helpUsed}`
              : `${classes.help}`
          }
        >
          <FontAwesomeIcon icon={faPhone} size='xl' />
        </div>
        <div
          onClick={() => {
            if (reduxProgress !== null && !reduxAudienceHelp.used) {
              handleOpen('audienceHelp');
              dispatch(setAudienceHelp({ used: true }));
            }
          }}
          className={
            reduxAudienceHelp.used
              ? `${classes.help} ${classes.helpUsed}`
              : `${classes.help}`
          }
        >
          <FontAwesomeIcon icon={faPeopleGroup} size='xl' />
        </div>
      </div>
    </>
  );
}
