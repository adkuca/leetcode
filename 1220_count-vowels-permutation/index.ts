function countVowelPermutation0(n: number): number {
  const mod = 1e9 + 7;

  let aPrev = 1,
    ePrev = 1,
    iPrev = 1,
    oPrev = 1,
    uPrev = 1;

  for (let index = 1; index < n; index += 1) {
    const aCurrent = ePrev + iPrev + uPrev,
      eCurrent = aPrev + iPrev,
      iCurrent = ePrev + oPrev,
      oCurrent = iPrev,
      uCurrent = iPrev + oPrev;

    aPrev = aCurrent % mod;
    ePrev = eCurrent % mod;
    iPrev = iCurrent % mod;
    oPrev = oCurrent % mod;
    uPrev = uCurrent % mod;
  }

  let sum = aPrev;
  sum = (sum + ePrev) % mod;
  sum = (sum + iPrev) % mod;
  sum = (sum + oPrev) % mod;
  sum = (sum + uPrev) % mod;

  return sum;
}
