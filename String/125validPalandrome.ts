function isPalindrome(s: string): boolean {
    let l=0, r=s.length-1;
    const isAlphaNum=(ch:string) : boolean =>/[a-z0-9]/i.test(ch);
    while(l<r){
        while(l<r && !isAlphaNum(s[l])){
            l++;
        }
        while(l<r && !isAlphaNum(s[r])){
            r--;
        }
        if(s[l].toLowerCase()!== s[r].toLowerCase()){
            return false;
        }
        l++;
        r--;
    }
    return true;
    
};