type Dir = 'N' | 'S' | 'W' | 'E';

type CoordPairKey = `${number},${number}`;

function isPathCrossing(path: Dir[]): boolean {
  let x = 0,
    y = 0;
  const visitedCoords = new Set<CoordPairKey>([`${x},${y}`]);

  for (const dir of path) {
    switch (dir) {
      case 'N': {
        y += 1;
        break;
      }
      case 'S': {
        y -= 1;
        break;
      }
      case 'W': {
        x -= 1;
        break;
      }
      case 'E': {
        x += 1;
        break;
      }
      default:
        throw new Error('invalid direction');
    }

    const coordPairKey: CoordPairKey = `${x},${y}`;

    if (visitedCoords.has(coordPairKey)) return true;

    visitedCoords.add(coordPairKey);
  }

  return false;
}
