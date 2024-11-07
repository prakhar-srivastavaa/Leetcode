class Solution {
public:// find(part) will return 1st occouarnce index of part
    string removeOccurrences(string s, string part) {
        while(s.length() > 0 && s.find(part) < s.length()){
            s.erase(s.find(part), part.length());
        } 
        return s;
    }
};