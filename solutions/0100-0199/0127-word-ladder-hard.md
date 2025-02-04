---
description: 'Author: @wkw, @ColeB2 | https://leetcode.com/problems/word-ladder/'
tags: [Hash Table, String, Breadth-First Search]
---

# 0127 - Word Ladder (Hard)

## Problem Link

https://leetcode.com/problems/word-ladder/

## Problem Statement

A **transformation sequence** from word `beginWord` to word `endWord` using a dictionary `wordList` is a sequence of words `beginWord -> s1 -> s2 -> ... -> sk` such that:

- Every adjacent pair of words differs by a single letter.
- Every `si` for `1 <= i <= k` is in `wordList`. Note that `beginWord` does not need to be in `wordList`.
- `sk == endWord`

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

- `1 <= beginWord.length <= 10`
- `endWord.length == beginWord.length`
- `1 <= wordList.length <= 5000`
- `wordList[i].length == beginWord.length`
- `beginWord`, `endWord`, and `wordList[i]` consist of lowercase English letters.
- `beginWord != endWord`
- All the words in `wordList` are **unique**.

## Approach 1: BFS

Imaginate $$beginWord$$ is a starting node and $$endWord$$ is the ending node of a graph with some other nodes between them. The node is connected to each other by only one letter difference. The problem is same as "finding the shortest path between the starting node and the ending node in an undirected and unweighted graph".

Since we are looking for the shortest path, then we should use BFS instead of DFS. Before that, we need to pre-process on the words of the given $$wordList$$. If a word is $$hot$$, then there could be three forms which are $$*ot$$, $$h*t$$, and $$ho*$$ where $$*$$ can be any alphabet. To implement this, we can use a hash map where the key is the form and the value is the list of word which has the same form. Example: $$*ot: [hot , dot, lot]$$.

```
Graph:
hit----hot---dot---dog---cog
        |   /        |   /
        |  /         |  /
        lot----------log
```

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

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

</TabItem>

<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
wordList.append(beginWord)
# word map will be formatted in the format key:value
# key: combinations of words, ie hit: --> '_it', 'h_t', 'hi_'
# value: word from word list, 'hit'
word_map = defaultdict(list)
for word in wordList:
    for i in range(len(word)):
        string = word[:i] + '_' + word[i + 1:]
        word_map[string].append(word)
```

</TabItem>
</Tabs>

Then, we can perform BFS using queue. We take the word, build its form and get the list of next nodes. If the next word is $$endWord$$, then we can return the answer which is $$level + 1$$. Otherwise, we check if the next word is visited or not, then push it to the queue and mark it as visited if it hasn't been reached before.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

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

</TabItem>

<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
# visited set initialized with beingWord
visited = set([beginWord])
# queue formatted as (word, level) where the level.
q = deque([(beginWord, 1)])
while q:
    # get first word, level in queue.
    word, level = q.popleft()
    # check if we reached the end node, endWord.
    if word == endWord:
        return level
    # iterated each character in word
    for i in range(len(word)):
        # recreate all words options ie hit: _it, h_t, hi_
        string = word[:i] + '_' + word[i + 1:]
        # all word combinations are our keys to our hash map, use those
        # to access the word lists held inside our map.
        for new_word in word_map[string]:
            # if we haven't visited the word
            if new_word not in visited:
                # add word to visited so we don't return twice, if we
                # visited at a later time, we know it will take longer
                # to reach the end node from there anyway, and add to queue.
                visited.add(new_word)
                q.append((new_word, level + 1))
```

</TabItem>
</Tabs>

Full version

Time Complexity: $$O(M^2 * N)$$ where $$M$$ is the length of each word, and $$N$$ is the total number of words in $$wordList$$.

- For each word in word list, we iterate each character, $$M * N$$ and to recreate each combination of each word to add to our hash map takes $$M$$ time -> $$O(M^2 * N)$$
- BFS might traverse every node $$N$$, and similarily, we must check each character $$M$$ and recreated the intermediate words --> $$O(M^2 * N)$$

Space Complexity: $$O(M^2 * N)$$. The space will be dominated by our hash map as each word $$N$$, has $$M$$ combinations of words which will be our keys, and each key will have the original word of sized $$M$$ as a value. Meaning each word will need $$M^2$$ space, and we need to do that for $$N$$ words.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

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

</TabItem>

<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
        # Early termination, endWord isn't in wordList, return 0
        if endWord not in wordList:
            return 0
        # Add all words in wordlist to defaultdict
        # Ex word hit, keys: _it, h_t, hi_, value: hit
        wordList.append(beginWord)
        word_map = defaultdict(list)
        for word in wordList:
            for i in range(len(word)):
                string = word[:i] + '_' + word[i + 1:]
                word_map[string].append(word)
        # BFS -> visited set to prevent visiting same word twice.
        visited = set([beginWord])
        # Queue formatted as (word, level)
        q = deque([(beginWord, 1)])
        while q:
            word, level = q.popleft()
            if word == endWord:
                return level
            for i in range(len(word)):
                string = word[:i] + '_' + word[i + 1:]
                for new_word in word_map[string]:
                    if new_word not in visited:
                        visited.add(new_word)
                        q.append((new_word, level + 1))
        return 0
```

</TabItem>
</Tabs>
