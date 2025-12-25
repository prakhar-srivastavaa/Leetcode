class Solution {
public:
    int reverse(int x) {
        int reNum=0;
        while(x!=0){
            int digit =x%10;
            if(reNum>INT_MAX/10|| reNum<INT_MIN/10){
                return 0;
            }
            reNum= reNum*10+digit;
            x=x/10;
        }
        return reNum;
    }
};