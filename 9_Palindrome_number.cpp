class Solution {
public:
    int reverse(int x){
        int revN=0;
        while (x!=0){
            int digit=x%10;
            if(revN>INT_MAX/10||revN<INT_MIN/10){
                return 0;
            }
            revN=revN*10+digit;
…        }else {
            return 0;
        }   
    }
};