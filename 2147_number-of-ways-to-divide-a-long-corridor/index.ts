/* eslint-disable @typescript-eslint/no-non-null-assertion */
function numberOfWays(corridor: string): number {
  let divisionWaysCount = 1;
  let plantCountInterCurrentSeatPairs = 0;
  let seatCounter = 0;

  // eslint-disable-next-line @typescript-eslint/prefer-for-of
  for (let i = 0; i < corridor.length; i += 1) {
    if (corridor[i] === 'S') {
      seatCounter += 1;
      if (seatCounter % 2 !== 0 && plantCountInterCurrentSeatPairs !== 0) {
        divisionWaysCount =
          (divisionWaysCount * (plantCountInterCurrentSeatPairs + 1)) %
          1_000_000_007;
        plantCountInterCurrentSeatPairs = 0;
      }
    } else if (seatCounter !== 0 && seatCounter % 2 === 0)
      plantCountInterCurrentSeatPairs += 1;
  }

  if (seatCounter % 2 === 1 || seatCounter === 0) return 0;

  return divisionWaysCount;
}
