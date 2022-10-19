import { useMemo, useState } from "react";
import classes from "./App.module.css";
import ProgressPanel from "./components/ProgressPanel";
import QuestionsPanel from "./components/QuestionsPanel";
import StartScreen from "./components/StartScreen";
import shuffle from "./utilities/shuffle";
import data from "./data/questions.json";

function App() {
  const [progress, setProgress] = useState(null);
  const [fiftyFifty, setFiftyFifty] = useState({ active: false, used: false });
  const [friendCall, setFriendCall] = useState({ used: false });
  const [audienceHelp, setAudienceHelp] = useState({ used: false });

  const memoizedIncorrectAnswers = useMemo(() => {
    if (progress === null) return;

    console.log("counting");
    const one = shuffle(
      data.filter((elem) => elem.id === progress)[0].incorrectAnswers
    );

    return [one[0], one[1]];
  }, [progress]);

  console.log(memoizedIncorrectAnswers);

  const correctAnswer =
    progress !== null &&
    data.filter((elem) => elem.id === progress)[0].correctAnswer;
  const incorrectAnswers = progress !== null && memoizedIncorrectAnswers;

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
            setAudienceHelp={setAudienceHelp}
            setFriendCall={setFriendCall}
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
        friendCall={friendCall}
        setFriendCall={setFriendCall}
        audienceHelp={audienceHelp}
        setAudienceHelp={setAudienceHelp}
      />
    </div>
  );
}

export default App;
