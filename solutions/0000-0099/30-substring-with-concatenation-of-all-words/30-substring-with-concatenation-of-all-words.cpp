class Solution {
public:
    vector<int> findSubstring(string s, vector<string>& words) {
        int len = words[0].size(), n = words.size(), ssize = s.size(), left, found;
        vector<int> res;
        
        unordered_map<string, int> freq, tmp;
        for (auto word : words) freq[word]++;
            
        for (int i = 0; i < len; i++) {
            tmp.clear();
            left = i, found = 0;
            
            for (int j = i; j <= ssize - len; j += len) {
                string curr = s.substr(j, len);
                
                if (freq.find(curr) != freq.end()) {
                    tmp[curr]++;
                    found++;

                    while (freq[curr] < tmp[curr]) {
                        tmp[s.substr(left, len)]--;
                        found--;
                        left += len;
                    }

                    if (found == n) res.push_back(left);
                }
                
                else {
                    tmp.clear();
                    found = 0;
                    left = j + len;
                }
            }
        }
        return res;
    }
};