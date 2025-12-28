function threeSum(nums: number[]): number[][] {
    const result = [];
    nums=nums.sort((a,b)=>(a-b));
    for(let i=0;i<nums.length;i++){
        if(i==0 || nums[i]!=nums[i-1]){
            let l=i+1;
            let r=nums.length-1;
            while(l<r){
                let threeSum= nums[i]+nums[l]+nums[r];
                if (threeSum>0){
                    r--;
                }
                else if(threeSum<0){
                    l++;
                }
                else{
                    result.push([nums[i],nums[l],nums[r]])
                    l++;
                    r--;
                }
            }
        }
    }
    return result;
}