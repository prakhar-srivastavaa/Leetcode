class Solution {
public:
    bool searchinRow(vector<vector<int>>& matrix, int target, int row, int n){
        int st=0,end=n-1;
        while(st<=end){
            int mid=st+(end-st)/2;
            if (target==matrix[row][mid]){
                return true;
            }else if(target > matrix[row][mid]){
                st=mid+1;
            }else{
                end=mid-1;
            }
        }
        return false;

    }
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        // //bs on totao no of rows 
        int m = matrix.size();
        int n= matrix[0].size();
        int startRow=0,endRow=m-1;
        while(startRow <= endRow){
            int midRow= startRow +(endRow-startRow)/2;
            if(target>=matrix[midRow][0]&& target<=matrix[midRow][n-1]){
                //found row now bS on row
                return searchinRow(matrix,target,midRow,n);
            }else if(target >= matrix[midRow][n-1]){
                //d0wn => right
                startRow=midRow+1;
            }else{
                //up=> left
                endRow=midRow-1;
            }
        }
        return false;
    }
};