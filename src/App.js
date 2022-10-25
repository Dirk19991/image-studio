import { useMemo, useState } from 'react';
import classes from './App.module.css';
import ProgressPanel from './components/progressPanel/ProgressPanel';
import QuestionsPanel from './components/questionsPanel/QuestionsPanel';
import StartScreen from './components/startScreen/StartScreen';
import shuffle from './utilities/shuffle';
import data from './data/questions.json';
import { useSelector } from 'react-redux';

function App() {
  const reduxProgress = useSelector((state) => state.progress.progress);
  const [fiftyFifty, setFiftyFifty] = useState({ active: false, used: false });
  const [friendCall, setFriendCall] = useState({ used: false });
  const [audienceHelp, setAudienceHelp] = useState({ used: false });

  const memoizedIncorrectAnswers = useMemo(() => {
    if (reduxProgress === null) return;

    const one = shuffle(
      data.filter((elem) => elem.id === reduxProgress)[0].incorrectAnswers
    );

    return [one[0], one[1]];
  }, [reduxProgress]);

  const correctAnswer =
    reduxProgress !== null &&
    data.filter((elem) => elem.id === reduxProgress)[0].correctAnswer;
  const incorrectAnswers = reduxProgress !== null && memoizedIncorrectAnswers;

  return (
    <div className={classes.background}>
      <div className={classes.wrapper}>
        {reduxProgress === null ? (
          <StartScreen />
        ) : (
          <QuestionsPanel
            correctAnswer={correctAnswer}
            incorrectAnswers={incorrectAnswers}
            fiftyFifty={fiftyFifty}
            setFiftyFifty={setFiftyFifty}
            setAudienceHelp={setAudienceHelp}
            setFriendCall={setFriendCall}
          />
        )}
      </div>

      <ProgressPanel
        fiftyFifty={fiftyFifty}
        setFiftyFifty={setFiftyFifty}
        friendCall={friendCall}
        setFriendCall={setFriendCall}
        audienceHelp={audienceHelp}
        setAudienceHelp={setAudienceHelp}
      />
    </div>
  );
}

export default App;
