/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    // #O(1) memory sol^n
    // using self matrix col and rows to optimise the space to O(1)
    let rows=matrix.length;// no of rows
    let cols= matrix[0].length;// no of cols
    let rowZero=false;// to handle the first row separately as it collides with first col
    for (let r=0;r<rows;r++){
        for(let c=0;c<cols;c++){
            if(matrix[r][c]==0){
                matrix[0][c]=0;
                if(r>0){//because rowzero is already occupied by col 1st and row 1s will colide so we took seperate rowZeros as false
                    matrix[r][0]=0;
                }
                else{
                    rowZero= true;
                }
            }
        }
    }

    // now updating with zeros
    for(let r=1 ;r<rows;r++){
        for(let c=1;c<cols;c++){
            if(matrix[0][c]==0 || matrix[r][0]==0){
                matrix[r][c]=0;
            }
        }
    }
    // now handeling the 1st one that we set as false and true
    if(matrix[0][0]==0){
        for(let r=0;r<rows;r++){
            matrix[r][0]=0
        }
    }
    if(rowZero == true){
        for(let c=0;c<cols;c++){
            matrix[0][c]=0 
        }
    }

};