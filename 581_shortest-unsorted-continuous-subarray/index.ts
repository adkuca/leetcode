/* eslint-disable @typescript-eslint/no-non-null-assertion */
function findUnsortedSubarray(nums: number[]): number {
  let startConflictIndex = -1;
  const lastIndex = nums.length - 1;

  for (let i = 0; i < lastIndex; i += 1) {
    if (nums[i]! > nums[i + 1]!) {
      startConflictIndex = i;
      break;
    }
  }

  if (startConflictIndex === -1) return 0;

  let endIndex = -1;
  let minInSubarray = nums[startConflictIndex]!,
    max = minInSubarray;

  for (let i = startConflictIndex + 1; i <= lastIndex; i += 1) {
    if (nums[i]! < max) {
      endIndex = i;
      if (nums[i]! < minInSubarray) minInSubarray = nums[i]!;
    } else max = nums[i]!;
  }

  if (startConflictIndex === 0 && endIndex === lastIndex) return nums.length;

  const startIndex =
    startConflictIndex > 0 && minInSubarray < nums[startConflictIndex - 1]!
      ? (startConflictIndex = findInsertionIndexRightBound(
          nums,
          0,
          startConflictIndex - 1,
          minInSubarray
        ))
      : startConflictIndex;

  return endIndex - startIndex + 1;
}

function findInsertionIndexRightBound(
  arr: number[],
  start: number,
  end: number,
  num: number
) {
  while (start <= end) {
    const mid = ~~((start + end) / 2);

    if (arr[mid]! <= num) start = mid + 1;
    else end = mid - 1;
  }

  return start;
}
