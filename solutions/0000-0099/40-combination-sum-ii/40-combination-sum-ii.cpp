class Solution {
public:
    
    void helper(vector<int>& candidates, int target,vector<vector<int>> & ans,vector<int> &temp,int i)
    {
        if(target == 0)
        {
         ans.push_back(temp);
         return;  
        }
   
        for(int j = i;j<candidates.size();j++)
        {
            if(j>i && candidates[j] == candidates[j-1])continue;
            if(candidates[j]>target)break;
            temp.push_back(candidates[j]);
            helper(candidates,target-candidates[j],ans,temp,j+1);
            temp.pop_back();
        }
    }
    
    vector<vector<int>> combinationSum2(vector<int>& candidates, int target) {
        sort(candidates.begin(),candidates.end());
        vector<vector<int>> ans;
        vector<int> temp;
        helper(candidates,target,ans,temp,0);
        return ans;
        
    }
};