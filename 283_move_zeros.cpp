class Solution {
public:
    int count=0;
    void moveZeroes(vector<int>& nums) {
        vector<int> arr;
        int count=0;
        for (int i=0 ;i<nums.size();i++){
            if(nums[i]!=0){
                nums[count++]=nums[i];
            }
        }
        for (int i=count;i<nums.size();i++){
            nums[i]=0;
        }
    }
};