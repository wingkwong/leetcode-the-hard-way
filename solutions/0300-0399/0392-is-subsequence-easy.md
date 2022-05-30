---
description: 'Author: @wingkwong | https://leetcode.com/problems/is-subsequence/'
---

# 0392 - Is Subsequence (Easy)

## Problem Statement

Given two strings `s` and `t`, return `true` _if_ `s` _is a **subsequence** of_ `t`_, or_ `false` _otherwise_.

A **subsequence** of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., `"ace"` is a subsequence of `"abcde"` while `"aec"` is not).

**Example 1:**

```
Input: s = "abc", t = "ahbgdc"
Output: true
```

**Example 2:**

```
Input: s = "axc", t = "ahbgdc"
Output: false 
```

**Constraints:**

* `0 <= s.length <= 100`
* `0 <= t.length <= 10^4`
* `s` and `t` consist only of lowercase English letters.

**Follow up:** Suppose there are lots of incoming `s`, say `s1, s2, ..., sk` where `k >= 10^9`, and you want to check one by one to see if `t` has its subsequence. In this scenario, how would you change your code?

## Approach 1: Two Pointers

We use two pointers $$i$$ and $$j$$ to track the index in $$s$$ and $$t$$ respectively. If $$s[i] == t[j]$$, then we set $$i := i + 1$$ and $$j := j + 1$$ and then check the next character in both string. If they are not same, we move $$j$$ to the next character in $$t$$ while keeping $$i$$ in $$s$$. At the end, pointer $$i$$ would be $$n$$ if $$s$$ is a subsequence of $$t$$.

```cpp
class Solution {
public:
    bool isSubsequence(string s, string t) {
        int n = s.size(), m = t.size(), i = 0, j = 0;
        while (i < n && j < m) {
            // moving pointer i only if they are same
            if (s[i] == t[j]) i++;
            // move j for both case
            j++;
        }
        // s is a subsequence of t if i == n
        return i == n;
    }
};
```

## Approach 2: Edit Distance

We can directly use [0072 - Edit Distance (Hard)](../0000-0099/edit-distance-hard) solution to solve this easy problem since the constraints are not large. Edit distance here means the minimum number of operations required to covert $$s$$ to $$t$$. We just need to check if it is equal to $$m - n$$.

```cpp
class Solution {
public:
    // Check out 0072 - Edit Distance for detailed explanation
    int minDistance(string word1, string word2) {
        int m = (int) word1.size();
        int n = (int) word2.size();
        int dp[m + 1][n + 1];
        memset(dp, 0, sizeof(dp));
        for (int i = 1; i <= m; i++) dp[i][0] = i;
        for (int j = 1; j <= n; j++) dp[0][j] = j;
        for (int i = 1; i <= m; i++){
            for(int j = 1; j <= n; j++){
                if(word1[i - 1] == word2[j - 1]) { // a = b
                    dp[i][j] = dp[i - 1][j - 1]; 
                } else {
                    // find out the min cost for all three actions
                    dp[i][j] = 1 + min({
                        dp[i - 1][j - 1], // replace a with b
                        dp[i - 1][j],     // delete a
                        dp[i][j - 1]      // insert b after a
                    });
                }
            }
        }
        return dp[m][n];
    }
    
    bool isSubsequence(string s, string t) {
        int n = s.size(), m = t.size();
        return minDistance(s, t) == m - n;
    }
}
```

## Approach 3: Lower Bound of Indices

This approach is for follow-up. We can store the indices $$idx$$ of each character in $$t$$. For example, if $$t$$ is $$aaaabbcde$$, then we have the following $$idx$$.

| Character (Key) | Indice (Value) |
| --------------- | -------------- |
| a               | \[0, 1, 2, 3]  |
| b               | \[4, 5]        |
| c               | \[6]           |
| d               | \[7]           |
| e               | \[8]           |

Then we initialise $$bound$$ which is the starting index. For each character in $$s$$, we want to find the index $$j$$ which starts from $$bound$$. If it reaches the end, then return false. Else we can update $$bound := j + 1$$ because the next character cannot appear before the previous character and continue until we process all characters.

For example, let's say $$s = abc$$ and $$t = aaaabbcde$$. The first character is $$a$$ and we got $$bound = 0$$ and $$j = 0$$. Then we update the bound to $$j + 1$$. Then for the second character $$b$$, we got $$bound = 1$$ and $$j = 4$$. Similarly, we got $$bound = 5$$ and $$j = 6$$ for the last character.

```cpp
class Solution {
public:
    bool isSubsequence(string s, string t) {
        int n = s.size(), m = t.size();
        unordered_map<char, vector<int>> idx;
        // put each char as key, the value is the indice of that char
        for (int i = 0; i < m; i++) idx[t[i]].push_back(i);
        int bound = 0;
        for (auto x : s) {
            // find the index which starts from bound
            auto j = lower_bound(idx[x].begin(), idx[x].end(), bound);
            // cannot find the index -> false
            if (j == idx[x].end()) return false;
            // update bound and try next character
            bound = *j + 1;
        }
        return true;
    }
};
```

## Approach 4: LCS

If $$s$$ is a subsequence of $$t$$, then it means the Longest Common Subsequence (LCS) would be $$n$$. We can directly use [1143 - Longest Common Subsequence (Medium)](../1100-1199/longest-common-subsequence-medium) solution.

```cpp
class Solution {
public:
    // 1143 - Longest Common Subsequence (Medium)
    int longestCommonSubsequence(string text1, string text2) {
        int n = text1.size(), m = text2.size();
        vector<vector<int>> dp(n + 1, vector<int>(m + 1));
        for(int i = 1; i <= n; i++) {
            for(int j = 1; j <= m; j++) {
                if(text1[i - 1] == text2[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }
        return dp[n][m];
    }
    
    bool isSubsequence(string s, string t) {
        int n = s.size();
        return longestCommonSubsequence(s, t) == n;
    }
};
```
