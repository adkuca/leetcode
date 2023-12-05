function numberOfMatches(n: number): number {
  // iterative approach
  // let numberOfMatchesCount = 0;

  // while (n > 1) {
  //   const roundMatchCount = ~~(n / 2);
  //   numberOfMatchesCount += roundMatchCount;
  //   n = n - roundMatchCount;
  // }

  // return numberOfMatchesCount;

  return n - 1; // mathematical approach
}
