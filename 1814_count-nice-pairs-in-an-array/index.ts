/* eslint-disable @typescript-eslint/no-non-null-assertion */
function countNicePairs(nums: number[]): number {
  const differenceCount = new Map<number, number>();
  let nicePairsCount = 0;

  // eslint-disable-next-line @typescript-eslint/prefer-for-of
  for (let i = 0; i < nums.length; i += 1) {
    const difference = nums[i]! - reverseNumber(nums[i]!);

    if (differenceCount.has(difference)) {
      const oldValue = differenceCount.get(difference)!;
      differenceCount.set(difference, oldValue + 1);
      nicePairsCount = (nicePairsCount + oldValue) % 1_000_000_007;
    } else differenceCount.set(difference, 1);
  }

  return nicePairsCount;
}

function reverseNumber(num: number) {
  let reversed = 0;

  while (num !== 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  return reversed;
}
