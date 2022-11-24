import styles from './ProgressPanel.module.css';
import Help from './Help';
import Sums from './Sums';
import calculateFriendAnswer from '../../utilities/calculateFriendAnswer';
import calculateAudiencePercentage from '../../utilities/calculateAudiencePercentage';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { RootState } from '../../store';

export default function ProgressPanel() {
  const reduxProgress = useSelector(
    (state: RootState) => state.progress.progress
  );

  const friendAnswer = calculateFriendAnswer(reduxProgress);
  const audiencePercentage = calculateAudiencePercentage(reduxProgress);

  const isMobile = useMediaQuery({ query: '(max-width: 820px)' });

  return (
    <>
      {isMobile ? (
        ''
      ) : (
        <div className={styles.progress}>
          <Help
            friendAnswer={friendAnswer}
            audiencePercentage={audiencePercentage}
          />
          <Sums />
        </div>
      )}
    </>
  );
}
