class Solution {
public:
    int compress(vector<char>& chars) {
        string ans="";
        int n = chars.size();
        int idx=0;
        for(int i=0; i<n;i++){
            int frq=0;
            char currCh=chars[i];
            while (i<n&&chars[i]==currCh){
                frq++;
                i++;
            }
            if (frq ==1){
                chars[idx++]=currCh;
            }
            else{
                chars[idx++]=currCh;
                string str =to_string(frq);
                for(char dig:str){
                        chars[idx++]=dig;
                }
            }
            i--;

            
        }
        chars.resize(idx);
        return idx;
        
    }
};