/* eslint-disable @typescript-eslint/no-non-null-assertion */
function minCostClimbingStairs(cost: number[]): number {
  let firstStepCost = cost[0]!,
    secondStepCost = cost[1]!;

  for (let i = 2; i < cost.length; i += 1) {
    const currentCost = cost[i]! + Math.min(firstStepCost, secondStepCost);
    firstStepCost = secondStepCost;
    secondStepCost = currentCost;
  }

  return Math.min(firstStepCost, secondStepCost);
}
