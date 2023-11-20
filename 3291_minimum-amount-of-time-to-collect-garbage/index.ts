/* eslint-disable @typescript-eslint/no-non-null-assertion */
function garbageCollection(garbage: string[], travel: number[]): number {
  const encounteredGarbageTypes = new Set<number>();
  let totalMinutes = 0;

  for (let i = garbage.length - 1; i > 0; i -= 1) {
    const currentHouseGarbage = garbage[i]!;

    if (encounteredGarbageTypes.size < 3)
      // eslint-disable-next-line @typescript-eslint/prefer-for-of
      for (
        let garbageTypeIndex = 0;
        garbageTypeIndex < currentHouseGarbage.length;
        garbageTypeIndex += 1
      ) {
        encounteredGarbageTypes.add(
          currentHouseGarbage[garbageTypeIndex]!.charCodeAt(0)
        );
      }

    totalMinutes +=
      currentHouseGarbage.length + travel[i - 1]! * encounteredGarbageTypes.size;
  }

  totalMinutes += garbage[0]!.length;

  return totalMinutes;
}
