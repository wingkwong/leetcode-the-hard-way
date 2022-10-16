class Solution {
public:
    
    int rec(vector<int>& prices,int transactions,int buy,int i,vector<vector<vector<int>>> & dp)
    {
        if(transactions == 0 || i == prices.size())return 0;
        if(dp[i][buy][transactions] != -1 )return dp[i][buy][transactions];
        if(buy)
        {
            return dp[i][buy][transactions] = max(-prices[i] + rec(prices,transactions,0,i+1,dp) , rec(prices,transactions,1,i+1,dp));
        }
        else
        {
            return dp[i][buy][transactions] = max(prices[i]+rec(prices,transactions-1,1,i+1,dp) , rec(prices,transactions,0,i+1,dp));
        }
    }
    
    int maxProfit(vector<int>& prices) {
        vector<vector<vector<int>>> dp(prices.size(), vector<vector<int>> (2,vector<int> (3,-1)));
        return rec(prices,2,1,0,dp);
    }
};