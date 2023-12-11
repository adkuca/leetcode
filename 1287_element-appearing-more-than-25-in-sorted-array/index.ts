/* eslint-disable @typescript-eslint/no-non-null-assertion */
function findSpecialInteger(arr: number[]): number {
  if (arr.length === 1) return arr[0]!;

  const quarterLength = arr.length * 0.25;
  const treshold = ~~quarterLength + 1;
  const step = Math.ceil(quarterLength);

  for (let i = step; i < arr.length; i += step) {
    const left = findFirst(arr, i - (treshold - 1), i - 1, arr[i]!);
    const utmostLeft = left === -1 ? i : left;

    if (arr[utmostLeft + (treshold - 1)] === arr[i]!) return arr[i]!;
  }

  throw new Error('should never occur');
}

function findFirst(
  arr: number[],
  start: number,
  end: number,
  target: number
) {
  let firstOccurrence = -1;

  while (start <= end) {
    const mid = ~~((start + end) / 2);

    if (arr[mid] === target) {
      firstOccurrence = mid;
      end = mid - 1;
    } else if (arr[mid]! < target) start = mid + 1;
    else end = mid - 1;
  }

  return firstOccurrence;
}
