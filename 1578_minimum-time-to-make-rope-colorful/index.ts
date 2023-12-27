/* eslint-disable @typescript-eslint/no-non-null-assertion */
function minCost(colors: string, neededTime: number[]): number {
  let totalAdjustmentTime = 0,
    maxTimeInCurrentConsecutiveSequence = 0;
  let prevColor: string | null = null;

  for (let i = 0; i < colors.length; i += 1) {
    const timeToRemoveCurrent = neededTime[i]!;
    const currentColor = colors[i]!;

    if (currentColor === prevColor) {
      totalAdjustmentTime += timeToRemoveCurrent;

      if (maxTimeInCurrentConsecutiveSequence < timeToRemoveCurrent)
        maxTimeInCurrentConsecutiveSequence = timeToRemoveCurrent;
    } else {
      totalAdjustmentTime +=
        timeToRemoveCurrent - maxTimeInCurrentConsecutiveSequence;
      maxTimeInCurrentConsecutiveSequence = timeToRemoveCurrent;
    }

    prevColor = currentColor;
  }

  return totalAdjustmentTime - maxTimeInCurrentConsecutiveSequence;
}
