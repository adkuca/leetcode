/* eslint-disable @typescript-eslint/no-non-null-assertion */
function findDiagonalOrder(nums: number[][]): number[] {
  const diagonalReversedGroups = new Array<number[]>(nums.length);
  let numberCount = 0;

  // eslint-disable-next-line @typescript-eslint/prefer-for-of
  for (let i = 0; i < nums.length; i += 1) {
    const row = nums[i]!;

    numberCount += row.length;

    for (let j = 0; j < row.length; j += 1) {
      if (diagonalReversedGroups[j + i] === undefined)
        diagonalReversedGroups[j + i] = [row[j]!];
      else
        diagonalReversedGroups[j + i]![diagonalReversedGroups[j + i]!.length] =
          row[j]!;
    }
  }

  const result = new Array<number>(numberCount);
  let resultIndex = 0;

  // eslint-disable-next-line @typescript-eslint/prefer-for-of
  for (let i = 0; i < diagonalReversedGroups.length; i += 1) {
    const group = diagonalReversedGroups[i]!;

    for (let j = group.length - 1; j >= 0; j -= 1) {
      result[resultIndex] = group[j]!;
      resultIndex += 1;
    }
  }

  return result;
}
