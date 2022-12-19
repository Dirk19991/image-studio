import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import classes from './Help.module.css';
import HelpModal from '../helpModal/HelpModal';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFiftyFifty, setFriendCall, setAudienceHelp } from './progressSlice';
import { RootState } from '../../store';

interface HelpProps {
  friendAnswer: string;
  audiencePercentage: number;
  className?: string;
}

export default function Help({ friendAnswer, audiencePercentage }: HelpProps) {
  const [open, setOpen] = useState<{ open: boolean; type: undefined | string }>(
    { open: false, type: undefined }
  );
  const handleOpen = (type: undefined | string) =>
    setOpen({ open: true, type: type });
  const handleClose = () => setOpen({ open: false, type: undefined });

  const dispatch = useDispatch();

  const progress = useSelector((state: RootState) => state.progress.progress);
  const fiftyfifty = useSelector(
    (state: RootState) => state.progress.fiftyFifty
  );
  const friendCall = useSelector(
    (state: RootState) => state.progress.friendCall
  );
  const audienceHelp = useSelector(
    (state: RootState) => state.progress.audienceHelp
  );
  const gameLost = useSelector((state: RootState) => state.progress.lostGame);

  let helpMessage: string = '';
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
            !fiftyfifty.used &&
              !gameLost &&
              dispatch(setFiftyFifty({ active: true, used: true }));
          }}
          className={
            fiftyfifty.used
              ? `${classes.help} ${classes.helpUsed}`
              : `${classes.help}`
          }
        >
          50:50
        </div>

        <div
          onClick={() => {
            if (progress !== null && !friendCall.used && !gameLost) {
              handleOpen('friendCall');
              dispatch(setFriendCall({ used: true }));
            }
          }}
          className={
            friendCall.used
              ? `${classes.help} ${classes.helpUsed}`
              : `${classes.help}`
          }
        >
          <FontAwesomeIcon icon={faPhone} size='xl' />
        </div>
        <div
          onClick={() => {
            if (progress !== null && !audienceHelp.used && !gameLost) {
              handleOpen('audienceHelp');
              dispatch(setAudienceHelp({ used: true }));
            }
          }}
          className={
            audienceHelp.used
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
