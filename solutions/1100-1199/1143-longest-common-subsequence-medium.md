---
description: 'Author: @wingkwong | https://leetcode.com/problems/longest-common-subsequence/'
---

# 1143 - Longest Common Subsequence (Medium)

## Problem Link

https://leetcode.com/problems/longest-common-subsequence

## Problem Statement

Given two strings `text1` and `text2`, return _the length of their longest **common subsequence**._ If there is no **common subsequence**, return `0`.

A **subsequence** of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

* For example, `"ace"` is a subsequence of `"abcde"`.

A **common subsequence** of two strings is a subsequence that is common to both strings.

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

LCS is a classic problem. Let $dp[i][j]$ be the LCS for string $text1$ ends at index $i$ and string $text2$ ends at index $j$. If $text1[i] == text2[j]$, then $dp[i][j]$ would be $1 + dp[i - 1][j - 1]$. Otherwise, we target the largest LCS if we skip one character from either $text1$ or $text2$, i.e. $dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])$.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

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

</TabItem>
<TabItem value="java" label="Java">
<SolutionAuthor name="@deepanshu-rawat6"/>

```java
class Solution {
    public int longestCommonSubsequence(String text1, String text2) {
        int m = text1.length();
        int n = text2.length();
        // dp[][] array for storing records of every charcters
        int[][] dp = new int[m + 1][n + 1];
        for (int i = 0; i <= m; i++) {
            for (int j = 0; j <= n; j++) {
                if (i == 0 || j ==0) {
                    // setting first row and first column to be zero(initial readings)
                    dp[i][j] = 0;
                } else if (text1.charAt(i - 1) == text2.charAt(j - 1)) {
                    /*
                    if match found, then store value of previous diagonal element(dp[i - 1][j - 1]) 
                    and increase the value by 1 i.e. a new character match is found
                    */
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    /*
                    otherwise, choose maximum of either previous element, either in 
                    row(dp[i][j -1]) or column(dp[i][j - 1])
                    */
                    dp[i][j] = Math.max(dp[i][j - 1],dp[i - 1][j]);
                }
            }
        }
        // dp[m][n] would hold the value of the LCS obtained
        return dp[m][n];
    }
}
```

</TabItem>
</Tabs>
