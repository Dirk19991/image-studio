import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import classes from './Help.module.css';
import HelpModal from '../helpModal/HelpModal';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFiftyFifty, setFriendCall, setAudienceHelp } from './progressSlice';
import { RootState } from '../../store';

export default function Help({ friendAnswer, audiencePercentage }) {
  const [open, setOpen] = useState<{ open: boolean; type: undefined | string }>(
    { open: false, type: undefined }
  );
  const handleOpen = (type: undefined | string) =>
    setOpen({ open: true, type: type });
  const handleClose = (type: undefined | string) =>
    setOpen({ open: false, type: type });

  const dispatch = useDispatch();

  const reduxProgress = useSelector(
    (state: RootState) => state.progress.progress
  );
  const reduxFiftyFifty = useSelector(
    (state: RootState) => state.progress.fiftyFifty
  );
  const reduxFriendCall = useSelector(
    (state: RootState) => state.progress.friendCall
  );
  const reduxAudienceHelp = useSelector(
    (state: RootState) => state.progress.audienceHelp
  );
  const gameLost = useSelector((state: RootState) => state.progress.lostGame);

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
              !gameLost &&
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
            if (reduxProgress !== null && !reduxFriendCall.used && !gameLost) {
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
            if (
              reduxProgress !== null &&
              !reduxAudienceHelp.used &&
              !gameLost
            ) {
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
