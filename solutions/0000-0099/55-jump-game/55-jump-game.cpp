class Solution {
public:
    
//     bool solve(vector<int> & nums,int i,vector<int>& dp)
//     {
//         if(i==nums.size()-1)
//         {
//             return dp[i] = true;
//         }
//         if(dp[i]!= -1)return dp[i];
        
//         for(int j=1;j<=nums[i];j++)
//         {
//             if(i+j<nums.size())
//              if(solve(nums,i+j,dp))
//               return dp[i] = true;
//         }
//         return dp[i] = false;
//     }
        
    bool canJump(vector<int>& nums) {
        
        if(nums.size()<2)return true;
        
        vector<int> dp(nums.size(),false);
        dp[nums.size()-1] = true;
        for(int i=nums.size()-2;i>=0;i--)
        {
            bool flag = false;
            for(int j = 1;j<=nums[i];j++)
            {
                if(i+j >= nums.size() || dp[i+j] == true)
                {
                    flag = true;
                    break;
                }  
            }
            dp[i] = flag;
        }
        return dp[0];
    }
};