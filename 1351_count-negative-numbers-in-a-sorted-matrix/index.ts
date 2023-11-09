/* eslint-disable @typescript-eslint/no-non-null-assertion */
function countNegatives(grid: number[][]): number {
  const rowLength = grid.length;
  const columnLength = grid[0]!.length;

  let negativesCount = 0;
  let rowIndex = 0;
  let columnIndex = columnLength - 1;

  while (rowIndex < rowLength && columnIndex >= 0) {
    if (grid[rowIndex]![columnIndex]! < 0) {
      negativesCount += rowLength - rowIndex;
      columnIndex -= 1;
    } else {
      rowIndex += 1;
    }
  }

  return negativesCount;
}
