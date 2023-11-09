/* eslint-disable @typescript-eslint/no-non-null-assertion */
function numFactoredBinaryTrees(arr: number[]): number {
  arr.sort((a, b) => a - b);
  const treeCountMap: Map<number, number> = new Map();

  for (let i = 0, arrLen = arr.length; i < arrLen; i += 1) {
    const currentNodeValue = arr[i]!;
    treeCountMap.set(currentNodeValue, 1);

    for (let j = i - 1; j >= 0; j -= 1) {
      const potentialFactor = arr[j]!;
      if (currentNodeValue % potentialFactor !== 0) continue;
      const quotient = currentNodeValue / potentialFactor;
      if (!treeCountMap.has(quotient)) continue;

      const combinationCount =
        treeCountMap.get(potentialFactor)! * treeCountMap.get(quotient)!;

      treeCountMap.set(
        currentNodeValue,
        treeCountMap.get(currentNodeValue)! + combinationCount
      );
    }
  }

  const mod = Math.pow(10, 9) + 7;

  let totalTreeCount = 0;

  for (const treeCount of treeCountMap.values())
    totalTreeCount = (totalTreeCount + treeCount) % mod;

  return totalTreeCount;
}
