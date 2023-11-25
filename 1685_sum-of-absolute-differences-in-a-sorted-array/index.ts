/* eslint-disable @typescript-eslint/no-non-null-assertion */
function getSumAbsoluteDifferences(nums: number[]): number[] {
  const numsLength = nums.length;
  const absDifferencesSums = new Array<number>(numsLength);

  let firstNumsAbsDifferencesSum = 0;
  const firstNum = nums[0]!;

  for (let i = 1; i < numsLength; i += 1)
    firstNumsAbsDifferencesSum += nums[i]! - firstNum;

  absDifferencesSums[0] = firstNumsAbsDifferencesSum;

  let sumAcc = firstNum;
  const numsSum = firstNumsAbsDifferencesSum + firstNum * numsLength;

  for (let i = 1; i < numsLength; i += 1) {
    sumAcc += nums[i]!;
    absDifferencesSums[i] =
      numsSum - 2 * sumAcc + nums[i]! * (2 * (i + 1) - numsLength);
  }

  return absDifferencesSums;
}
