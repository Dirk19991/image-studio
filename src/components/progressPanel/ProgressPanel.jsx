import styles from './ProgressPanel.module.css';
import Help from './Help';
import Sums from './Sums';
import calculateFriendAnswer from '../../utilities/calculateFriendAnswer';
import calculateAudiencePercentage from '../../utilities/calculateAudiencePercentage';
import { useSelector } from 'react-redux';

export default function ProgressPanel({
  fiftyFifty,
  setFiftyFifty,
  friendCall,
  setFriendCall,
  audienceHelp,
  setAudienceHelp,
}) {
  const reduxProgress = useSelector((state) => state.progress.progress);

  const friendAnswer = calculateFriendAnswer(reduxProgress);
  const audiencePercentage = calculateAudiencePercentage(reduxProgress);

  return (
    <div className={styles.progress}>
      <Help
        friendCall={friendCall}
        setFriendCall={setFriendCall}
        fiftyFifty={fiftyFifty}
        setFiftyFifty={setFiftyFifty}
        audienceHelp={audienceHelp}
        setAudienceHelp={setAudienceHelp}
        friendAnswer={friendAnswer}
        audiencePercentage={audiencePercentage}
      />
      <Sums />
    </div>
  );
}
