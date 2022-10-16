void sortColors(vector<int>& nums) {
    int n=nums.size(),low=0,mid=0,high=n-1;
    
   while(mid<=high)
   {   
        if(nums[mid]==0)
        {
            swap(nums[low],nums[mid]);
            low++;
        }
        else if(nums[mid]==2)
        {
            swap(nums[mid],nums[high]);
            high--;
            continue;
        }
        mid++;
    }
    return;