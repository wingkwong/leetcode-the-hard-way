class Solution {
public:
    
    static bool  comp(string a,string b)
    {
        return (a+b)>(b+a);
    }
    
    string largestNumber(vector<int>& nums) {
         
        vector<string> num(nums.size());
        
        for(int i=0;i<nums.size();i++)
        {
            num[i] = to_string(nums[i]);
        }
        
        sort(num.begin(),num.end(),comp);
        if(num[0]=="0") return "0";
        string ans = "";
        for(int i=0;i<nums.size();i++)
        {
            ans += num[i];
        }
        return ans;
    }
};


// class Solution {
// public:
//     static bool myCmp(string a,string b){
//         return (a+b)>(b+a);
//     }
    
//     string largestNumber(vector<int>& nums) {
//         string s = "";
//         vector<string> str;
//         for(auto& x:nums){
//             str.push_back(to_string(x));
//         }
//         sort(str.begin(),str.end(),myCmp);
//         if(str[0]=="0") return "0";
//         for(auto& x:str){
//             s += x;
//         }
//         return s;
//     }
// };