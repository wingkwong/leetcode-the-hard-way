---
description: 'Author: @wingkwong | https://leetcode.com/problems/matchsticks-to-square/'
---

import SolutionAuthor from '@site/src/components/SolutionAuthor';

# 0473 - Matchsticks to Square (Medium)

## Problem Link

https://leetcode.com/problems/matchsticks-to-square/

## Problem Statement

You are given an integer array `matchsticks` where `matchsticks[i]` is the length of the `ith` matchstick. You want to use **all the matchsticks** to make one square. You **should not break** any stick, but you can link them up, and each matchstick must be used **exactly one time**.

Return `true` if you can make this square and `false` otherwise.

**Example 1:**

![](https://assets.leetcode.com/uploads/2021/04/09/matchsticks1-grid.jpg)

```
Input: matchsticks = [1,1,2,2,2]
Output: true
Explanation: You can form a square with length 2, one side of the square came two sticks with length 1.
```

**Example 2:**

```
Input: matchsticks = [3,3,3,3,4]
Output: false
Explanation: You cannot find a way to form a square with all the matchsticks.
```

**Constraints:**

* `1 <= matchsticks.length <= 15`
* `1 <= matchsticks[i] <= 10^8`

## Approach 1: Bitmask DP

If we need to put all matchsticks to form a square, then each side should equally have a length of$$sum(matchsticks) / 4$$. If the perimeter cannot be divided by $$4$$, then the answer is false. If the longest matchstick is greater than the target side, then it is also false.

We can use bitmask to track which matchsticks are used. For example, for matchsticks = \[1, 1, 2, 2, 2], then bitmask $$10001_2$$simply means the first and the last matchsticks are used. If we have a state $$10001_2$$, then we can only put the middle three matchsticks to some positions.

Let $$dp[mask]$$ be the length of matchsticks we have put in the state $$mask$$. For example, If $$mask := 10001_2$$, $$dp[mask] := 5$$, $$side := 7$$, then it means we have put two matchsticks with the length of $$5$$ in total.

Hence, we iterate the mask. If the mask cannot be used, then skip it. Otherwise, we iterate $$n$$ times to check if $$i$$-th bit is used. If not, it means we may take this matchstick. However, we can only set this bit (take the matchstick) only if putting it won't exceed the length of side, i.e. $$dp[mask] + matchsticks[i] <= side$$. Once we choose it, then we update the new state $$(dp[mask] + matchsticks[i]) \mod side$$. We take $$mod$$ here because if we want to reset it if the prefect match for a side is found. At the end, choosing all $$5$$ matchsticks would give $$dp[(11111_2)] = 0$$.

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    bool makesquare(vector<int>& matchsticks) {
        int n = matchsticks.size();
        // sum all lengths
        int perimeter = accumulate(matchsticks.begin(), matchsticks.end(), 0);
        // each side should have equally a length of (sum / 4)
        // return false if it is not satisfied
        if (perimeter % 4) return false;
        // get the length of side
        int side = perimeter / 4;
        // return false if the longest matchstick is greater than the side
        if (*max_element(matchsticks.begin(), matchsticks.end()) > side) return false;
        // we have (1 << n) states
        vector<int> dp(1 << n, -1);
        // base case - putting 0 matchstick
        dp[0] = 0;
        for (int mask = 0; mask < (1 << n); mask++) {
            // cannot use this state - skip it
            if (dp[mask] == -1) continue;
            // try to put each matchstick 
            for (int i = 0; i < n; i++) {
                // if matchsticks[i] is available to be put
                // and the length won't exceed side after putting it
                if (!(mask & (1 << i)) && dp[mask] + matchsticks[i] <= side) {
                    // then put it and update the state
                    // if it perfectly forms a side, it would be 0 
                    dp[mask | (1 << i)] = (dp[mask] + matchsticks[i]) % side;
                }
            }
        }
        // (1 << n) - 1 means all bits set = all matchsticks are used
        return dp[(1 << n) - 1] == 0;
    }
};
```

