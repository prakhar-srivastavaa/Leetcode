class Solution {
public:
    int maxArea(vector<int>& height) {
        int lp=0;
        int rp=height.size()-1;
        int maxVol=INT_MIN;

        while(lp<rp){
            int width=rp-lp;
            int ht=min(height[rp],height[lp]);
            int currVol=width*ht;
            maxVol=max(maxVol,currVol);
            if(height[rp]>height[lp]){
                lp++;
            }
            else{
                rp--;
            }
        }
        return maxVol;
    }
};
