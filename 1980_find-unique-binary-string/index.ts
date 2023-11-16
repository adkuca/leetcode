/* eslint-disable @typescript-eslint/no-non-null-assertion */
function findDifferentBinaryString(nums: string[]): string {
  let result = '';

  for (let i = 0; i < nums.length; i += 1) result += nums[i]![i] === '0' ? '1' : '0';

  return result;
}
