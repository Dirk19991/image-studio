import styles from "./ProgressPanel.module.css";
import Help from "./Help";
import Sums from "./Sums";

export default function ProgressPanel({ progress, setProgress }) {
  return (
    <div className={styles.progress}>
      <Help />
      <Sums progress={progress} setProgress={setProgress} />
    </div>
  );
}
