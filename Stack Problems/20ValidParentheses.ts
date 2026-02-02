function isValid(s: string): boolean {
    let stack:string[]=[];
    if(s.length===0){
        return false;
    }
    for(const n of s){
        if(n==="("||n==="["||n==="{"){
            stack.push(n);
        }
        else{
            const top=stack.pop() as string;
            if(n===")"&& top!=="(") return false;
            if(n==="]"&& top!=="[")return false;
            if(n==='}'&& top!=="{") return false;
        }
    }
    if(stack.length!==0){
        return false;
    }
    return true;
};