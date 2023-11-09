function longestPalindrome(input: string): string {
  const inputLen = input.length;
  if (inputLen <= 1) return input;

  let longestPalindromeStart = 0;
  let longestPalindromeEnd = 0;

  for (let i = 0; i < inputLen; i += 1) {
    const oddPalindromeRange = findLongestMatchingCharacterRange(input, i, i);
    [longestPalindromeStart, longestPalindromeEnd] = getLongerRange(
      [longestPalindromeStart, longestPalindromeEnd],
      oddPalindromeRange
    );

    if (i + 1 < inputLen) {
      const evenPalindromeRange = findLongestMatchingCharacterRange(input, i, i + 1);
      [longestPalindromeStart, longestPalindromeEnd] = getLongerRange(
        [longestPalindromeStart, longestPalindromeEnd],
        evenPalindromeRange
      );
    }
  }

  return input.slice(longestPalindromeStart, longestPalindromeEnd + 1);
}

function getLongerRange(a: [number, number], b: [number, number]): [number, number] {
  return a[1] - a[0] > b[1] - b[0] ? a : b;
}

function findLongestMatchingCharacterRange(
  input: string,
  leftExpandIndex: number,
  rightExpandIndex: number
): [number, number] {
  if (input.charAt(leftExpandIndex) !== input.charAt(rightExpandIndex))
    return [leftExpandIndex, leftExpandIndex];

  let left = leftExpandIndex;
  let right = rightExpandIndex;

  while (
    leftExpandIndex >= 0 &&
    rightExpandIndex < input.length &&
    input.charAt(leftExpandIndex) === input.charAt(rightExpandIndex)
  ) {
    left = leftExpandIndex;
    right = rightExpandIndex;
    leftExpandIndex -= 1;
    rightExpandIndex += 1;
  }

  return [left, right];
}
