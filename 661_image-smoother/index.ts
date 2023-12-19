/* eslint-disable @typescript-eslint/no-non-null-assertion */
function imageSmoother(img: number[][]): number[][] {
  const rowCount = img.length,
    colCount = img[0]!.length;

  const smoothenedImg = new Array<number[]>(rowCount);

  for (let rowIndex = 0; rowIndex < rowCount; rowIndex += 1) {
    const smoothenedImgRow = new Array<number>(colCount);

    for (let colIndex = 0; colIndex < colCount; colIndex += 1) {
      let res = 0;
      let cellCount = 0;

      for (let newX = rowIndex - 1; newX <= rowIndex + 1; newX += 1) {
        for (let newY = colIndex - 1; newY <= colIndex + 1; newY += 1) {
          if (isWithinBounds(newX, newY, rowCount, colCount)) {
            res += img[newX]![newY]!;
            cellCount += 1;
          }
        }
      }

      smoothenedImgRow[colIndex] = ~~(res / cellCount);
    }

    smoothenedImg[rowIndex] = smoothenedImgRow;
  }

  return smoothenedImg;
}

function isWithinBounds(
  newX: number,
  newY: number,
  rowCount: number,
  colCount: number
): boolean {
  return newX >= 0 && newX < rowCount && newY >= 0 && newY < colCount;
}
