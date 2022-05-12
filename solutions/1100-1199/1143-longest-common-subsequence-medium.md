---
description: 'Author: @wingkwong | https://leetcode.com/problems/longest-common-subsequence/'
---

# 1143 - Longest Common Subsequence (Medium)

## Problem Statement

Given two strings `text1` and `text2`, return _the length of their longest **common subsequence**._ If there is no **common subsequence**, return `0`.

A **subsequence** of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

* For example, `"ace"` is a subsequence of `"abcde"`.

A **common subsequence** of two strings is a subsequence that is common to both strings.

&#x20;

**Example 1:**

```
Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.
```

**Example 2:**

```
Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.
```

**Example 3:**

```
Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.
```

**Constraints:**

* `1 <= text1.length, text2.length <= 1000`
* `text1` and `text2` consist of only lowercase English characters.

## Approach 1: DP

LCS is a classic problem. Let $$dp[i][j]$$ be the LCS for string $$text1$$ends at index $$i$$ and string $$text2$$ends at index $$j$$. If $$text1[i] == text2[j]$$, then $$dp[i][j]$$ would be $$1  +dp[i - 1][j - 1]$$. Otherwise, we target the largest LCS if we skip one character from either text1 or text2, i.e. $$dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])$$.

```cpp
class Solution {
public:
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
};
```
