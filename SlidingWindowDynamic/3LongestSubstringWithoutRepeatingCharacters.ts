function lengthOfLongestSubstring(s: string): number {
    let max=0;
    let left=0;
    const map=new Map<string , number>()
    for(let right=0 ;right<s.length;right++){
        const c=s[right];
        if(map.has(c)){
            left=Math.max(left,(map.get(c))+1)
        }
        map.set(c,right);
        max= Math.max(max,right-left+1)
    }
    return max
};