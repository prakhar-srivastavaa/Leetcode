function findAnagrams(s: string, p: string): number[] {
    let len_p=p.length;
    let len_s=s.length;
    if(len_p>len_s){
        return [];
    }
    const p_freq:number[]= new Array(26).fill(0);
    const window: number[]= new Array(26).fill(0);

    for(let i=0; i<len_p;i++){
        p_freq[p.charCodeAt(i)-97]++;
        window[s.charCodeAt(i)-97]++;
    }
    const ans:number[]=[];
    if(p_freq.toString()===window.toString()){
        ans.push(0);//if 1st sliding windown matches
    }
    for (let i=len_p;i<len_s;i++){
        window[s.charCodeAt(i-len_p)-97]--;//left
        window[s.charCodeAt(i)-97]++;//right window

        if(p_freq.toString()==window.toString()){
            ans.push(i-len_p+1);
        }
    }
    return ans;
};