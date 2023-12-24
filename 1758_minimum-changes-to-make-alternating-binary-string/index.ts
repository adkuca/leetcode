function minOperations(s: string): number {
  let opsForZeroStart = 0,
    opsForOneStart = 0;

  for (let i = 0; i < s.length; i += 1)
    if ((s[i] === '1') === (i % 2 === 0)) opsForZeroStart += 1;
    else opsForOneStart += 1;

  return Math.min(opsForZeroStart, opsForOneStart);
}
