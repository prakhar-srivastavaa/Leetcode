function longestConsecutive(nums: number[]): number {
    const numset = new Set<number>(nums);
    let longeststreak = 0;
    for (let num of numset){
        if (!numset.has(num-1)){
            let currnum=num;
            let currstreak=1;
            while(numset.has(currnum+1)){
                currnum+=1;
                currstreak+=1;
            }
            longeststreak = Math.max(longeststreak,currstreak);
        } 
    }
    return longeststreak;
};