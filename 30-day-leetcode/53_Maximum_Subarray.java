class Solution {
    public int maxSubArray(int[] nums) {
        int maxs=nums[0];
        int n=nums.length;
        int currsum=nums[0];
        for(int j=1;j<n;j++){
            
            currsum=Math.max(nums[j],currsum+nums[j]);
            maxs=Math.max(currsum,maxs);
        }
        return maxs;
    }
}
