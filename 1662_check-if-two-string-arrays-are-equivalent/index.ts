/* eslint-disable @typescript-eslint/no-non-null-assertion */
function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
  let concatWord1 = '',
    concatWord2 = '';

  // eslint-disable-next-line @typescript-eslint/prefer-for-of
  for (let i = 0; i < word1.length; i += 1) concatWord1 += word1[i]!;

  // eslint-disable-next-line @typescript-eslint/prefer-for-of
  for (let i = 0; i < word2.length; i += 1) concatWord2 += word2[i]!;

  return concatWord1 === concatWord2;
}
