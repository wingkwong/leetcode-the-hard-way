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

We use two pointers $$i$$ and $$j$$ to track the index in $$s$$ and $$t$$ respectively. If $$s[i] == t[j]$$, then we set $$i := i + 1$$ and $$j := j + 1$$ and then check the next character in both string. If they are not same, we move $$j$$ to the next character in $$t$$ while keeping $$i$$ in $$s$$. At the end, pointer $$i$$ would be $$n$$ if $$s$$ is a subsequence of $$t$$.&#x20;

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

We can directly use [0072 - Edit Distance (Hard)](../0000-0099/0072-edit-distance-hard.md) to solve this easy problem since the constraints are not large. Edit distance here means the minimum number of operations required to covert $$s$$ to $$t$$. We just need to check if it is equal to $$m - n$$.

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
