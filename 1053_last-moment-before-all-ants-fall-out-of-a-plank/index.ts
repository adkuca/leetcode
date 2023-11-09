function getLastMoment(n: number, left: number[], right: number[]): number {
  const maxTimeForAntsGoingLeft = Math.max(...left);
  const maxTimeForAntsGoingRight = n - Math.min(...right);

  return Math.max(maxTimeForAntsGoingRight, maxTimeForAntsGoingLeft);
}
