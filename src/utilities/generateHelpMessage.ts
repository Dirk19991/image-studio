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
