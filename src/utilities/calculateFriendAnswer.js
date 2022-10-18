import data from "../data/questions.json";
import shuffle from "./shuffle";

export default function calculateFriendAnswer(progress) {
  if (progress === null) {
    return;
  }
  const correctAnswer = data.filter((elem) => elem.id === progress)[0]
    .correctAnswer;
  const incorrectAnswers = data.filter((elem) => elem.id === progress)[0]
    .incorrectAnswers;

  if (progress >= 1 && progress <= 5) {
    return correctAnswer;
  }

  if (progress > 5 && progress <= 10) {
    if (Math.random() * 10 < 7) {
      return correctAnswer;
    } else {
      return shuffle(incorrectAnswers)[0];
    }
  }

  if (progress > 10 && progress <= 15) {
    if (Math.random() * 10 < 4) {
      return correctAnswer;
    } else {
      return shuffle(incorrectAnswers)[0];
    }
  }
}

console.log(calculateFriendAnswer(1));
