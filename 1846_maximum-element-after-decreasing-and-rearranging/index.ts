/* eslint-disable @typescript-eslint/no-non-null-assertion */
function maximumElementAfterDecrementingAndRearranging(
  arr: number[]
): number {
  const maxPossibleInteger = arr.length;
  const integerFrequencyCount = new Array<number>(maxPossibleInteger + 1);

  // eslint-disable-next-line @typescript-eslint/prefer-for-of
  for (let i = 0; i < arr.length; i += 1) {
    const currentInteger = Math.min(arr[i]!, maxPossibleInteger);

    if (integerFrequencyCount[currentInteger] != null)
      integerFrequencyCount[currentInteger] += 1;
    else integerFrequencyCount[currentInteger] = 1;
  }

  let maxInteger = 0;

  integerFrequencyCount.forEach((count, i) => {
    maxInteger = Math.min(i, maxInteger + count);
  });

  return maxInteger;
}
