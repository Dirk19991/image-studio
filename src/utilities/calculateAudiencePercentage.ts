export default function calculateAudiencePercentage(progress: number): number {
  if (progress >= 1 && progress <= 5) {
    return Math.floor(Math.random() * 40) + 60;
  }

  if (progress > 5 && progress <= 10) {
    return Math.floor(Math.random() * 40) + 40;
  }

  if (progress > 10 && progress <= 15) {
    return Math.floor(Math.random() * 40) + 20;
  }
  return 0;
}
