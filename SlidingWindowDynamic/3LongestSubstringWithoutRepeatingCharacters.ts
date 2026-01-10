function lengthOfLongestSubstring(s: string): number {
  const n = s.length;
  let maxLength = 0;
  let i = 0;
  const map = new Map<string, number>(); // Map<char, last seen index>

  for (let j = 0; j < n; j++) {
    const c = s[j];
    if (map.has(c)) {
      // Update start of window to new position
      i = Math.max(i, (map.get(c) as number) + 1);
    }
    map.set(c, j);
    maxLength = Math.max(maxLength, j - i + 1);
  }
  return maxLength;
}
