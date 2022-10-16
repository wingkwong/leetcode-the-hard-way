class Solution {
public:
    
   bool isPalindrome(string s, int start, int end) {
        while(start <= end) {
            if(s[start++] != s[end--])
                return false;
        }
        return true;
    }
    
    void solve( vector<vector<string>> & ans,vector<string>& temp,int index,string s)
    {
        if(index == s.size())
        {
            ans.push_back(temp);
            return;
        }
       
        
        for(int i=index;i<s.size();i++)
        {
              
            // string g = s.substr(index,i-index);
            // cout<<index<<" "<<i<<endl;
            // cout<<"g -> "<<g<<endl;
            if(isPalindrome(s,index,i))
            {
              
                temp.push_back(s.substr(index, i - index + 1));
                solve(ans,temp,i+1,s);
              //  cout<<"RRR"<<endl;
                temp.pop_back();
            }
        }
    }
    
    vector<vector<string>> partition(string s) {
        vector<vector<string>> ans;
        vector<string> temp;
        solve(ans,temp,0,s);
        return ans;
    }
};