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
            x=x/10;
        }
        return revN;
    }

    bool isPalindrome(int x) {
        if(x<0) return false;
        int revN=reverse(x);
        if(x==revN){
            return 1;
        }else {
            return 0;
        }   
    }
};