// Kadane's Algorithm
class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int currSum = 0;
        int maxSum = INT_MIN;
        for (int values : nums){
            currSum = currSum + values;
            maxSum = max(maxSum,currSum);
            if (currSum <0){
                currSum =0;
            }
        }
        return maxSum;
    }
};