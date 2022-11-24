export default function calculatePrize(
  progress: number | null,
  lostGame: boolean
): string | number {
  if (progress === null) {
    return 0;
  }
  if (progress >= 1 && progress <= 5) {
    return 0;
  } else if (progress > 5 && progress <= 10) {
    return new Intl.NumberFormat('en-US').format(5000);
  } else if (progress > 10 && progress < 15) {
    return new Intl.NumberFormat('en-US').format(100000);
  } else if (progress === 15 && lostGame === true) {
    return new Intl.NumberFormat('en-US').format(100000);
  } else if (progress === 15 && lostGame === false) {
    return new Intl.NumberFormat('en-US').format(3000000);
  }
  return 0;
}
