/* eslint-disable @typescript-eslint/no-non-null-assertion */
function minTimeToVisitAllPoints(points: number[][]): number {
  let minTimeToVisitAllPointsAcc = 0;

  for (let i = 1; i < points.length; i += 1) {
    minTimeToVisitAllPointsAcc += Math.max(
      Math.abs(points[i - 1]![0]! - points[i]![0]!),
      Math.abs(points[i - 1]![1]! - points[i]![1]!)
    );
  }

  return minTimeToVisitAllPointsAcc;
}
