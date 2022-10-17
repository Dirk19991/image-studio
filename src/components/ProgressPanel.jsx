import styles from "./ProgressPanel.module.css";
import Help from "./Help";
import Sums from "./Sums";

export default function ProgressPanel({
  progress,
  setProgress,
  fiftyFifty,
  setFiftyFifty,
}) {
  return (
    <div className={styles.progress}>
      <Help fiftyFifty={fiftyFifty} setFiftyFifty={setFiftyFifty} />
      <Sums progress={progress} setProgress={setProgress} />
    </div>
  );
}
