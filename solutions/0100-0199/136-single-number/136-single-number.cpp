class Solution {
public:
    int singleNumber(vector<int>& nums) {
        int a = 0;
        for(auto d:nums)
            a^=d;
        return a;
    }
};