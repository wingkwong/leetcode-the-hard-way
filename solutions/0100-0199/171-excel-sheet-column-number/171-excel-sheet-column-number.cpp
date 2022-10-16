class Solution {
public:
    int titleToNumber(string s) {
        long ans = 0;
        long poww = 1;
        while(s.size())
        {
            char last = s[s.size()-1];
            ans += (poww*(last - 'A' + 1));
            poww *= 26;
            s.pop_back();
        }
        return ans;
    }
};