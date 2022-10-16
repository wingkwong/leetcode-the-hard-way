class Solution {
public:
    int minimumTotal(vector<vector<int>>& triangle) {
        int n = triangle.size();
        
        vector<vector<int>> dp(n,vector<int> (n,0));
        int ans = INT_MAX;
        for(int i=0;i<n;i++)
        {
            for(int j=0;j<=i;j++)
            {
                if(i == 0 && j == 0)
                    dp[i][j] = triangle[i][j];
                else if(j==0)
                {
                    dp[i][j] = dp[i-1][j] + triangle[i][j];
                }
                else if(j==i)
                {
                    dp[i][j] = dp[i-1][j-1] + triangle[i][j];
                }
                else
                    dp[i][j] = min(dp[i-1][j], dp[i-1][j-1]) + triangle[i][j];
                
                if(i==n-1)
                    ans = min(ans,dp[i][j]); 
            }
        }
        return ans;
        
    }
};