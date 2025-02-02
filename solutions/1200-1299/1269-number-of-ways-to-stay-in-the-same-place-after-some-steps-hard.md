---
description: >-
  Author: @wkw | https://leetcode.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps/


tags: [Dynamic Programming]
---

# 1269 - Number of Ways to Stay in the Same Place After Some Steps (Hard)

## Problem Link

https://leetcode.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps/

## Problem Statement

You have a pointer at index `0` in an array of size `arrLen`. At each step, you can move 1 position to the left, 1 position to the right in the array, or stay in the same place (The pointer should not be placed outside the array at any time).

Given two integers `steps` and `arrLen`, return the number of ways such that your pointer still at index `0` after **exactly** `steps` steps. Since the answer may be too large, return it **modulo** `109 + 7`.

**Example 1:**

```
Input: steps = 3, arrLen = 2
Output: 4
Explanation: There are 4 differents ways to stay at index 0 after 3 steps.
Right, Left, Stay
Stay, Right, Left
Right, Stay, Left
Stay, Stay, Stay
```

**Example 2:**

```
Input: steps = 2, arrLen = 4
Output: 2
Explanation: There are 2 differents ways to stay at index 0 after 2 steps
Right, Left
Stay, Stay
```

**Example 3:**

```
Input: steps = 4, arrLen = 2
Output: 8
```

**Constraints:**

- `1 <= steps <= 500`
- `1 <= arrLen <= 10^6`

## Approach 1: Dynamic Programming

The first observation is that the computational complexity does not depend on $$arrLen$$. Instead, it is all about steps. If we have $$n$$ steps, we can only walk at most $$n / 2$$ steps to the left or the right. Therefore, we can use DFS with memoization to find out the answer.

<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    int numWays(int steps, int arrLen) {
        int M = 1e9 + 7;
        // dp[i][j]: how many ways to reach i-th pos using j steps
        vector<vector<int>> dp(steps / 2 + 1, vector<int>(steps + 1, -1));
        function<long long(int,int)> dfs = [&](int pos, int steps) -> long long {
            // if we walk outside the array or use all the steps
            // then return 0
            if (pos < 0 || pos > arrLen - 1 || pos > steps) return 0;
            // if we use all the steps, return 1 only if pos is 0
            if (steps == 0) return pos == 0;
            // if it has been calculated, return directly
            if (dp[pos][steps] != -1) return dp[pos][steps];
            // memoize it
            return dp[pos][steps] = (
                // move to the left
                dfs(pos - 1, steps - 1) % M +
                // stay at current position
                dfs(pos, steps - 1) % M +
                // move to the right
                dfs(pos + 1, steps - 1) % M
            ) % M;
        };
        return dfs(0, steps);
    }
};
```

<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def numWays(self, steps: int, arrLen: int) -> int:
        M = 10 ** 9 + 7
        @lru_cache(None)
        def dfs(pos, steps):
            # if we walk outside the array or use all the steps
            # then return 0
            if pos < 0 or pos > steps or pos > arrLen - 1: return 0
            # if we use all the steps, return 1 only if pos is 0
            if steps == 0: return pos == 0
            return (
                # move to the left
                dfs(pos - 1, steps - 1) +
                # stay at current position
                dfs(pos, steps - 1) +
                # move to the right
                dfs(pos + 1, steps - 1)
            ) % M
        return dfs(0, steps)
```
