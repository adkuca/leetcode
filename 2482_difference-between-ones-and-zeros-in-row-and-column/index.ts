/* eslint-disable @typescript-eslint/no-non-null-assertion */
export function onesMinusZeros(grid: number[][]): number[][] {
  const rowCount = grid.length,
    colCount = grid[0]!.length;

  const rowOnesCount = new Array<number>(rowCount),
    colOnesCount = new Array<number>(colCount).fill(0);

  for (let rowIndex = 0; rowIndex < rowCount; rowIndex += 1) {
    const row = grid[rowIndex]!;
    let rowOnesAcc = 0;

    for (let colIndex = 0; colIndex < colCount; colIndex += 1) {
      if (row[colIndex] === 1) {
        colOnesCount[colIndex] += 1;
        rowOnesAcc += 1;
      }
    }

    rowOnesCount[rowIndex] = rowOnesAcc;
  }

  const diffGrid = new Array<number[]>(rowCount);
  const totalDimensions = rowCount + colCount;

  for (let rowIndex = 0; rowIndex < rowCount; rowIndex += 1) {
    const row = new Array<number>(colCount);
    const currRowOnesCount = rowOnesCount[rowIndex]!;

    for (let colIndex = 0; colIndex < colCount; colIndex += 1) {
      const onesCount = currRowOnesCount + colOnesCount[colIndex]!;

      row[colIndex] = onesCount - (totalDimensions - onesCount);
    }

    diffGrid[rowIndex] = row;
  }

  return diffGrid;
}
