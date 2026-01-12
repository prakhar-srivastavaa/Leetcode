function maxSubArray(nums: number[]): number {
  let currentSum = nums[0]; // Start with the first element
  let maxSum = nums[0];     // Initialize maxSum with the first element

  // Traverse the array from the second element
  for (let i = 1; i < nums.length; i++) {
    // If currentSum is negative, reset to current element
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    // Update maxSum if currentSum is greater
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}