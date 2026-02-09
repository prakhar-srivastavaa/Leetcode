function largestRectangleArea(heights: number[]): number {
        const stack: number[] = [];
    let maxArea = 0;
    let index = 0;
    const n = heights.length;

    while (index < n) {
        // If this bar is higher than the bar at the stack's top index, push it to the stack
        if (stack.length === 0 || heights[index] >= heights[stack[stack.length - 1]]) {
            stack.push(index++);
        } else {
            // Pop the top
            const top = stack.pop() as number;
            // Calculate the area with heights[top] as the smallest (height)
            const width = stack.length === 0 ? index : index - stack[stack.length - 1] - 1;
            const area = heights[top] * width;
            if (area > maxArea) {
                maxArea = area;
            }
        }
    }
    // Remaining bars in stack
    while (stack.length > 0) {
        const top = stack.pop() as number;
        const width = stack.length === 0 ? index : index - stack[stack.length - 1] - 1;
        const area = heights[top] * width;
        if (area > maxArea) {
            maxArea = area;
        }
    }
    return maxArea;
};