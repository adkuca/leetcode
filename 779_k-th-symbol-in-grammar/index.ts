/* eslint-disable @typescript-eslint/no-non-null-assertion */
function kthGrammar(n: number, k: number): number {
  let currentSymbol: 0 | 1 = 0;
  const map: ([0, 1] | [1, 0])[] = [
    [0, 1],
    [1, 0],
  ];

  for (let i = 1; i <= n; i += 1) {
    const columnIndex = Math.ceil(k / Math.pow(2, n - i));
    const symbolIndex = columnIndex % 2 === 1 ? 0 : 1;
    currentSymbol = map[currentSymbol]![symbolIndex];
  }

  return currentSymbol;
}
