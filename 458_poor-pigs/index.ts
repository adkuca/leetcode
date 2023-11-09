function poorPigs(
  buckets: number,
  minutesToDie: number,
  minutesToTest: number
): number {
  const possibleOutcomesPerPig = Math.floor(minutesToTest / minutesToDie) + 1;

  let x = 0;

  while (buckets > possibleOutcomesPerPig ** x) x += 1;

  return x;
}
