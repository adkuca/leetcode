/* eslint-disable @typescript-eslint/no-non-null-assertion */
function reductionOperations(nums: number[]): number {
  return nums.length > 1300
    ? reductionOperationsWithFrequencyMapping(nums)
    : reductionOperationsWithSort(nums);
}

function reductionOperationsWithSort(nums: number[]): number {
  nums.sort((a, b) => a - b);

  const secondLowestIndex = nums.findIndex((num) => num !== nums[0]);

  if (secondLowestIndex === -1) return 0;

  let operationCount = 0;

  for (let i = secondLowestIndex; i < nums.length; i += 1) {
    if (nums[i] === nums[i - 1]) continue;

    operationCount += nums.length - i;
  }

  return operationCount;
}

function reductionOperationsWithFrequencyMapping(nums: number[]): number {
  const indexBasedNumberFrequencyCounts = new Array<undefined | number>(50001);

  // eslint-disable-next-line @typescript-eslint/prefer-for-of
  for (let i = 0; i < nums.length; i += 1) {
    if (indexBasedNumberFrequencyCounts[nums[i]!] === undefined)
      indexBasedNumberFrequencyCounts[nums[i]!] = 1;
    else indexBasedNumberFrequencyCounts[nums[i]!]! += 1;
  }

  let operationCount = 0;
  let iterationCount = 0;

  indexBasedNumberFrequencyCounts.forEach((frequencyCount) => {
    if (iterationCount !== 0) operationCount += frequencyCount! * iterationCount;

    iterationCount += 1;
  });

  return operationCount;
}
