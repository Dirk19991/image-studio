// перемешивает варианты ответов, чтоб подсказка 50/50 убирала
// каждый раз разные ответы

export default function shuffle(arr: string[]): string[] {
  let j: number, x: string, index: number;
  for (index = arr.length - 1; index > 0; index--) {
    j = Math.floor(Math.random() * (index + 1));
    x = arr[index];
    arr[index] = arr[j];
    arr[j] = x;
  }
  return arr;
}
