/* eslint-disable @typescript-eslint/no-non-null-assertion */
function findArray(pref: number[]): number[] {
  const res = new Array<number>(pref.length);
  res[0] = pref[0]!;
  for (let i = 1; i < pref.length; i += 1) res[i] = pref[i - 1]! ^ pref[i]!;

  return res;
}
