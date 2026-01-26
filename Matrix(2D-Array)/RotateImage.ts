/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    let n = matrix.length;
    //transposing
    for (let i=0;i<n-1 ;i++){
        for (let j=i+1;j<n;j++){
            // const temp= matrix[i][j];
            // matrix[i][j]=matrix[j][i];
            // matrix[j][i]= temp;
            [matrix[i][j], matrix[j][i]]=[matrix[j][i],matrix[i][j]];
        }
    }
    // reverssing now
    for(let i=0;i<n;i++){
        matrix[i].reverse();
    } 
};