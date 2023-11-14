/* eslint-disable @typescript-eslint/no-non-null-assertion */
function countPalindromicSubsequence(s: string): number {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const inputsLetterBounds = new Array<[number, number] | null>(26).fill(null); // -97 charCode based
  let palindromicSubsequenceCount = 0;
  let uniqueLettersCount = 0;

  // eslint-disable-next-line @typescript-eslint/prefer-for-of
  for (let i = 0; i < alphabet.length; i += 1) {
    const letter = alphabet[i]!;
    const start = s.indexOf(letter);

    if (start === -1) continue;

    uniqueLettersCount += 1;
    const end = s.lastIndexOf(letter);

    if (start === end) continue;

    inputsLetterBounds[letter.charCodeAt(0) - 97] = [start, end];
  }

  inputsLetterBounds.forEach((letterBounds) => {
    if (letterBounds === null) return;

    const [start, end] = letterBounds;

    if (end - start < 2) return;

    const lettersVisitedWithinSubarray = new Array<0 | 1>(26).fill(0);
    let uniqueLettersWithinSubarrayCount = 0;

    for (let i = start + 1; i < end; i += 1) {
      if (lettersVisitedWithinSubarray[s.charCodeAt(i)]) continue;

      lettersVisitedWithinSubarray[s.charCodeAt(i)] = 1;
      uniqueLettersWithinSubarrayCount += 1;

      if (uniqueLettersWithinSubarrayCount === uniqueLettersCount) break;
    }

    palindromicSubsequenceCount += uniqueLettersWithinSubarrayCount;
  });

  return palindromicSubsequenceCount;
}
