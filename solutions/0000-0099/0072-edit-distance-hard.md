---
description: 'Author: @wingkwong | https://leetcode.com/problems/edit-distance/'
---

# 0072 - Edit Distance (Hard)

## Problem Statement

Given two strings `word1` and `word2`, return _the minimum number of operations required to convert `word1` to `word2`_.

You have the following three operations permitted on a word:

* Insert a character
* Delete a character
* Replace a character

**Example 1:**

```
Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation: 
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')
```

**Example 2:**

```
Input: word1 = "intention", word2 = "execution"
Output: 5
Explanation: 
intention -> inention (remove 't')
inention -> enention (replace 'i' with 'e')
enention -> exention (replace 'n' with 'x')
exention -> exection (replace 'n' with 'c')
exection -> execution (insert 'u')
```

**Constraints:**

* `0 <= word1.length, word2.length <= 500`
* `word1` and `word2` consist of lowercase English letters.

## Approach 1: Dynamic Programming

Edit distance is a classic DP problem. It is used to quantify the dissimilarity of two given strings by counting the minimum possible number of operations required to transform one string into the other.

Given that the constraints, we assume that a O(m \* n) solution would pass.

Let's define `dp[i][j]` as the minimum edit distance between the first `i` character of `word1` and the first `j` characters of `word2`. In example 1, `dp[3][2]` would be the edit distance between `word1[1..3]` (HOR) and `word2[1..2]`(RO).

If the last character is the same, then `dp[i][j]` would be `dp[i - 1][j - 1]` because we don't need to perform any operation. Otherwise, we need to perform either one. There are three possible ways to do the transformation.

1. We can transform `word1[1..i]` to `word2[1..j-1]` by adding `word2[j]` afterwards to get `word2[1..j]`.
2. We can transform `word1[1..i-1]` to `word2[1..j]` by deleting `word1[i]`.
3. We can transform `word1[1..i-1]` to `word2[1..j-1]` by exchanging the original `word1[i]` for `word2[j]`.

Therefore, the transition would be `dp[i][j] = 1 + min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1])` if `word1[i]` is not equal to `word2[j]`.

What is the base case then? The base case is simply an edit distance between the empty string and non-empty string, i.e. `dp[i][0] = i` and `dp[0][j] = j`. The answer would be `dp[m][n]`. This algorithm is also known as Wagner–Fischer algorithm.

![Wagner–Fischer algorithm](../../.gitbook/assets/image.png)

### C++

Time Complexity: O(m \* n)\
Space Complexity: O(m \* n)

```cpp
class Solution {
public:
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
};
```
