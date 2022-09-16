---
description: 'Author: @wingkwong, @ganajayant | https://leetcode.com/problems/unique-paths/'
---

# 0062 - Unique Paths (Medium)

## Problem Link

https://leetcode.com/problems/unique-paths/

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


<Tabs>
<TabItem value="c++" label="C++">
<SolutionAuthor name="@wingkwong"/>

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
</TabItem>
</Tabs>

## Approach 2: Dynamic programming (Top Down) Memoization 
We begin with the position (0,0).
At any position (i,j), we make a recursive call to (i+1,j) and (i,j+1) to get the number of paths to the right and below the current node.
If (i,j) goes out of bound, there can exist no path from it so we simply return 0.
If we reach (n-1,m-1), we have found a path and so in this case we return 1.

We are using memoization to store already computed value so it will reduce runtime by just accessing the already computed value
<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@ganajayant"/>

```java
class Solution {
    HashMap<String, Integer> hm = new HashMap<String, Integer>();
    public int uniquePaths(int m, int n) {
        String search = Integer.toString(m) + "#" + Integer.toString(n);
        if (hm.containsKey(search)) {
            return hm.get(search);
        } else if (m == 1 && n == 1) {
            return 1;
        } else if (m == 0 || n == 0) {
            return 0;
        } else {
            hm.put(search, uniquePaths(m - 1, n) + uniquePaths(m, n - 1));
            return hm.get(search);
        }
    }
}
```
</TabItem>
</Tabs>