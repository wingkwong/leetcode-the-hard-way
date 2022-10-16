class Solution {
public:
    
    void solve(vector<vector<int>> & ans, vector<int>& combi,vector<int>& candidates, int target,int idx)
    {
        if(idx == candidates.size())
        {
            if(target == 0)
                ans.push_back(combi);
            return ;
        }
        if(target >= candidates[idx])
        {
            combi.push_back(candidates[idx]);
            solve(ans,combi,candidates,target-candidates[idx],idx);
            combi.pop_back();
        }
        solve(ans,combi,candidates,target,idx+1);
        return ;
        
    }
    
    vector<vector<int>> combinationSum(vector<int>& candidates, int target) {
        vector<vector<int>>  ans;
        vector<int> combi;
        solve(ans,combi,candidates,target,0);
        return ans;
    }
};