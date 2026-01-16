function maxProduct(nums: number[]): number {
    let minProd=1;
    let maxProd=1;
    let res= Math.max(...nums)// to handle case when all numbers are negative
    for (let i=0;i<nums.length;i++){
        if(nums[i]==0){
            minProd=1
            maxProd=1
            continue;
        }
        let tmpMAX = maxProd*nums[i];// storing current maxProd before updating it for min calculation
        maxProd=Math.max(nums[i]*maxProd,minProd*nums[i], nums[i]);// deciding whether to add current element to existing subarray or start new subarray from current element
        minProd=Math.min(tmpMAX,minProd*nums[i],nums[i]);// for negative numbers we need to keep track of min product as well because when multiplied by another negative number it can become max
        res=Math.max(res,maxProd)
    }
    return res;
};