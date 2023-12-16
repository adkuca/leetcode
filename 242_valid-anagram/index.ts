function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const letterCounts = Array<number>(26).fill(0);

  for (let i = 0; i < s.length; i += 1) {
    letterCounts[s.charCodeAt(i) - 97] += 1;
    letterCounts[t.charCodeAt(i) - 97] -= 1;
  }

  for (let i = 0; i < 26; i += 1) if (letterCounts[i] !== 0) return false;

  return true;
}
