import { useState } from "react";
import classes from "./App.module.css";
import ProgressPanel from "./components/ProgressPanel";
import QuestionsPanel from "./components/QuestionsPanel";
import StartScreen from "./components/StartScreen";

function App() {
  const [progress, setProgress] = useState(null);

  return (
    <div className={classes.background}>
      <div className={classes.wrapper}>
        {progress === null ? (
          <StartScreen setProgress={setProgress} />
        ) : (
          <QuestionsPanel progress={progress} setProgress={setProgress} />
        )}
      </div>

      <ProgressPanel />
    </div>
  );
}

export default App;
