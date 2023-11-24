/* eslint-disable @typescript-eslint/no-non-null-assertion */
function maxCoins(piles: number[]): number {
  let maxCoinPile = piles[0]!;

  for (let i = 1; i < piles.length; i += 1)
    if (maxCoinPile < piles[i]!) maxCoinPile = piles[i]!;

  const coinPileCounts = new Array<number>(maxCoinPile + 1).fill(0);

  // eslint-disable-next-line @typescript-eslint/prefer-for-of
  for (let i = 0; i < piles.length; i += 1) coinPileCounts[piles[i]!] += 1;

  let maxCoinsCount = 0;

  let coinPile = maxCoinPile;
  let picks = (piles.length / 3) * 2;

  while (picks > 0) {
    if (coinPileCounts[coinPile]! > 0) {
      for (let i = 0; picks > 0 && i < coinPileCounts[coinPile]!; i += 1) {
        if (picks % 2 === 1) maxCoinsCount += coinPile;

        picks -= 1;
      }
    }

    coinPile -= 1;
  }

  return maxCoinsCount;
}
