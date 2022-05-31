---
description: 'Author: @wingkwong | https://leetcode.com/problems/distinct-subsequences/'
---

import Authors from '@site/src/components/Authors';

# 0115 - Distinct Subsequences (Hard)

## Problem Link

https://leetcode.com/problems/distinct-subsequences/

## Problem Statement

Given two strings `s` and `t`, return _the number of distinct subsequences of `s` which equals `t`_.

A string's **subsequence** is a new string formed from the original string by deleting some (can be none) of the characters without disturbing the remaining characters' relative positions. (i.e., `"ACE"` is a subsequence of `"ABCDE"` while `"AEC"` is not).

The test cases are generated so that the answer fits on a 32-bit signed integer.

**Example 1:**

```
Input: s = "rabbbit", t = "rabbit"
Output: 3
Explanation:
As shown below, there are 3 ways you can generate "rabbit" from S.
rabbbit
rabbbit
rabbbit
```

**Example 2:**

```
Input: s = "babgbag", t = "bag"
Output: 5
Explanation:
As shown below, there are 5 ways you can generate "bag" from S.
babgbag
babgbag
babgbag
babgbag
babgbag
```

**Constraints:**

* `1 <= s.length, t.length <= 1000`
* `s` and `t` consist of English letters.

## Approach 1: Dynamic Programming

Let $$dp[i][j]$$ be the number of distinct subsequences if $$s[0 .. i)$$contains $$t[0 .. j)$$. The base case is when $$t$$ is empty, there is one valid subsequence for each $$i$$. If the subsequence doesn't contain $$s[i - 1]$$, then we take $$dp[i - 1][j]$$. If $$s[i - 1] == t[j - 1]$$, then we need to include $$dp[i - 1][j - 1]$$ as well as $$dp[i - 1][j]$$.

<Authors names="@wingkwong"/>

```cpp
class Solution {
public:
    int numDistinct(string s, string t) {
        int n = s.size(), m = t.size();
        unsigned long long dp[n + 1][m + 1];
        memset(dp, 0, sizeof(dp));
        for(int i = 0; i <= n; i++) dp[i][0] = 1;
        for(int i = 1; i <= n; i++) {
            for(int j = 1; j <= m; j++) {
                dp[i][j] = dp[i - 1][j];
                if(s[i - 1] == t[j - 1]) {
                    dp[i][j] += dp[i - 1][j - 1];
                }
            }
        }
        return dp[n][m];
    }
};
```

## Approach 2: Dynamic Programming (Space Optimised)

In Approach 1, we calculate $$dp[i][j]$$ based on the previous row. We can simplify it by using a one dimensional array of size $m$ where $$m$$ is the length of $$t$$ Then we calculate $$dp$$ backwards so that the new value won't affect the calculate of the next value.

<Authors names="@wingkwong"/>

```cpp
class Solution {
public:
    int numDistinct(string s, string t) {
        int n = s.size(), m = t.size();
        unsigned long long dp[m + 1];
        memset(dp, 0, sizeof(dp));
        dp[0] = 1;
        for (int i = 1; i <= n; i++) {
            for (int j = min(i, m); j >= 1; j--) {
                if (s[i - 1] == t[j - 1]) {
                    dp[j] += dp[j - 1];
                }
            }
        }
        return dp[m];
    }
};
```
