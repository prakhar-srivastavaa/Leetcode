class Solution {
public:
    bool isPalindrome(int x) {
        long rev=0;
        int temp=x;
        while(x>0){
            rev=rev*10+x%10;
            x=x/10;
        }
        return (temp==rev);
    }
};