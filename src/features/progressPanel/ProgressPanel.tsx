import styles from './ProgressPanel.module.css';
import Help from './Help';
import Sums from './Sums';
import calculateFriendAnswer from '../../utilities/calculateFriendAnswer';
import calculateAudiencePercentage from '../../utilities/calculateAudiencePercentage';
import { useAppSelector } from '../../store';
import { useMediaQuery } from 'react-responsive';
import { memo } from 'react';

export default memo(function ProgressPanel() {
  const progress = useAppSelector((state) => state.progress.progress);

  const friendAnswer = calculateFriendAnswer(progress);
  const audiencePercentage = calculateAudiencePercentage(progress);

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
});
