/* eslint-disable @typescript-eslint/no-non-null-assertion */
type Coord = [number, number];

function maxWidthOfVerticalArea(points: Coord[]): number {
  points.sort((a, b) => a[0] - b[0]);

  let maxWidth = 0;

  for (let i = 1; i < points.length; i += 1) {
    const prevX = points[i - 1]![0];
    const currX = points[i]![0];

    if (prevX === currX) continue;

    const width = currX - prevX;

    if (maxWidth < width) maxWidth = width;
  }

  return maxWidth;
}
