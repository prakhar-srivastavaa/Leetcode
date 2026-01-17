function maxSubArray(nums: number[]): number {
    let currSum=nums[0];
    let maxSum=nums[0];//starting both with first element or can alos take int_min ie: Number.MIN_SAFE_INTEGER
    for (let i=1;i<nums.length;i++){// starting from 2nd element because 1st is already considered
        currSum=Math.max(nums[i],currSum+nums[i])// deciding whether to add current element to existing subarray or start new subarray from current element
        maxSum=Math.max(maxSum,currSum)
    }
    return maxSum;
}
// -----------------------OR-----------------------

function maxSubArray(nums: number[]): number {
    let currSum=Number.MIN_SAFE_INTEGER;
    let maxSum=Number.MIN_SAFE_INTEGER;
    for (let i=0;i<nums.length;i++){
        currSum=Math.max(nums[i],currSum+nums[i])
        maxSum=Math.max(maxSum,currSum)
    }
    return maxSum;
}