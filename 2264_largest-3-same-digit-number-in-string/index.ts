/* eslint-disable @typescript-eslint/no-non-null-assertion */
function largestGoodInteger(num: string): string {
  let consecutiveIntegerCount = 1;
  let maxGoodInteger = Number.NEGATIVE_INFINITY;

  for (let i = 1; i < num.length; i += 1) {
    // eslint-disable-next-line @typescript-eslint/no-confusing-non-null-assertion
    if (num[i - 1]! === num[i]!) {
      consecutiveIntegerCount += 1;

      if (consecutiveIntegerCount === 3 && +num[i]! > maxGoodInteger)
        maxGoodInteger = +num[i]!;
    } else consecutiveIntegerCount = 1;
  }

  return maxGoodInteger === Number.NEGATIVE_INFINITY
    ? ''
    : maxGoodInteger.toString().repeat(3);
}
