import classes from './App.module.css';
import ProgressPanel from './features/progressPanel/ProgressPanel';
import QuestionsPanel from './features/questionsPanel/QuestionsPanel';
import StartScreen from './features/startScreen/StartScreen';
import shuffle from './utilities/shuffle';
import data from './data/questions.json';
import { useSelector, useDispatch } from 'react-redux';
import { setAnswers } from './features/questionsPanel/incorrectAnswersSlice';
import { useEffect } from 'react';

function App() {
  const reduxProgress = useSelector((state) => state.progress.progress);

  const dispatch = useDispatch();

  const shuffleData =
    reduxProgress === null
      ? data[0].incorrectAnswers
      : data.filter((elem) => elem.id === reduxProgress)[0].incorrectAnswers;

  const shuffledIncorrectAnswers = shuffle(shuffleData);

  useEffect(() => {
    console.log(data.filter((elem) => elem.id === reduxProgress)[0]);
    dispatch(
      setAnswers({ number: reduxProgress, answers: shuffledIncorrectAnswers })
    );
  }, [reduxProgress, shuffledIncorrectAnswers, dispatch]);

  const correctAnswer =
    reduxProgress !== null &&
    data.filter((elem) => elem.id === reduxProgress)[0].correctAnswer;

  return (
    <div className={classes.background}>
      <div
        className={
          reduxProgress === null ? classes.wrapper : classes.questionsWrapper
        }
      >
        {reduxProgress === null ? (
          <StartScreen />
        ) : (
          <QuestionsPanel
            className={classes.questionPanel}
            correctAnswer={correctAnswer}
          />
        )}
      </div>

      <ProgressPanel />
    </div>
  );
}

export default App;
