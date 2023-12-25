function numDecodings(s: string): number {
  if (s.length === 0 || s.startsWith('0')) return 0;

  let waysToDecodeUpToPrev = 1,
    waysToDecodeUpToCurrent = 1;

  for (let i = 1; i < s.length; i += 1) {
    let waysToDecodeNext = 0;

    if (s[i] !== '0') waysToDecodeNext += waysToDecodeUpToCurrent;

    const twoDigitNum = +`${s[i - 1]}${s[i]}`;

    if (twoDigitNum >= 10 && twoDigitNum <= 26)
      waysToDecodeNext += waysToDecodeUpToPrev;

    waysToDecodeUpToPrev = waysToDecodeUpToCurrent;
    waysToDecodeUpToCurrent = waysToDecodeNext;
  }

  return waysToDecodeUpToCurrent;
}
