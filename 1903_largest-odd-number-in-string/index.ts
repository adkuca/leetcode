/* eslint-disable @typescript-eslint/no-non-null-assertion */
function largestOddNumber(num: string): string {
  let rightmostOddNumberIndex = -1;

  for (let i = num.length; i >= 0; i -= 1)
    if (+num[i]! % 2 === 1) {
      rightmostOddNumberIndex = i;
      break;
    }

  if (rightmostOddNumberIndex === num.length) return num;

  return rightmostOddNumberIndex === -1
    ? ''
    : num.slice(0, rightmostOddNumberIndex + 1);
}
