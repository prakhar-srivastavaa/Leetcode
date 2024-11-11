class Solution {
public:
    int reverse(int x) {
        int reNum=0;
        while(x!=0){
            int digit =x%10;
            reNum= reNum*10+digit;
            x=x/10;
        }
        return reNum;
    }
};