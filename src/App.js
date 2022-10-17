import { useState } from "react";
import classes from "./App.module.css";
import ProgressPanel from "./components/ProgressPanel";
import QuestionsPanel from "./components/QuestionsPanel";
import StartScreen from "./components/StartScreen";
import shuffle from "./utilities/shuffle";
import data from "./data/questions.json";

function App() {
  const [progress, setProgress] = useState(null);
  const [fiftyFifty, setFiftyFifty] = useState({ active: false, used: false });
  const correctAnswer =
    progress !== null &&
    data.filter((elem) => elem.id === progress)[0].correctAnswer;
  const incorrectAnswers =
    progress !== null &&
    shuffle(data.filter((elem) => elem.id === progress)[0].incorrectAnswers);

  return (
    <div className={classes.background}>
      <div className={classes.wrapper}>
        {progress === null ? (
          <StartScreen setProgress={setProgress} />
        ) : (
          <QuestionsPanel
            correctAnswer={correctAnswer}
            incorrectAnswers={incorrectAnswers}
            fiftyFifty={fiftyFifty}
            setFiftyFifty={setFiftyFifty}
            progress={progress}
            setProgress={setProgress}
          />
        )}
      </div>

      <ProgressPanel
        fiftyFifty={fiftyFifty}
        setFiftyFifty={setFiftyFifty}
        progress={progress}
        setProgress={setProgress}
      />
    </div>
  );
}

export default App;
