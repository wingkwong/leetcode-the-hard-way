class Solution {
public:
    int searchInsert(vector<int>& nums, int x) {
        
        int low = 0;
        int high = nums.size();
        
        while(low<high)
        {
            int mid = low + (high-low)/2;
            
            if(nums[mid]==x)
                return mid;
            else if(nums[mid]>x)
            {
                high = mid;
            }
            else 
                low = mid+1;
        }
        return low;
        
    }
};