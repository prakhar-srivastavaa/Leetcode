function findMaxLength(nums: number[]): number {
  let maxLength = 0;
  for (let start = 0; start < nums.length; start++) {
    let count = 0;
    for (let end = start; end < nums.length; end++) {
      // Treat 0 as -1, and 1 as 1, calculate the sum
      count += nums[end] === 0 ? -1 : 1;
      // If the count from start to end index is zero, we found an equal subarray
      if (count === 0) {
        maxLength = Math.max(maxLength, end - start + 1);
      }
    }
  }
  return maxLength;
}