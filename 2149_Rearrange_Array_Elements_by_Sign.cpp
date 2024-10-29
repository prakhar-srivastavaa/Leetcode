class Solution {
public:
    vector<int> rearrangeArray(vector<int>& nums) {
        // int n = nums.size();
        vector<int> ans(nums.size(),0);
        int Positive=0; int negative=1;
        for (int i=0;i<nums.size();i++){
            if (nums[i]<0){//negative no.
                ans[negative]=nums[i];
                negative+=2;
            }else{
                ans[Positive]=nums[i];
                Positive+=2;
            }
        }
        return ans;
    }
};