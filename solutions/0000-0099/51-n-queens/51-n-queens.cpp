class Solution {
public:
//     bool isSafe(int row,int col,vector<string> & board,int n)
//     {
        
//         for(int i=0;i<col;i++)
//         {
//             if(board[row][i] == 'Q')return false;
//         }
//         int tempr = row;
//         int tempc = col;
        
//         while(tempr>=0 && tempc>=0)
//         {
//             if(board[tempr--][tempc--] == 'Q')
//                 return false;
//         }
        
//         tempr = row;
//         tempc = col;
//         while(tempr < n && tempc < n && tempr>=0 && tempc>=0)
//         {
//             if(board[tempr++][tempc--] == 'Q')
//                 return false;
//         }
//         return true;
//     }
    
    
    void solve(int col,vector<vector<string>> & ans,vector<string> & board,int n,vector<int>& rowHash,vector<int>&upper,vector<int> & down)
    {
        if(col == n)
        {
            ans.push_back(board);
            return ;
        }
        
        for(int row = 0;row<n;row++)
        {
            if(rowHash[row] == 0 && upper[(n-1) + row-col ] == 0 && down[row+col] == 0)
            {
                rowHash[row] = 1;
                upper[(n-1)+ row-col] = 1;
                down[row+col] =1;
                board[row][col] = 'Q';
                solve(col+1,ans,board,n,rowHash,upper,down);
                board[row][col] = '.';
                rowHash[row] = 0;
                upper[(n-1)+ row-col] = 0;
                down[row+col] =0;
            }
        }
        return;
    }
    
    vector<vector<string>> solveNQueens(int n) {
        vector<vector<string>> ans;
        vector<string> board(n);
        string s(n,'.');
        for(int i=0;i<n;i++)
            board[i] = s;
        
        vector<int> rowHash(n);
        vector<int> upper(2*n - 1,0);
        vector<int> down(2*n - 1,0);
        solve(0,ans,board,n,rowHash,upper,down);
        return ans;
        
    }
};