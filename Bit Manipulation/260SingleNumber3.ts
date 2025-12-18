function singleNumber(nums: number[]): number[] {
    let xorr = 0;
    
    // Step 1: XOR everything. 
    // Result is (num1 ^ num2) because pairs cancel out.
    for (const num of nums) {
        xorr ^= num;
    }

    // Step 2: Isolate the rightmost set bit.
    // This bit represents a position where num1 and num2 differ.
    const rightmost = xorr & -xorr;

    let bucket1 = 0;
    let bucket2 = 0;

    // Step 3: Divide numbers into two groups based on that bit.
    for (const num of nums) {
        if ((num & rightmost) !== 0) {
            bucket1 ^= num;
        } else {
            bucket2 ^= num;
        }
    }

    return [bucket1, bucket2];
}