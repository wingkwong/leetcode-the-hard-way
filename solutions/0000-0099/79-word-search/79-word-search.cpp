class Solution {
public:
    
    bool doesExist(vector<vector<char>>& board, string word,int i,int j,int m,int n)
    {
        if(word.size() == 0)
            return true;
        
        if(i>=n || i<0 || j>=m || j< 0 || word[0] != board[i][j])
            return false;
        
        char c = board[i][j];
        board[i][j] = '*';
        string s = word.substr(1);
        bool top = doesExist(board,s,i,j+1,m,n);
        bool bottom = doesExist(board,s,i,j-1,m,n);
        bool left = doesExist(board,s,i-1,j,m,n);
        bool right = doesExist(board,s,i+1,j,m,n);
        board[i][j] = c;
        return top || bottom || left || right;
    }
    
    bool exist(vector<vector<char>>& board, string word) {
        
        int n = board.size();
        int m = board[0].size();
        
        for(int i=0;i<n;i++)
        {
            for(int j=0;j<m;j++)
            {
                if(doesExist(board,word,i,j,m,n))
                    return true;
            }
        }
        return false;
    }
};