function maxArea(height: number[]): number {
    let l=0;
    let r=height.length-1;
    let maxarea=0;
    while(l<r){
        maxarea = Math.max(Math.min(height[l],height[r])*(r-l),maxarea); 
        if(height[l]>height[r]){
            r--;
            
        }
        else{
            l++;
        }
    }
    return maxarea
};