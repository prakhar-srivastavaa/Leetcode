class Solution {
public:
    int singleNonDuplicate(vector<int>& nums) {
        int n=nums.size();
        int start=0;
        int end=n-1;
        if (n==1) return nums[0];
        
        while(start<=end){
            int mid = start+(end-start)/2;
            if (mid==0&&nums[0]!= nums[1]) return nums[mid];
            if (nums[mid]!=nums[mid-1]&&nums[mid]!=nums[mid+1]){
                return nums[mid];
            }
            else if (mid%2==0){//even
                if(nums[mid-1]==nums[mid]){
                    end=mid-1;
                }
                else{
                    start=mid+1;
                }
            }
            else{//odd
                if(nums[mid]==nums[mid-1]){
                    start=mid+1;
                }
                else{
                    end=mid-1;
                }
            }
        }
        return -1;
    }
};