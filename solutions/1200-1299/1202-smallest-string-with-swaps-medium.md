---
description: 'Author: @wingkwong | https://leetcode.com/problems/smallest-string-with-swaps'
---

import SolutionAuthor from '@site/src/components/SolutionAuthor';

# 1202 - Smallest String With Swaps (Medium)

## Problem Link

https://leetcode.com/problems/smallest-string-with-swaps

## Problem Statement

You are given a string `s`, and an array of pairs of indices in the string `pairs` where `pairs[i] = [a, b]` indicates 2 indices(0-indexed) of the string.

You can swap the characters at any pair of indices in the given `pairs` **any number of times**.

Return the lexicographically smallest string that `s` can be changed to after using the swaps.

**Example 1:**

```
Input: s = "dcab", pairs = [[0,3],[1,2]]
Output: "bacd"
Explaination: 
Swap s[0] and s[3], s = "bcad"
Swap s[1] and s[2], s = "bacd"
```

**Example 2:**

```
Input: s = "dcab", pairs = [[0,3],[1,2],[0,2]]
Output: "abcd"
Explaination: 
Swap s[0] and s[3], s = "bcad"
Swap s[0] and s[2], s = "acbd"
Swap s[1] and s[2], s = "abcd"
```

**Example 3:**

```
Input: s = "cba", pairs = [[0,1],[1,2]]
Output: "abc"
Explaination: 
Swap s[0] and s[1], s = "bca"
Swap s[1] and s[2], s = "bac"
Swap s[0] and s[1], s = "abc" 
```

**Constraints:**

* `1 <= s.length <= 10^5`
* `0 <= pairs.length <= 10^5`
* `0 <= pairs[i][0], pairs[i][1] < s.length`
* `s` only contains lower case English letters.

## Approach 1: DSU

If we have like $$[[0,1],[1,2]]$$, even $$0$$ doesn't connect to $$2$$, it can still swap with $$2$$ as we can first swap $$0$$ and $$1$$, then swap $$0$$ with $$2$$. Therefore, we can use DSU to group all the connected nodes together first, then sort it and replace the character at corresponding indices.

<details>

<summary>DSU Template</summary>

```cpp
class dsu {
 public:
  vector<int> root, rank;
  int n;
  int cnt;

  dsu(int _n) : n(_n) {
    root.resize(n);
    rank.resize(n);
    for(int i = 0; i < n; i++) {
        root[i] = i;
        rank[i] = 1;
    }
    cnt = n;
  }

  inline int getCount() { return cnt; }

  inline int get(int x) { return (x == root[x] ? x : (root[x] = get(root[x]))); }

  inline bool unite(int x, int y) {
    x = get(x);
    y = get(y);
    if (x != y) {
        if (rank[x] > rank[y]) {
            root[y] = x;
        } else if (rank[x] < rank[y]) {
            root[x] = y;
        } else {
            root[y] = x;
            rank[x] += 1;
        }
        cnt--;
      return true;
    }
    return false;
  }
};
```

</details>

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    string smallestStringWithSwaps(string s, vector<vector<int>>& pairs) {
        int n = s.size();
        dsu d(n);
        // group all connected nodes together
        for (auto& p : pairs) d.unite(p[0], p[1]);
        vector<vector<int>> m(n);
        // all elements in the same group have the same parent
        for (int i = 0; i < n; i++) m[d.get(i)].push_back(i);
        for (int i = 0; i < n; i++) {
            // build the possible string for group m[i]
            string t;
            for (int j = 0; j < m[i].size(); j++) t += s[m[i][j]];
            // sort the string
            sort(t.begin(), t.end());
            // replace each in correponding index
            for (int j = 0; j < m[i].size(); j++) s[m[i][j]] = t[j];
        }
        return s;
    }
};
```
