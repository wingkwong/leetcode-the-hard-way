---
description: 'Author: @wingkwong, @ColeB2 | https://leetcode.com/problems/distinct-subsequences/'
tags: [String, Dynamic Programming]
---

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

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

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

</TabItem>

<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    # Time Complexity: O(S*T) where s is length of S and t is the
    # length of T, we must loop through values of s and t.
    # Space Complexity: O(S*T) to maintain our dp array.
    def numDistinct(self, s: str, t: str) -> int:
        # initialize dp array.
        # T + 1 columns to handle empty string case
        # S + 1 rows to handle empty string case.
        dp = [[0] * (len(t) + 1) for _ in range(len(s) + 1)]
        # base case: for every subsequence in s, only 1, the empty 
        # string matches up to empty string of t.
        for i in range(0, len(s) + 1):
            dp[i][0] = 1
        # loop through our dp table, skipping the empty string parts.
        for i in range(1, len(s) + 1):
            for j in range(1, len(t) + 1):
                # We should have at least the same amount of matches in 
                # matches in our string s[:i] as we did on s[:i - 1]
                # matching against t[:j]
                dp[i][j] = dp[i - 1][j]
                if s[i - 1] == t[j - 1]:
                    # Current character does match for s[:i-1] t[j-1]
                    # then we need to add all the values from the dp
                    # table of [i-1][j-1]
                    dp[i][j] += dp[i - 1][j - 1]
        
        return dp[len(s)][len(t)]
```

</TabItem>
</Tabs>

## Approach 2: Dynamic Programming (Space Optimised)

In Approach 1, we calculate $$dp[i][j]$$ based on the previous row. We can simplify it by using a one dimensional array of size $m$ where $$m$$ is the length of $$t$$ Then we calculate $$dp$$ backwards so that the new value won't affect the calculate of the next value.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

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

</TabItem>
</Tabs>

## Approach 3: Dynamic Programming - Memoization

We can also do the problem recursively, going depth-first, and saving all the data on each iteration in case we run into it again. We can again use $$i$$ and $$j$$ to handle checking the characters of $$s[:i]$$ to $$t[:j]$$. We will have 3 main base cases in our dfs.

1. We calculated the subproblem of current $$i$$ and $$j$$ before, so we can return that cached value.
2. $$j$$ has reached $$t.length$$. Meaning we reached a subsequence that matches the target string and can return 1.
3. $$i$$ has reached $$s.length$$. Meaning we reached the end of string $$s$$ and have not yet found a subsequence that makes the target so we can return 0.

Know those 3 base cases, all we have to do is initialize our subsequence count to be the recursive call at $$i + 1$$ and $$j$$, then once we have that value, check if the characters of $$s,t$$ match at the current $$i,j$$ and if they do we can add the number of subsequences that match our recursive call at $$i + 1$$, $$j + 1$$.

Finally remember to cache the subsequence count in our cache using the key of $$(i,j)$$, and returning the subsequence value.

Time Complexity: $$O(S*T)$$ where $$S$$ is $$s.length$$ and $$T$$ is $$t.length$$. For each $$i$$ and $$j$$ up to $$s$$ and $$t$$ we make a recursive call to explore all possibilities either including or excluding the $$ith$$ character in $$s$$. By caching the answer to the subproblems, we don't have to do the repeated work.

Space Complexity: $$O(S*T)$$, as we have to store the answers to each subproblem inside our hash map cache.

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def numDistinct(self, s: str, t: str) -> int:
        # initialize our cache
        cache = {}
        # dfs, i, j where i is position in s, j position in t.
        def dfs(i, j):
            # if we have calculated s[:i] and t[:j] before:
            if (i, j) in cache:
                # return that value
                return cache[(i, j)]
            # base case, j reached length t, meaning we found a subsequence
            if j == len(t):
                return 1
            # if i reached the end of s, and we haven't created j isn't
            # len(t) yet, meaning we haven't created t using s.
            # We have no subsequences -> return 0
            if i == len(s):
                return 0
            # set current subsequence == subsequences of subproblem where
            # s[:i + 1] is matched against current t[:j]
            subseq = dfs(i + 1, j)
            # check if current ch in subsequence matches target = t[j]
            if s[i] == t[j]:
                # then we can add the values from the subsequence of the
                # next iteration, where s[:i + 1] matched to t[i + 1]
                subseq += dfs(i + 1, j + 1)
            # cache our current subsequence value for the i,j for
            # future subproblems use.
            cache[(i, j)] = subseq
            # return that value
            return subseq
        # call our algorithm starting with empty strings
        # s[:0] and t[:0]
        return dfs(0, 0)
```

</TabItem>
</Tabs>