function productExceptSelf(nums: number[]): number[] {
    let n=nums.length;
    let left: number[] = new Array<number>(n);
    let right: number[] = new Array<number>(n);
    let result: number[] =new Array<number>(n);
    left[0]=1;
    for (let i =1; i<n;i++){
        left[i]=left[i-1]*nums[i-1];// [1,1,2,6]
    }
    right[n-1]=1;
    for(let i=n-2;i>=0;i--){
        right[i]=right[i+1]*nums[i+1];// [24,12,4,1]
    }
    for(let i=0;i<n;i++){
        result[i]= left[i]*right[i];// [24,12,8,6]
    }
    return result;
    
    
};