// используется одно и то же модальное окно для подсказок
// "помощь друга" и "помощь зала" - функция вычисляет сообщение, которое
// должно появиться в модальном окне в зависимости от того, какая подсказка была выбрана

export function generateHelpMessage(
  type: string | undefined,
  friendAnswer: string,
  audiencePercentage: number
) {
  let helpMessage: string = '';
  if (type === 'friendCall') {
    helpMessage = `Ваш друг думает, что правильный ответ - ${friendAnswer}`;
  } else if (type === 'audienceHelp') {
    helpMessage = `${audiencePercentage}% зрителей считает, что правильный ответ - ${friendAnswer}`;
  }
  return helpMessage;
}
