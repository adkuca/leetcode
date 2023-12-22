/* eslint-disable @typescript-eslint/no-non-null-assertion */
function maxScore(s: string): number {
  const lastIndex = s.length - 1;
  let totalOnes = 0;

  for (let i = 0; i <= lastIndex; i += 1) if (s[i] === '1') totalOnes += 1;

  if (totalOnes === 0 || totalOnes === s.length) return s.length - 1;

  let leftOnes = 0,
    leftZeros = 0;
  let maxScore = 0;

  for (let i = 0; i < lastIndex; i += 1) {
    if (s[i] === '1') leftOnes += 1;
    else leftZeros += 1;

    const currScore = leftZeros + totalOnes - leftOnes;

    if (currScore > maxScore) maxScore = currScore;
  }

  return maxScore;
}
