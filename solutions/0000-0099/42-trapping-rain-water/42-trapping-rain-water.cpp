class Solution {
public:
    int trap(vector<int>& nums) {
        
        int ans = 0;
        int n = nums.size();
        vector<int> left(n);
        vector<int> right(n);
        int lmaxi = 0;
        int rmaxi = 0;
        for(int i=0;i<nums.size();i++)
        {
            left[i] = lmaxi = max(lmaxi,nums[i]);
            right[n-1-i]  = rmaxi = max(rmaxi,nums[n-i-1]);
        }
        
        for(int i=0;i<nums.size();i++)
        {
            ans += min(left[i],right[i]) - nums[i];
        }
        return ans;
      
    }
};