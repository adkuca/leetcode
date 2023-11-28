/* eslint-disable @typescript-eslint/no-non-null-assertion */
function knightDialer(n: number): number {
  if (n === 1) return 10;

  const mod = 1_000_000_007;
  let uniqPhoneNumCountPerDialNumGroup = [1, 1, 1, 1];

  for (let i = 1; i < n; i += 1) {
    uniqPhoneNumCountPerDialNumGroup = [
      (uniqPhoneNumCountPerDialNumGroup[3]! * 2) % mod,
      (uniqPhoneNumCountPerDialNumGroup[3]! + uniqPhoneNumCountPerDialNumGroup[2]!) %
        mod,
      (uniqPhoneNumCountPerDialNumGroup[1]! * 2) % mod,
      (uniqPhoneNumCountPerDialNumGroup[0]! +
        uniqPhoneNumCountPerDialNumGroup[1]! * 2) %
        mod,
    ];
  }

  return (
    (uniqPhoneNumCountPerDialNumGroup[0]! +
      ((uniqPhoneNumCountPerDialNumGroup[1]! * 4) % mod) +
      ((uniqPhoneNumCountPerDialNumGroup[2]! * 2) % mod) +
      ((uniqPhoneNumCountPerDialNumGroup[3]! * 2) % mod)) %
    mod
  );
}