function trap(height: number[]): number {
    // intution is we calculate area of every height and sum in totalarea 
    let totalarea=0;
    let l=0;
    let r=height.length -1;
    let lmax=0;
    let rmax=0;
    while(l<r){
        if(height[l] <= height[r]){
            if(lmax>height[l]){
                totalarea+=lmax-height[l];
            }
            else{
                lmax=height[l];// itself is gretest 
            }
            l++;
        }
        else{
            if(rmax>height[r]){
                totalarea+= rmax-height[r];
            }
            else{
                rmax=height[r];
            }
            r--;
        }
    }
    return totalarea;
    
};