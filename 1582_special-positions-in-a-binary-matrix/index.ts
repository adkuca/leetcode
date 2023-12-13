/* eslint-disable @typescript-eslint/no-non-null-assertion */
function numSpecial(mat: number[][]): number {
  const rowCount = mat.length,
    colCount = mat[0]!.length;

  const rowBitCount = new Array<number>(rowCount).fill(0),
    colBitCount = new Array<number>(colCount).fill(0);

  for (let rowIndex = 0; rowIndex < rowCount; rowIndex += 1) {
    for (let colIndex = 0; colIndex < colCount; colIndex += 1) {
      if (mat[rowIndex]![colIndex] === 1) {
        rowBitCount[rowIndex] += 1;
        colBitCount[colIndex] += 1;
      }
    }
  }

  let numOfSpecialPositions = 0;

  for (let rowIndex = 0; rowIndex < rowCount; rowIndex += 1) {
    if (rowBitCount[rowIndex] !== 1) continue;

    for (let colIndex = 0; colIndex < colCount; colIndex += 1)
      if (colBitCount[colIndex] === 1 && mat[rowIndex]![colIndex] === 1)
        numOfSpecialPositions += 1;
  }

  return numOfSpecialPositions;
}
