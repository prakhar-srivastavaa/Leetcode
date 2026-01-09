function findAnagrams(s: string, p: string): number[] {
    let len_p = p.length;
    let len_s = s.length;
    if (len_p > len_s) {
        return [];
    }
    const p_freq: number[] = new Array(26).fill(0);
    const window: number[] = new Array(26).fill(0);

    for (let i = 0; i < len_p; i++) {
        p_freq[p.charCodeAt(i) - 97]++;
        window[s.charCodeAt(i) - 97]++;
    }
    console.log('Initial p_freq:', p_freq);
    console.log('Initial window:', window);
    const ans: number[] = [];
    if (p_freq.toString() === window.toString()) {
        console.log(`Match at index 0:`, window);
        ans.push(0); // if 1st sliding window matches
    }
    for (let i = len_p; i < len_s; i++) {
        window[s.charCodeAt(i - len_p) - 97]--;
        window[s.charCodeAt(i) - 97]++;
        console.log(`Window after moving to index ${i - len_p + 1}:`, window);
        if (p_freq.toString() === window.toString()) {
            console.log(`Match at index ${i - len_p + 1}:`, window);
            ans.push(i - len_p + 1);
        }
    }
    return ans;
}

const s = "wcbaebabacd";
const p = "abc";
const result = findAnagrams(s, p);
console.log(result);


