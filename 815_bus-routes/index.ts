function createBusStopToRoutesMap(routes: number[][]): Map<number, number[][]> {
  const busStopToRoutesMap = new Map<number, number[][]>();

  for (const route of routes) {
    for (const busStop of route) {
      if (busStopToRoutesMap.has(busStop))
        busStopToRoutesMap.get(busStop)!.push(route);
      else busStopToRoutesMap.set(busStop, [route]);
    }
  }

  return busStopToRoutesMap;
}

export function numBusesToDestination(
  routes: number[][],
  source: number,
  target: number
): number {
  if (source === target) return 0;

  const busStopToRoutesMap: Map<number, number[][]> =
    createBusStopToRoutesMap(routes);

  const visitedBusStops = new Set<number>();
  const visitedRoutes = new Set<number[]>();
  let busesTakenCount = 0;
  let currentBusStops = new Set([source]);

  while (currentBusStops.size > 0) {
    busesTakenCount += 1;
    const nextBusStops = new Set<number>();

    for (const busStop of currentBusStops) {
      visitedBusStops.add(busStop);

      if (busStopToRoutesMap.has(busStop)) {
        const routes = busStopToRoutesMap.get(busStop)!;

        for (const route of routes) {
          if (visitedRoutes.has(route)) continue;
          visitedRoutes.add(route);

          for (const nextBusStop of route) {
            if (visitedBusStops.has(nextBusStop)) continue;
            if (nextBusStop === target) return busesTakenCount;
            nextBusStops.add(nextBusStop);
          }
        }
      }
    }

    currentBusStops = nextBusStops;
  }

  return -1;
}
