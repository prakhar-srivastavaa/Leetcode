function isIsomorphic(s: string, t: string): boolean {
    // Agar length alag hai toh kabhi isomorphic nahi ho sakte
    if (s.length !== t.length) return false;

    // Do HashMaps banayein
    const mapST = new Map<string, string>();
    const mapTS = new Map<string, string>();

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        // 1. Check karo s -> t mapping sahi hai ya nahi
        if (mapST.has(charS) && mapST.get(charS) !== charT) {
            return false;
        }

        // 2. Check karo t -> s mapping sahi hai ya nahi
        if (mapTS.has(charT) && mapTS.get(charT) !== charS) {
            return false;
        }

        // Mapping save kar lo
        mapST.set(charS, charT);
        mapTS.set(charT, charS);
    }

    return true;
}

