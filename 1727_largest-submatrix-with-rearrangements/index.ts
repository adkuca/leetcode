/* eslint-disable @typescript-eslint/no-non-null-assertion */
function largestSubmatrix(matrix: number[][]): number {
  const rowCount = matrix.length;
  const colCount = matrix[0]!.length;

  for (let rowIndex = 1; rowIndex < rowCount; rowIndex += 1) {
    const row = matrix[rowIndex]!;

    for (let colIndex = 0; colIndex < colCount; colIndex += 1)
      if (row[colIndex] === 1) row[colIndex] = matrix[rowIndex - 1]![colIndex]! + 1;
  }

  let largestSubmatrixSize = 0;

  for (let rowIndex = 0; rowIndex < rowCount; rowIndex += 1) {
    const row = matrix[rowIndex]!.sort((a, b) => b - a);

    for (let colIndex = 0; colIndex < colCount; colIndex += 1) {
      if (row[colIndex] === 0) break;

      largestSubmatrixSize = Math.max(
        largestSubmatrixSize,
        row[colIndex]! * (colIndex + 1)
      );
    }
  }

  return largestSubmatrixSize;
}
