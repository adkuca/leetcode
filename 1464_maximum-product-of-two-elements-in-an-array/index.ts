/* eslint-disable @typescript-eslint/no-non-null-assertion */
export function maxProduct(nums: number[]): number {
  let max = nums[0]!,
    secondMax = Number.NEGATIVE_INFINITY;

  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i]! > max) {
      secondMax = max;
      max = nums[i]!;
    } else if (nums[i]! > secondMax) secondMax = nums[i]!;
  }

  return (max - 1) * (secondMax - 1);
}
