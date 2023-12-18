/* eslint-disable @typescript-eslint/no-non-null-assertion */
function maxProductDifference(nums: number[]): number {
  let max = nums[0]!,
    secondMax = Number.NEGATIVE_INFINITY;
  let min = max,
    secondMin = Number.POSITIVE_INFINITY;

  for (let i = 1; i < nums.length; i += 1) {
    const curr = nums[i]!;

    if (curr > max) {
      secondMax = max;
      max = curr;
    } else if (curr > secondMax) secondMax = curr;

    if (curr < min) {
      secondMin = min;
      min = curr;
    } else if (curr < secondMin) secondMin = curr;
  }

  return max * secondMax - min * secondMin;
}
