function findAnagrams(s: string, p: string): number[] {
    let result:number[] =[];
    if(p.length>s.length){
        return result;
    }
    let pCount: number []= new Array(26).fill(0);
    let sCount: number []= new Array(26).fill(0);
 // storing a-z in array with a as 0 and z as 25 for str p and s
    for(let i=0;i<p.length;i++){
        pCount[p.charCodeAt(i)-97]++;
        sCount[s.charCodeAt(i)-97]++;
    }
    
    if(pCount.toString()===sCount.toString()){
        result.push(0);// if 1st sliding window matches
    }

    for(let i=p.length;i<s.length;i++){
        sCount[s.charCodeAt(i-p.length)-97]--;// eliminated left
        sCount[s.charCodeAt(i)-97]++; //added right one char only , means window silded to right side 
        if(sCount.toString()===pCount.toString()){
            result.push(i-p.length+1);
        }
    }
    return result;
    
};