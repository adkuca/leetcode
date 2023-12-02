/* eslint-disable @typescript-eslint/no-non-null-assertion */
function countCharacters(words: string[], chars: string): number {
  let goodStringsLengthSum = 0;
  const charFrequencyCount = new Array<number>(26).fill(0);

  // eslint-disable-next-line @typescript-eslint/prefer-for-of
  for (let i = 0; i < chars.length; i += 1)
    charFrequencyCount[chars.charCodeAt(i) - 97] += 1;

  // eslint-disable-next-line @typescript-eslint/prefer-for-of
  for (let i = 0; i < words.length; i += 1) {
    const charFrequencyCountCopy = [...charFrequencyCount];
    const word = words[i]!;
    let j = 0;

    for (; j < word.length; j += 1)
      if ((charFrequencyCountCopy[word.charCodeAt(j) - 97]! -= 1) < 0) break;

    if (word.length === j) goodStringsLengthSum += word.length;
  }

  return goodStringsLengthSum;
}
