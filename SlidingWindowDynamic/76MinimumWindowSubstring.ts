function minWindow(s: string, t: string): string {
  if (s.length === 0 || t.length === 0) return "";

  const tFreq = new Map<string, number>();
  const windowFreq = new Map<string, number>();

  // Store frequency of characters in t
  for (const c of t) {
    tFreq.set(c, (tFreq.get(c) ?? 0) + 1);
  }

  let left = 0, right = 0;
  let matched = 0;
  let minLength = Number.MAX_SAFE_INTEGER;
  let start = 0;

  // Expand the window with the right pointer
  while (right < s.length) {
    const c = s[right];
    windowFreq.set(c, (windowFreq.get(c) ?? 0) + 1);

    if (tFreq.has(c) && windowFreq.get(c) === tFreq.get(c)) {
      matched++;
    }

    // If all characters are matched, try to shrink the window
    while (matched === tFreq.size) {
      if (right - left + 1 < minLength) {
        minLength = right - left + 1;
        start = left;
      }

      // Remove the character at the left pointer from the window
      const leftChar = s[left];
      if (windowFreq.has(leftChar)) {
        windowFreq.set(leftChar, (windowFreq.get(leftChar) as number) - 1);
        if (tFreq.has(leftChar) && (windowFreq.get(leftChar) as number) < (tFreq.get(leftChar) as number)) {
          matched--;
        }
      }
      left++;
    }

    right++;
  }

  return minLength === Number.MAX_SAFE_INTEGER ? "" : s.slice(start, start + minLength);
}