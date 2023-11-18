/* eslint-disable @typescript-eslint/no-non-null-assertion */
function minSubArrayLen(target: number, nums: number[]): number {
  let minSubArrayLength = Number.POSITIVE_INFINITY;

  for (
    let leftIndex = 0, rightIndex = 0, sumAcc = 0;
    rightIndex < nums.length;
    rightIndex += 1
  ) {
    sumAcc += nums[rightIndex]!;

    while (sumAcc >= target) {
      minSubArrayLength = Math.min(minSubArrayLength, rightIndex - leftIndex + 1);
      sumAcc -= nums[leftIndex]!;
      leftIndex += 1;
    }
  }

  return minSubArrayLength === Number.POSITIVE_INFINITY ? 0 : minSubArrayLength;
}
