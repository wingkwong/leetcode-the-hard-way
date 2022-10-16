class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        unordered_map<string, vector<string>> m;
        string tmp_sorted;
        
        for (auto word : strs) {
            tmp_sorted = word;
            sort(tmp_sorted.begin(), tmp_sorted.end());
            m[tmp_sorted].push_back(word);
        }
        
        vector<vector<string>> res;
        for (auto [word, list] : m) {
            res.push_back(list);
        }
        
        return res;
    }
};