function subarraySum(nums: number[], k: number): number {
  let count = 0;
  // Iterate through each starting point of the subarray
  for (let start = 0; start < nums.length; start++) {
    let sum = 0;
    // Iterate through each possible end point
    for (let end = start; end < nums.length; end++) {
      sum += nums[end]; // Add the current number to the sum of the subarray
      if (sum === k) {
        count++; // If the sum equals k, we found a subarray
      }
    }
  }
  return count;
}