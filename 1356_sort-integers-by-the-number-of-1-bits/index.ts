function populationCount(n: number) {
  let count = 0;

  while (n) {
    count += 1;
    n &= n - 1;
  }

  return count;
}

function populationCountCompare(a: number, b: number) {
  const bitCountA = populationCount(a);
  const bitCountB = populationCount(b);
  return bitCountA === bitCountB ? a - b : bitCountA - bitCountB;
}

function sortByBits(arr: number[]): number[] {
  return arr.sort(populationCountCompare);
}
