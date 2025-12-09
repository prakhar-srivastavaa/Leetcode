function firstMissingPositive(nums: number[]): number {
    // modifing array at corruct index
    for(let i=0;i<nums.length;i++){
        while(1<=nums[i]&& nums[i]<=nums.length && nums[nums[i]-1] != nums[i]){
            let curr_idx= nums[i]-1
            // nums[i],nums[curr_idx]=nums[curr_idx],nums[i]
            const temp = nums[curr_idx];//swaping
            nums[curr_idx] = nums[i];
            nums[i] = temp;
        }
    }
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=i+1){
            return i+1;
        }
    }
    return nums.length+1;

    
};