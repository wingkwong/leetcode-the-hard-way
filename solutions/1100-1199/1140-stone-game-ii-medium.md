---
description: 'Author: @wkw | https://leetcode.com/problems/stone-game-ii/'
tags: [Array, Math, Dynamic Programming, Game Theory]
---

# 1140 - Stone Game II (Medium)

## Problem Statement

Alice and Bob continue their games with piles of stones.  There are a number of piles **arranged in a row**, and each pile has a positive integer number of stones `piles[i]`.  The objective of the game is to end with the most stones.

Alice and Bob take turns, with Alice starting first.  Initially, `M = 1`.

On each player's turn, that player can take **all the stones** in the **first** `X` remaining piles, where `1 <= X <= 2M`.  Then, we set `M = max(M, X)`.

The game continues until all the stones have been taken.

Assuming Alice and Bob play optimally, return the maximum number of stones Alice can get.

**Example 1:**

```
Input: piles = [2,7,9,4,4]
Output: 10
Explanation:  If Alice takes one pile at the beginning, Bob takes two piles, then Alice takes 2 piles again. Alice can get 2 + 4 + 4 = 10 piles in total. If Alice takes two piles at the beginning, then Bob can take all three piles left. In this case, Alice get 2 + 7 = 9 piles in total. So we return 10 since it's larger.
```

**Example 2:**

```
Input: piles = [1,2,3,4,5,100]
Output: 104
```

**Constraints:**

- `1 <= piles.length <= 100`
- `1 <= piles[i] <= 10^4`

## Approach 1: Dynamic Programming

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    // dp[i][j] = max stones you can get from piles[i:] with M = j
    int dp[101][200], n;
    int dfs(vector<int>& piles, int i, int m, int total) {
        // if we calculated the result before, use it directly
        if (dp[i][m] != -1) return dp[i][m];
        // res: used to compare the max number of stones
        // taken: used to record how many stones we've taken
        int res = 0, taken = 0;
        // i is the starting position
        // we can take at most i + 2 * m piles
        // however, it may exceed the size of piles
        // hence use min to get the max limit
        for (int j = i; j < min(i + 2 * m, n); j++) {
            // take this pile of stones
            taken += piles[j];
            // move to the next position
            // with the new M = max(M, X)
            // where X is how many piles we've taken so far which is j - i + 1
            res = max(res, total - dfs(piles, j + 1, max(m, j - i + 1), total - taken));
        }
        // memoize the result
        return dp[i][m] = res;
    }

    int stoneGameII(vector<int>& piles) {
        // init dp with value -1
        memset(dp, -1, sizeof(dp));
        n = piles.size();
        return dfs(piles, 0, 1, accumulate(piles.begin(), piles.end(), 0));
    }
};
```

</TabItem>

<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def stoneGameII(self, piles: List[int]) -> int:
        n = len(piles)
        @cache
        def dfs(i, m, total):
            # used to compare the max number of stones
            res = 0
            # used to record how many stones we've taken
            taken = 0
            # i is the starting position
            # we can take at most i + 2 * m piles
            # however, it may exceed the size of piles
            # hence use min to get the max limit
            for j in range(i, min(i + 2 * m, n)):
                # take this pile of stones
                taken += piles[j]
                # move to the next position
                # with the new M = max(M, X)
                # where X is how many piles we've taken so far which is j - i + 1
                res = max(res, total - dfs(j + 1, max(m, j - i + 1), total - taken))
            return res
        return dfs(0, 1, sum(piles))
```

</TabItem>
</Tabs>
