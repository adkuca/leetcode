/* eslint-disable @typescript-eslint/no-non-null-assertion */
function minPairSum(nums: number[]): number {
  nums.sort((a, b) => a - b);

  let minimizedMaxPairSum = Number.NEGATIVE_INFINITY;

  for (
    let startToMiddleIndex = 0, rightToMiddleIndex = nums.length - 1;
    startToMiddleIndex < nums.length / 2;
    startToMiddleIndex += 1, rightToMiddleIndex -= 1
  )
    minimizedMaxPairSum = Math.max(
      minimizedMaxPairSum,
      nums[startToMiddleIndex]! + nums[rightToMiddleIndex]!
    );

  return minimizedMaxPairSum;
}
