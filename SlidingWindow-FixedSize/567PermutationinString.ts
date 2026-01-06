function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) return false;

  const s1Count: number[] = new Array(26).fill(0);
  const s2Count: number[] = new Array(26).fill(0);

  for (let i = 0; i < s1.length; i++) {
    s1Count[s1.charCodeAt(i) - 97]++;
    s2Count[s2.charCodeAt(i) - 97]++;
  }

  for (let i = 0; i < s2.length - s1.length; i++) {
    if (matches(s1Count, s2Count)) return true;
    s2Count[s2.charCodeAt(i + s1.length) - 97]++;
    s2Count[s2.charCodeAt(i) - 97]--;
  }

  return matches(s1Count, s2Count);

  function matches(a: number[], b: number[]): boolean {
    for (let i = 0; i < 26; i++) if (a[i] !== b[i]) return false;
    return true;
  }
}