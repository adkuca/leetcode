function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  if (x < 10) return true;
  if (x % 10 === 0) return false;

  let reversedSecondHalf = 0,
    firstHalf = x;
  while (firstHalf > reversedSecondHalf) {
    reversedSecondHalf = reversedSecondHalf * 10 + (firstHalf % 10);
    firstHalf = Math.floor(firstHalf / 10);
  }
  return (
    firstHalf === reversedSecondHalf ||
    firstHalf === Math.floor(reversedSecondHalf / 10)
  );
}
