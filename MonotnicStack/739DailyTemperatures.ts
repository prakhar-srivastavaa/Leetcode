function dailyTemperatures(T: number[]): number[] {
    const n = T.length;
    const result: number[] = new Array(n).fill(0);
    const stack: number[] = []; // stack of indices
    
    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && T[i] > T[stack[stack.length - 1]]) {
            const index = stack.pop() as number;
            result[index] = i - index; // The difference in days
        }
        stack.push(i);
    }
    
    return result;
};