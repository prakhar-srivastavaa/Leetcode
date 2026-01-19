function spiralOrder(matrix: number[][]): number[] {
    let n=matrix.length;//rows
    let m=matrix[0].length;//col

    let left= 0, right=m-1;
    let top=0, bottom=n-1
    const answer: number[]=[]
    
    while(top<=bottom && left<=right){
        //right
        for(let i=left;i<=right;i++){
            answer.push(matrix[top][i]);
        }
        top++;
        for(let i=top;i<=bottom;i++){
            answer.push(matrix[i][right]);
        }
        right--;
        if(top<=bottom){
            for(let i=right;i>=left;i--){
                answer.push(matrix[bottom][i]);
            }
            bottom--;
        }
        if(left<=right){
            for(let i=bottom;i>=top;i--){
                answer.push(matrix[i][left]);
            }
            left++;
        }
    }
    return answer;

}