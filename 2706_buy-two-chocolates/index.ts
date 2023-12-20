/* eslint-disable @typescript-eslint/no-non-null-assertion */
function buyChoco(prices: number[], money: number): number {
  let min = prices[0]!,
    secondMin = Number.POSITIVE_INFINITY;

  for (let i = 1; i < prices.length; i += 1)
    if (prices[i]! < min) {
      secondMin = min;
      min = prices[i]!;
    } else if (prices[i]! < secondMin) secondMin = prices[i]!;

  const minSum = min + secondMin;

  return minSum <= money ? money - minSum : money;
}
