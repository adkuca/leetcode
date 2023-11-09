/* eslint-disable @typescript-eslint/no-non-null-assertion */
function eliminateMaximum(dist: number[], speed: number[]): number {
  const totalMonstersCount = dist.length;
  const monstersPerMinute = new Array<number>(totalMonstersCount - 1).fill(0); // 0 indexed

  for (let index = 0; index < totalMonstersCount; index += 1) {
    const arrivalTime = Math.ceil(dist[index]! / speed[index]!);
    if (arrivalTime < totalMonstersCount) monstersPerMinute[arrivalTime - 1] += 1;
  }

  let monstersPerMinuteAcc = monstersPerMinute[0]!;

  for (let minute = 1; minute < totalMonstersCount; minute += 1) {
    if (monstersPerMinuteAcc > minute) return minute;
    monstersPerMinuteAcc += monstersPerMinute[minute]!;
  }

  return totalMonstersCount;
}
