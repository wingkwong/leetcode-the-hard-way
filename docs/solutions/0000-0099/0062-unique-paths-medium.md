---
description: 'Author: @wingkwong | https://leetcode.com/problems/unique-paths/'
---

# 0062 - Unique Paths (Medium)

## Problem Statement

There is a robot on an `m x n` grid. The robot is initially located at the **top-left corner** (i.e., `grid[0][0]`). The robot tries to move to the **bottom-right corner** (i.e., `grid[m - 1][n - 1]`). The robot can only move either down or right at any point in time.

Given the two integers `m` and `n`, return _the number of possible unique paths that the robot can take to reach the bottom-right corner_.

The test cases are generated so that the answer will be less than or equal to `2 * 10^9`.

**Example 1:**

![](https://assets.leetcode.com/uploads/2018/10/22/robot\_maze.png)

```
Input: m = 3, n = 7
Output: 28
```

**Example 2:**

```
Input: m = 3, n = 2
Output: 3
Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down
```

**Constraints:**

* `1 <= m, n <= 100`

## Approach 1 : Math

We need to make $$n - 1 + m - 1$$ steps in total. How many ways to choose from $$m - 1$$ right steps and $$n - 1$$ down steps out of the total steps?

```cpp
class Solution {
public:
    template <typename T>
    T binomial(int64_t N, int64_t K) {
      if (K < 0 || N < K) return 0;
      T ret = 1;
      for (T i = 1; i <= K; ++i) {
        ret *= N--;
        ret /= i;
      }
      return ret;
    }
    
    int uniquePaths(int m, int n) {
        return binomial<long long>(m + n - 2, min(m - 1, n - 1));
    }
};
```
