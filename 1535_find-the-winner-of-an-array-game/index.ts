/* eslint-disable @typescript-eslint/no-non-null-assertion */
function getWinner(arr: number[], k: number): number {
  let consecutiveWinsCount = 0,
    currentWinnerIndex = 0;

  for (let index = 1; index < arr.length && consecutiveWinsCount < k; index += 1) {
    if (arr[currentWinnerIndex]! > arr[index]!) consecutiveWinsCount += 1;
    else {
      currentWinnerIndex = index;
      consecutiveWinsCount = 1;
    }
  }

  return arr[currentWinnerIndex]!;
}
