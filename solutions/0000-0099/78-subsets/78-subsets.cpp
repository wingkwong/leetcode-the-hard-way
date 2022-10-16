class Solution {
public:
    vector<vector<int>> subsets(vector<int>& nums) {
        vector<vector<int>> ans;
        for(int num=0; num<(1<<nums.size()) ;num++  )
        {
            vector<int> subset;
            for(int bit=0;bit<nums.size();bit++)
            {
                if(num & (1<<bit))
                {
                    subset.push_back(nums[bit]);
                }
            }
            ans.push_back(subset);
        }
        return ans;
    }
};