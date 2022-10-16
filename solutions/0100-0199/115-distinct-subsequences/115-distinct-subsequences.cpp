class Solution {
public:
    
int count(string &s, string &t, int i, int j,vector<vector<int>>& dp)
{
    if( j < 0)
    {
        return 1;
    }
    if(i < 0)
        return 0;
    if(dp[i][j] != -1)return dp[i][j];
    
    if(s[i] == t[j])
    {
        return dp[i][j] = (count(s,t,i-1,j-1,dp) + count(s,t,i-1,j,dp));
    }
    else
        return dp[i][j] = count(s,t,i-1,j,dp);
}
    int numDistinct(string s, string t) {
        int ls = s.size();
        int lt = t.size();
        vector<vector<int>> dp(ls+1,vector<int> (lt+1,-1));
        return count(s,t,ls-1,lt-1,dp);
    }
};