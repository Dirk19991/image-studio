import classes from './App.module.css';
import ProgressPanel from './features/progressPanel/ProgressPanel';
import QuestionsPanel from './features/questionsPanel/QuestionsPanel';
import StartScreen from './features/startScreen/StartScreen';
import shuffle from './utilities/shuffle';
import data from './data/questions.json';
import { useAppDispatch, useAppSelector } from './store/index';
import { setAnswers } from './features/questionsPanel/incorrectAnswersSlice';
import { useEffect } from 'react';

function App() {
  // для нормального отображения на мобильных устройствах
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

  const progress = useAppSelector((state) => state.progress.progress);

  const dispatch = useAppDispatch();

  const shuffleData =
    progress === null
      ? data[0].incorrectAnswers
      : data.filter((elem) => elem.id === progress)[0].incorrectAnswers;

  const shuffledIncorrectAnswers = shuffle(shuffleData);

  // когда переходим к очередному вопросу, диспатчим неправильные ответы
  // в соответствующий слайс, эти данные будет использовать компонент Answer
  useEffect(() => {
    dispatch(
      setAnswers({
        number: progress,
        incorrectAnswers: shuffledIncorrectAnswers,
      })
    );
  }, [progress, shuffledIncorrectAnswers, dispatch]);

  const correctAnswer =
    progress === null
      ? ''
      : data.filter((elem) => elem.id === progress)[0].correctAnswer;

  const appStyles =
    progress === null ? classes.wrapper : classes.questionsWrapper;

  return (
    <div className={classes.background}>
      <div className={appStyles}>
        {progress === null ? (
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
