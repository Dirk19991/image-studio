import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import classes from './Help.module.css';
import HelpModal from '../helpModal/HelpModal';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/index';
import { setFiftyFifty, setFriendCall, setAudienceHelp } from './progressSlice';
import { generateHelpMessage } from '../../utilities/generateHelpMessage';

interface HelpProps {
  friendAnswer: string;
  audiencePercentage: number;
  className?: string;
}

export default function Help({ friendAnswer, audiencePercentage }: HelpProps) {
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState<{ open: boolean; type: undefined | string }>(
    { open: false, type: undefined }
  );
  const handleOpen = (type: undefined | string) =>
    setOpen({ open: true, type: type });
  const handleClose = () => setOpen({ open: false, type: undefined });

  const progress = useAppSelector((state) => state.progress.progress);
  const fiftyfifty = useAppSelector((state) => state.progress.fiftyFifty);
  const friendCall = useAppSelector((state) => state.progress.friendCall);
  const audienceHelp = useAppSelector((state) => state.progress.audienceHelp);
  const gameLost = useAppSelector((state) => state.progress.lostGame);

  const helpMessage = generateHelpMessage(
    open.type,
    friendAnswer,
    audiencePercentage
  );

  const fiftyFiftyHandler = () => {
    !fiftyfifty.used &&
      !gameLost &&
      dispatch(setFiftyFifty({ active: true, used: true }));
  };
  const audienceHelpHandler = () => {
    if (progress !== null && !audienceHelp.used && !gameLost) {
      handleOpen('audienceHelp');
      dispatch(setAudienceHelp({ used: true }));
    }
  };
  const friendCallHandler = () => {
    if (progress !== null && !friendCall.used && !gameLost) {
      handleOpen('friendCall');
      dispatch(setFriendCall({ used: true }));
    }
  };

  const fiftyFiftyStyles = fiftyfifty.used
    ? `${classes.help} ${classes.helpUsed}`
    : `${classes.help}`;

  const friendCallStyles = friendCall.used
    ? `${classes.help} ${classes.helpUsed}`
    : `${classes.help}`;

  const audienceHelpStyles = audienceHelp.used
    ? `${classes.help} ${classes.helpUsed}`
    : `${classes.help}`;

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
        <div onClick={fiftyFiftyHandler} className={fiftyFiftyStyles}>
          50:50
        </div>

        <div onClick={friendCallHandler} className={friendCallStyles}>
          <FontAwesomeIcon icon={faPhone} size='xl' />
        </div>
        <div onClick={audienceHelpHandler} className={audienceHelpStyles}>
          <FontAwesomeIcon icon={faPeopleGroup} size='xl' />
        </div>
      </div>
    </>
  );
}
