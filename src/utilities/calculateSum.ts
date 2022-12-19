import data from '../data/questions.json';

export function calculateSum(progress: number) {
  return new Intl.NumberFormat('en-US').format(
    data.filter((elem) => elem.id === progress)[0].price
  );
}
