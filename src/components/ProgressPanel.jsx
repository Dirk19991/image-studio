import styles from "./ProgressPanel.module.css";
import Help from "./Help";
import Sums from "./Sums";

export default function ProgressPanel() {
  return (
    <div className={styles.progress}>
      <Help />
      <Sums />
    </div>
  );
}
