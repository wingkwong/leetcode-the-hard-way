class Solution {
public:
    vector<vector<string>> findLadders(string beginWord, string endWord, vector<string>& wordList) {
        unordered_set<string> dict(wordList.begin(), wordList.end());
        if(!dict.count(endWord)) return {};
        dict.erase(beginWord);
        dict.erase(endWord);
        unordered_map<string, int> steps;
        steps[beginWord] = 0;
        unordered_map<string, vector<string> > parents;
        const int len = beginWord.size();
        int step = 0;
        bool found = false;
        queue<string> q;
        q.push(beginWord);
        while(!q.empty() && !found){
            ++step;
            for(int size = q.size(); size > 0; size--){
                const string p = q.front(); q.pop();
                string word = p;
                for(int j = 0; j < len; j++){
                    const char ch = word[j];
                    for(int i = 'a'; i <= 'z'; i++){
                        if(i == ch) continue;
                        word[j] = i;
                        if(word == endWord){
                            found = true;
                            parents[word].push_back(p);
                        }else{
                            if(steps.count(word) && step == steps.at(word) - 1)
                                parents[word].push_back(p);
                        }
                        if(!dict.count(word)) continue;
                        dict.erase(word);
                        q.push(word);
                        steps[word] = step + 1;
                        parents[word].push_back(p);                        
                    }
                    word[j] = ch;
                }
            }
        }
        
        vector<vector<string>> ans;
        if(found){
            vector<string> path; path.push_back(endWord);
            genPath(parents, endWord, beginWord, path, ans);
        }
        return ans;
    }
    
    void genPath(const unordered_map<string, vector<string> >& parents, 
                 const string& currWord, 
                 const string& beginWord, 
                 vector<string> path, 
                 vector<vector<string>>& ans){
        if(currWord == beginWord){
            ans.push_back(vector<string> (path.rbegin(), path.rend()));
            return;
        }
        
        for(const auto p: parents.at(currWord)){
            path.push_back(p);
            genPath(parents, p, beginWord, path, ans);
            path.pop_back();
        }
    }
};