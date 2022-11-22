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
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  // We listen to the resize event
  window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

  const reduxProgress = useSelector((state) => state.progress.progress);

  const dispatch = useDispatch();

  const shuffleData =
    reduxProgress === null
      ? data[0].incorrectAnswers
      : data.filter((elem) => elem.id === reduxProgress)[0].incorrectAnswers;

  const shuffledIncorrectAnswers = shuffle(shuffleData);

  useEffect(() => {
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
