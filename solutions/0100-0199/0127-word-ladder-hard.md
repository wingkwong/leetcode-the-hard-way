---
description: 'Author: @wingkwong | https://leetcode.com/problems/word-ladder/'
---

# 0127 - Word Ladder (Hard)

## Problem Statement

A **transformation sequence** from word `beginWord` to word `endWord` using a dictionary `wordList` is a sequence of words `beginWord -> s1 -> s2 -> ... -> sk` such that:

* Every adjacent pair of words differs by a single letter.
* Every `si` for `1 <= i <= k` is in `wordList`. Note that `beginWord` does not need to be in `wordList`.
* `sk == endWord`

Given two words, `beginWord` and `endWord`, and a dictionary `wordList`, return _the **number of words** in the **shortest transformation sequence** from_ `beginWord` _to_ `endWord`_, or_ `0` _if no such sequence exists._

**Example 1:**

```
Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
Output: 5
Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.
```

**Example 2:**

```
Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
Output: 0
Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.
```

**Constraints:**

* `1 <= beginWord.length <= 10`
* `endWord.length == beginWord.length`
* `1 <= wordList.length <= 5000`
* `wordList[i].length == beginWord.length`
* `beginWord`, `endWord`, and `wordList[i]` consist of lowercase English letters.
* `beginWord != endWord`
* All the words in `wordList` are **unique**.

## Approach 1: BFS

Imaginate $$beginWord$$ is a starting node and $$endWord$$ is the ending node of a graph with some other nodes between them. The node is connected to each other by only one letter difference. The problem is same as "finding the shortest path between the starting node and the ending node in an undirected and unweighted graph".

Since we are looking for the shortest path, then we should use BFS instead of DFS. Before that, we need to pre-process on the words of the given $$wordList$$. If a word is $$hot$$, then there could be three forms which are $$*ot$$, $$h*t$$, and $$ho*$$ where $$*$$ can be any alphabet. To implement this, we can use a hash map where the key is the form and the value is the list of word which has the same form. Example: $$*ot: [hot , dot, lot]$$.

```cpp
// 1. build the combination of words that can be formed 
int m = (int) beginWord.size();
map<string, vector<string>> comb;
int n = (int) wordList.size();
for (auto s : wordList) {
    for (int i = 0; i < m; i++) {
        string t = s.substr(0, i) + '*' + s.substr(i + 1);
        comb[t].push_back(s);
    }
}
```

Then, we can perform BFS using queue. We take the word, build its form and get the list of next nodes. If the next word is $$endWord$$, then we can return the answer which is $$level + 1$$. Otherwise, we check if the next word is visited or not, then push it to the queue and mark it as visited if it hasn't been reached before.&#x20;

```cpp
// 2. BFS 
queue<pair<string, int>> q; // {word, level}
// check if it is visited already
unordered_map<string, int> vis;
// push the first node with level 1
q.push({beginWord, 1});
// mark it visited so we won't visit it again
vis[beginWord] = 1;
while (!q.empty()) {
    // get the first pair
    auto [s, level] = q.front(); q.pop();
    for (int i = 0; i < m; i++) {
        // build the form
        string t = s.substr(0, i) + '*' + s.substr(i + 1);
        // iterate each possible words
        for (auto w : comb[t]) {
            // if it reaches the ending node, then we got the answer
            if (w == endWord) {
                return level + 1;
            }
            // else if it is not visited, then mark it visited 
            // and push it to the queue for next traversal
            if (!vis.count(w)) {
                vis[w] = 1;
                q.push({w, level + 1});
            }
        }
    }
}
```

Full version

```cpp
class Solution {
public:
    int ladderLength(string beginWord, string endWord, vector<string>& wordList) {
        // 1. build the combination of words that can be formed 
        int m = (int) beginWord.size();
        map<string, vector<string>> comb;
        int n = (int) wordList.size();
        for (auto s : wordList) {
            for (int i = 0; i < m; i++) {
                string t = s.substr(0, i) + '*' + s.substr(i + 1);
                comb[t].push_back(s);
            }
        }
        // 2. BFS 
        queue<pair<string, int>> q; // {word, level}
        unordered_map<string, int> vis;
        q.push({beginWord, 1});
        vis[beginWord] = 1;
        while (!q.empty()) {
            auto [s, level] = q.front(); q.pop();
            for (int i = 0; i < m; i++) {
                string t = s.substr(0, i) + '*' + s.substr(i + 1);
                for (auto w : comb[t]) {
                    if (w == endWord) {
                        return level + 1;
                    }
                    if (!vis.count(w)) {
                        vis[w] = 1;
                        q.push({w, level + 1});
                    }
                }
            }
        }
        return 0;
    }
};
```
