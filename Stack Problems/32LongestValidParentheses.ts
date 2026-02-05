function longestValidParentheses(s: string): number {
        let left = 0, right = 0, maxLength = 0;

    // left to right 
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") left++;
        else right++;

        if (left === right) {
            maxLength = Math.max(maxLength, 2 * right);
        } else if (right > left) {
            left = right = 0; // reset 
        }
    }

    left = 0;
    right = 0;

    // right to left
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === "(") left++;
        else right++;

        if (left === right) {
            maxLength = Math.max(maxLength, 2 * left);
        } else if (left > right) {
            left = right = 0; // reset
        }
    }

    return maxLength;
};