function spiralOrderTs(matrix: number[][]): number[] {
    const result: number[] = [];
    if (matrix == null || matrix.length === 0) {
        return result;
    }

    const m = matrix.length;
    const n = matrix[0].length;
    const visited: boolean[][] = Array.from({ length: m }, () => Array(n).fill(false));
    const dr: number[] = [0, 1, 0, -1]; // direction control array for row
    const dc: number[] = [1, 0, -1, 0]; // direction control array for column
    let r = 0, c = 0, di = 0; // start from top-left corner

    for (let i = 0; i < m * n; i++) {
        result.push(matrix[r][c]);
        visited[r][c] = true;
        const newR = r + dr[di];
        const newC = c + dc[di];

        // If the new coordinates are out of bounds or already visited, switch direction
        if (newR >= 0 && newR < m && newC >= 0 && newC < n && !visited[newR][newC]) {
            r = newR; // move to the next cell in current direction
            c = newC;
        } else {
            di = (di + 1) % 4; // change the direction
            r += dr[di];
            c += dc[di];
        }
    }

    return result;
}