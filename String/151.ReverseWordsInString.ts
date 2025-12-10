function reverseWords(s: string): string {
    // Explainiation of line 11
//     -s.trim()
// Removes extra spaces at the start and end of the string.
// " hello world ".trim() → "hello world"

// -.split(/\s+/)

// -Splits the string wherever there is one or more spaces.
// -\s means “any whitespace” (space, tab, newline).+ means “one or more”.
    const words =s.trim().split(/\s+/);
    let rev ="";
    for(let i=words.length-1;i>=0;i--){
        rev+= words[i];
        if(i!==0){
            rev+=" "
        }
    }
    return rev

};