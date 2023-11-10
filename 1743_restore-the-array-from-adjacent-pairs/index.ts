type AdjacentPairValue = [number, number] | [number, null];
type AdjacentPairsMap = Map<number, AdjacentPairValue>;

function createAdjacentPairsMap(adjacentPairs: number[][]): AdjacentPairsMap {
  const adjacentPairsMap: AdjacentPairsMap = new Map();

  const updateAdjacentPairsMap = (
    map: AdjacentPairsMap,
    key: number,
    value: number
  ) => {
    if (map.has(key)) map.get(key)![1] = value;
    else map.set(key, [value, null]);
  };

  adjacentPairs.forEach(([adjacentA, adjacentB]) => {
    updateAdjacentPairsMap(adjacentPairsMap, adjacentA!, adjacentB!);
    updateAdjacentPairsMap(adjacentPairsMap, adjacentB!, adjacentA!);
  });

  return adjacentPairsMap;
}

function findEdge(adjacentPairsMap: AdjacentPairsMap): number | null {
  let edge: number | null = null;

  for (const [key, adjacent] of adjacentPairsMap) {
    if (adjacent[1] === null) {
      edge = key;
      break;
    }
  }

  return edge;
}

function restoreArray(adjacentPairs: number[][]): number[] {
  const adjacentPairsMap: AdjacentPairsMap = createAdjacentPairsMap(adjacentPairs);

  const edge = findEdge(adjacentPairsMap);

  const restoredNums = new Array<number>(adjacentPairs.length + 1);
  restoredNums[0] = edge!;

  for (let index = 1; index < restoredNums.length; index += 1) {
    const [adjacentA, adjacentB] = adjacentPairsMap.get(restoredNums[index - 1]!)!;
    restoredNums[index] =
      adjacentB === null || adjacentA !== restoredNums[index - 2]
        ? adjacentA
        : adjacentB;
  }

  return restoredNums;
}
