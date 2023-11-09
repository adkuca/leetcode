/* eslint-disable @typescript-eslint/no-non-null-assertion */
function buildArray(target: number[], n: number): ('Push' | 'Pop')[] {
  const operations: ('Push' | 'Pop')[] = [];
  let difference = 1;

  for (let index = 0; index < target.length; index += 1) {
    while (difference++ < target[index]!) operations.push('Push', 'Pop');
    operations.push('Push');
  }

  return operations;
}
