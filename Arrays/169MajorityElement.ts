function majorityElement(nums: number[]): number {
    let n=nums.length/2;
    let count =0;
    let el;
    for (let i= 0;i<nums.length;i++){
        // 34 3
        if(count ==0){
            count=1;
            el=nums[i];
        }
        else if(nums[i]==el){
            count++;
        }
        else{
            count--;
        }
    } 
    // chceking n/2
    let count1=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]==el) count1++;
    }
    if(count1>n){ return el;}
    

};