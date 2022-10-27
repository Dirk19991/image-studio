import { useMemo } from 'react';
import classes from './App.module.css';
import ProgressPanel from './components/progressPanel/ProgressPanel';
import QuestionsPanel from './components/questionsPanel/QuestionsPanel';
import StartScreen from './components/startScreen/StartScreen';
import shuffle from './utilities/shuffle';
import data from './data/questions.json';
import { useSelector } from 'react-redux';

function App() {
  const reduxProgress = useSelector((state) => state.progress.progress);

  const memoizedIncorrectAnswers = useMemo(() => {
    if (reduxProgress === null) return;

    const shuffledIncorrectAnswers = shuffle(
      data.filter((elem) => elem.id === reduxProgress)[0].incorrectAnswers
    );

    return [shuffledIncorrectAnswers[0], shuffledIncorrectAnswers[1]];
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
          />
        )}
      </div>

      <ProgressPanel />
    </div>
  );
}

export default App;
