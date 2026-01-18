function spiralOrder(matrix: number[][]): number[] {
    const result: number[] = [];
    if (matrix == null || matrix.length === 0) {
        return result;
    }

    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        // Traverse from left to right on the current top row
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++;  // Shift the top boundary down

        // Traverse from top to bottom on the current right column
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;  // Shift the right boundary left

        // Traverse from right to left on the current bottom row if top <= bottom
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--;  // Shift the bottom boundary up
        }

        // Traverse from bottom to top on the current left column if left <= right
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;  // Shift the left boundary right
        }
    }

    return result;
}