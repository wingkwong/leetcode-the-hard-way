class Solution {
public:
    long long int solve(vector<int>& nums,int i,vector<int>& dp)
    {
        if(i >= (nums.size()-1))
        {  
            return dp[i] = 0;
        }
            
        if(dp[i] != -1)return dp[i];
                
        long long int ans = INT_MAX;
        for(int j=1;j<=nums[i];j++)
            if(i+j<nums.size())
                ans = min(ans, 1 + solve(nums,i+j,dp));
        return dp[i] = ans;
    }
    
    int jump(vector<int>& nums) {
        
        vector<int> dp(nums.size(),-1);
        long long int ans = solve(nums,0.,dp);
        return ans;
    }
};