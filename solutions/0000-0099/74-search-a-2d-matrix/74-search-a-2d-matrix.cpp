class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        
        int n = matrix.size();
        int m = matrix[0].size();
        int i = 0;
        int j = (m*n) - 1;
        
        while(i<=j)
        {
            int mid = i + (j-i)/2;
            
            int num = matrix[mid / m][mid % m];
            if(num == target)
                return true;
            else if(num > target)
                j = mid - 1;
            else
                i = mid + 1;
        }
        return false;
    }
};