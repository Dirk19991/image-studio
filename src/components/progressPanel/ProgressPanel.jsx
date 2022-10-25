import styles from './ProgressPanel.module.css';
import Help from './Help';
import Sums from './Sums';
import calculateFriendAnswer from '../../utilities/calculateFriendAnswer';
import calculateAudiencePercentage from '../../utilities/calculateAudiencePercentage';

export default function ProgressPanel({
  progress,
  setProgress,
  fiftyFifty,
  setFiftyFifty,
  friendCall,
  setFriendCall,
  audienceHelp,
  setAudienceHelp,
}) {
  const friendAnswer = calculateFriendAnswer(progress);
  const audiencePercentage = calculateAudiencePercentage(progress);

  return (
    <div className={styles.progress}>
      <Help
        friendCall={friendCall}
        setFriendCall={setFriendCall}
        fiftyFifty={fiftyFifty}
        setFiftyFifty={setFiftyFifty}
        progress={progress}
        audienceHelp={audienceHelp}
        setAudienceHelp={setAudienceHelp}
        friendAnswer={friendAnswer}
        audiencePercentage={audiencePercentage}
      />
      <Sums progress={progress} setProgress={setProgress} />
    </div>
  );
}
