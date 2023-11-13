function sortVowels(s: string): string {
  type Vowel = 'A' | 'E' | 'I' | 'O' | 'U' | 'a' | 'e' | 'i' | 'o' | 'u';

  const vowelCountMap = new Map<Vowel, number>([
    ['A', 0],
    ['E', 0],
    ['I', 0],
    ['O', 0],
    ['U', 0],
    ['a', 0],
    ['e', 0],
    ['i', 0],
    ['o', 0],
    ['u', 0],
  ]);

  const chars = new Array<string | null>(s.length);

  for (let i = 0; i < s.length; i += 1) {
    const char = s[i]!;
    const currentVowelsCount = vowelCountMap.get(char as Vowel);

    if (currentVowelsCount !== undefined)
      vowelCountMap.set(char as Vowel, currentVowelsCount + 1);

    chars[i] = currentVowelsCount === undefined ? char : null;
  }

  const ascendingCountBasedVowels = (function* ascendingCountBasedVowelsGenerator() {
    for (const [vowel, count] of vowelCountMap)
      for (let i = 0; i < count; i += 1) yield vowel;
  })();

  let nextVowel = ascendingCountBasedVowels.next();
  if (nextVowel.done) return s;

  for (let i = 0; i < chars.length; i += 1) {
    if (chars[i] !== null) continue;

    chars[i] = nextVowel.value;
    nextVowel = ascendingCountBasedVowels.next();

    if (nextVowel.done) break;
  }

  return (chars as string[]).join('');
}
