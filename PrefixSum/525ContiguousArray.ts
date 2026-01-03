function findMaxLength(nums: number[]): number {
    const sumIndexMap = new Map<number, number>();
    sumIndexMap.set(0, -1); // base case

    let maxLength = 0;
    let runningSum = 0;

    for (let i = 0; i < nums.length; i++) {
        runningSum += nums[i] === 0 ? -1 : 1;

        if (sumIndexMap.has(runningSum)) {
            const prevIndex = sumIndexMap.get(runningSum)!;
            maxLength = Math.max(maxLength, i - prevIndex);
        } else {
            sumIndexMap.set(runningSum, i);
        }
    }

    return maxLength;
}