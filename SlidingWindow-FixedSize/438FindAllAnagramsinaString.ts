function findAnagrams(s: string, p: string): number[] {
    const result: number[] =[]
    if(s.length<p.length) return result;
    const pcount: number[]= new Array(26).fill(0);
    const scount: number[]= new Array(26).fill(0);
    
    for(let i=0;i<p.length;i++){
        pcount[p.charCodeAt(i)-97]++;
        scount[s.charCodeAt(i)-97]++;
    }
    for(let i=0;i<=s.length-p.length;i++){
        if(arraysEqual(pcount,scount)) result.push(i);
        if(i+p.length<s.length){
            scount[s.charCodeAt(i)-97]--;
            scount[s.charCodeAt(i+p.length)-97]++;
        }
    }
    return result;

    function arraysEqual(a:number[],b:number[]): boolean{
        for(let i=0;i<26;i++){
            if(a[i]!==b[i]){
                return false;
            }
        }
        return true;
    }
};