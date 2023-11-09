function climbStairs(n: number): number {
  let prevPrev = 0;
  let prev = 1;
  let current = 0;

  while (n-- > 0) {
    current = prevPrev + prev;
    prevPrev = prev;
    prev = current;
  }

  return current;
}
