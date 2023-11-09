function isReachableAtTime(
  sx: number,
  sy: number,
  fx: number,
  fy: number,
  t: number
): boolean {
  if (sx === fx && sy === fy) return t !== 1;
  return t >= Math.max(Math.abs(sx - fx), Math.abs(sy - fy));
}
