function containsNearbyDuplicate(nums: number[], k: number): boolean {
        const map = new Map<number, number>();
        for (let i=0 ;i<nums.length;i++){
            if(map.has(nums[i])&& i-(map.get(nums[i]))<=k){//3-1//2-1
                return true;
            }
            map.set(nums[i],i);//10,21,32,13//10,01,
        }
        return false;
};