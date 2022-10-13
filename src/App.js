import classes from "./App.module.css";
import ProgressPanel from "./components/ProgressPanel";
import QuestionsPanel from "./components/QuestionsPanel";

function App() {
  return (
    <div className={classes.background}>
      <div className={classes.wrapper}>
        <QuestionsPanel />
      </div>

      <ProgressPanel />
    </div>
  );
}

export default App;
