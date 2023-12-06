function totalMoney(n: number): number {
  const completeWeeks = ~~(n / 7);
  const extraDays = n % 7;

  // const totalMoneyForCompleteWeeks =
  //   28 * completeWeeks + 7 * (((completeWeeks - 1) * completeWeeks) / 2);
  const totalMoneyForCompleteWeeks = 3.5 * completeWeeks ** 2 + 24.5 * completeWeeks;

  const totalMoneyForExtraDays =
    (extraDays * (extraDays + 1)) / 2 + extraDays * completeWeeks;

  return totalMoneyForCompleteWeeks + totalMoneyForExtraDays;
}
