function findMaxLength(nums: number[]): number {
    for(let i=0; i<nums.length;i++){
        if(nums[i]==0){
            nums[i]=-1;
        }
    }
    let sum=0;
    let maxsum=0;
    const mapp= new Map<number,number>();//map=set,has,get
    mapp.set(0,-1);
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
        if(mapp.has(sum)){
            let last=mapp.get(sum);
            maxsum = Math.max(maxsum,i-last);
        }
        else{
            mapp.set(sum,i)
        }
    }
        return maxsum;
}
