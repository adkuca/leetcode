/* eslint-disable @typescript-eslint/no-non-null-assertion */
function numRollsToTarget(n: number, k: number, target: number): number {
  if (n * k < target) return 0;

  const memo = new Map<string, number>();

  const countWays = (currentDice: number, currentTarget: number): number => {
    if (currentDice === 0) return currentTarget === 0 ? 1 : 0;

    const memoKey = `${currentDice},${currentTarget}`;

    if (memo.has(memoKey)) return memo.get(memoKey)!;

    let result = 0;

    for (let faceValue = 1; faceValue <= k; faceValue += 1) {
      if (currentTarget - faceValue >= 0)
        result =
          (result + countWays(currentDice - 1, currentTarget - faceValue)) %
          1_000_000_007;
    }

    memo.set(memoKey, result);

    return result;
  };

  return countWays(n, target);
}
