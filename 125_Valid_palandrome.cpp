class Solution {
public:
    bool isAplhanum(char ch){
        if((ch >= '0' && ch<= '9')||(tolower(ch)>='a' && tolower(ch) <='z')){
            return true;
        }
        return false;
    }
    bool isPalindrome(string s) {
        int st=0,end=s.length()-1;
…                return false;
            }
            st++; end--;
        }   
        return true;
    }
};