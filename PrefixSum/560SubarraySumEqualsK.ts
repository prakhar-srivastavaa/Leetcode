function subarraySum(nums: number[], k: number): number {
  let count = 0;
  let n= nums.length;
  let currentsum=0;
  const prefixsumcount=new Map<number, number>();
  prefixsumcount.set(0,1);
for(const num of nums){
    currentsum +=num;//freq of prefixsumm of all
    if(prefixsumcount.has(currentsum-k)){
        count +=prefixsumcount.get(currentsum-k)!;//adding the freq of prefixsum 
    } 
    prefixsumcount.set(currentsum,(prefixsumcount.get(currentsum)??0)+1)
}
return count;

}