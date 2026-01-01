function subarraySum(nums: number[], k: number): number {
  let count = 0;
  let currentSum = 0;
  const prefixSumCount = new Map<number, number>();
  prefixSumCount.set(0, 1);  // Base case: A sum of zero is encountered once

  // Iterate through each number in the array
  for (const num of nums) {
    currentSum += num;  // Update the cumulative sum
    // Check if there is a subarray (ending at current index) which has the sum of k
    if (prefixSumCount.has(currentSum - k)) {
      count += prefixSumCount.get(currentSum - k)!;
    }
    // Record the current cumulative sum in the hashmap
    prefixSumCount.set(currentSum, (prefixSumCount.get(currentSum) ?? 0) + 1);
  }
  return count;
}