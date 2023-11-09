// function handleRepeatedCharSequences(
//   input: string,
//   handler: (char: string, count: number) => void
// ): void {
//   for (let index = 0; index < input.length; ) {
//     const startIndex = index;
//     const char = input[startIndex]!;

//     while (index < input.length && input[index] === char) index += 1;

//     handler(char, index - startIndex);
//   }
// }

// function countHomogenous(s: string): number {
//   const MOD = 1_000_000_007;
//   const homogenousSubstringCountPerChar = new Map<string, number>();

//   const getTriangularNumber = (num: number) => ((num * (num + 1)) / 2) % MOD;

//   handleRepeatedCharSequences(s, (char, count) => {
//     homogenousSubstringCountPerChar.set(
//       char,
//       ((homogenousSubstringCountPerChar.get(char) ?? 0) +
//         getTriangularNumber(count)) %
//         MOD
//     );
//   });

//   let totalHomogenousSubstringsCount = 0;
//   for (const charsHomogenousSubstringsCount of homogenousSubstringCountPerChar.values())
//     totalHomogenousSubstringsCount =
//       (totalHomogenousSubstringsCount + charsHomogenousSubstringsCount) % MOD;

//   return totalHomogenousSubstringsCount;
// }

function countHomogenous(s: string): number {
  const MOD = 1_000_000_007;
  let consecutiveCharCount = 1;
  let homogenousSubstringsCount = 1;

  for (let index = 1; index < s.length; index += 1) {
    if (s[index] === s[index - 1]) consecutiveCharCount += 1;
    else consecutiveCharCount = 1;

    homogenousSubstringsCount =
      (homogenousSubstringsCount + consecutiveCharCount) % MOD;
  }

  return homogenousSubstringsCount;
}
