/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let countnonzero=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==0){
            // swaping sing index
            [nums[i],nums[countnonzero]]=[nums[countnonzero],nums[i]];
            countnonzero++;
        }
    }  
};




