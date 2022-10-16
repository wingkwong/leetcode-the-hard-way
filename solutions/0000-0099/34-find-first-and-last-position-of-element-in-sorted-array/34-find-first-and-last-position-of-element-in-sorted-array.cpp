class Solution {
public:
    
    int lower(vector<int>& nums, int target) 
    {
        int low = 0;
        int high = nums.size()-1;
        int ans = -1;
        
        while(low<=high)
        {
            int mid = (low+high)>>1;
            
            if(nums[mid] == target)
            {
                ans = mid;
                high = mid-1;
            }
            else if(nums[mid] > target)
                high = mid - 1;
            else
                low = mid + 1;
        }
        return ans;
    }
    
    int higher(vector<int>& nums, int target)
    {
        int low = 0;
        int high = nums.size()-1;
        int ans = -1;
        
        while(low<=high)
        {
            int mid = (low+high)>>1;
            
            if(nums[mid] == target)
            {
                ans = mid;
                low = mid+1;
            }
            else if(nums[mid] > target)
                high = mid-1;
            else
                low = mid + 1;
        }
        return ans;
    }
    
    vector<int> searchRange(vector<int>& nums, int target) {
        
        vector<int> v(2);
        
        v[0] = lower(nums,target);
        v[1] = higher(nums,target);
        
        return v;
        
    }
};