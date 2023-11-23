/* eslint-disable @typescript-eslint/no-non-null-assertion */
function checkArithmeticSubarrays(
  nums: number[],
  l: number[],
  r: number[]
): boolean[] {
  const result = new Array<boolean>(l.length);

  for (let i = 0; i < l.length; i += 1)
    result[i] = isArithmeticSubarray(nums, l[i]!, r[i]! + 1);

  return result;
}

function isArithmeticSubarray(
  nums: number[],
  start: number,
  end: number // exclusive
): boolean {
  if (end - start <= 2) return true;

  let min = Number.POSITIVE_INFINITY;
  let max = Number.NEGATIVE_INFINITY;

  for (let i = start; i < end; i += 1) {
    min = Math.min(min, nums[i]!);
    max = Math.max(max, nums[i]!);
  }

  if (min === max) return true;

  const step = (max - min) / (end - start - 1);

  if (!Number.isInteger(step)) return false;

  const visited = new Set<number>();

  for (let i = start; i < end; i += 1) {
    if ((nums[i]! - min) % step !== 0) return false;

    if (visited.has(nums[i]!)) return false;

    visited.add(nums[i]!);
  }

  return true;
}
