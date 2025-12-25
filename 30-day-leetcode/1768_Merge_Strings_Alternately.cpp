class Solution {
public:
    string mergeAlternately(string word1, string word2) {
        string p="";
        int m=word1.length(), n=word2.length();
        int o=max(m,n);
        int st=0, end=o;
        while(st<end){
            if(st<m){
                p+=word1[st];
            }if(st<n){
                p+=word2[st];
            }
            st++;
        }
        return p;
    }
};