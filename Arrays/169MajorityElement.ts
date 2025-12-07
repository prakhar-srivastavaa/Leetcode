function majorityElement(nums: number[]): number {
    let n=nums.length/2;
    for (let i =0;i<nums.length;i++){
        let count =1;
        for (let j=1;j<nums.length;j++){
            if(nums[i]==nums[j]){
                count++;
            }
        }
        if(count>n){
            return nums[i]
        }
    }
    return -1;
};