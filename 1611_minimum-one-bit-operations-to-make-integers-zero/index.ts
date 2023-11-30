function minimumOneBitOperations(n: number): number {
  let bitOperations = 0;
  let binaryIndex = 0;

  while (n >>> binaryIndex > 0) {
    if (((n >>> binaryIndex) & 1) === 1)
      bitOperations = 2 ** (binaryIndex + 1) - 1 - bitOperations;

    binaryIndex += 1;
  }

  return bitOperations;
}
