---
description: "Author: @wingkwong, @ganajayant, @radojicic23 | https://leetcode.com/problems/unique-paths/"
tags: [Math, Dynamic Programming, Combinatorics]
---

# 0062 - Unique Paths (Medium)

## Problem Link

https://leetcode.com/problems/unique-paths/

## Problem Statement

There is a robot on an `m x n` grid. The robot is initially located at the **top-left corner** (i.e., `grid[0][0]`). The robot tries to move to the **bottom-right corner** (i.e., `grid[m - 1][n - 1]`). The robot can only move either down or right at any point in time.

Given the two integers `m` and `n`, return _the number of possible unique paths that the robot can take to reach the bottom-right corner_.

The test cases are generated so that the answer will be less than or equal to `2 * 10^9`.

**Example 1:**

![](https://assets.leetcode.com/uploads/2018/10/22/robot_maze.png)

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

- `1 <= m, n <= 100`

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


<TabItem value="java" label="Java">
<SolutionAuthor name="@wingkwong"/>

```java
class Solution {
    public int uniquePaths(int m, int n) {
        long ans = 1, x = m + n - 2, k = Math.min(n - 1, m - 1);
        for (int i = 1; i <= k; i++) {
            ans *= x;
            x -= 1;
            ans /= i;
        }
        return (int) ans;
    }
}
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

<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    # Time Complexity: O(m*n)
    # Space Complexity: O(m*n)
    # We are going to traverse all the unique paths, and store the values
    # of these number of unique paths at each cell in our cache.
    # Slight difference, we can start at m,n and traverse towards 0,0
    # to get the same result, which allows us to reuse the function
    # as our recursive function.
    cache = {}
    def uniquePaths(self, m: int, n: int) -> int:
        # Already calculate values for (m,n) before, reuse those.
        if (m,n) in self.cache:
            return self.cache[(m,n)]
        # If we reach 1, for m or n, that is our base case.
        if m == 1 or n == 1:
            # set our answer to 1
            unique_paths = 1
        else:
            # any other case, set current value to bottom + right cell
            # or in our case since we are starting bottom right, set the
            # current value to be the top + left cells.
            unique_paths = self.uniquePaths(m - 1, n) + self.uniquePaths(m, n - 1)
        # cache our result for unique_path we got whether it was 1
        # or something we solved, to use for later.
        self.cache[(m,n)] = unique_paths
        return unique_paths
```

</TabItem>
</Tabs>

## Approach 3: Dynamic programming (Bottom Up)

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@radojicic23"/>

```python
# Time Complexity: O(n * m)
# Space Complexity: O(n)
class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        row = [1] * n
        # go through all rows exept the last one
        for i in range(m - 1):
            new_row = [1] * n
            # go through every column except the right most column
            # because the last value in every row is 1
            # start at second to last position and
            # keep going until we get to the beginning (reverse order)
            for j in range(n - 2, -1, -1):
                # right value + value below
                new_row[j] = new_row[j + 1] + row[j]
            # update the row
            row = new_row
        return row[0]
```

</TabItem>

<TabItem value="js" label="JavaScript">
<SolutionAuthor name="@radojicic23"/>

```js
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let row = Array(n).fill(1);
  // go through every column except last one
  for (let i = 0; i < m - 1; i++) {
    let new_row = Array(n).fill(1);
    // go through every column except the right most column
    // because the last value in every row is 1
    // start at second to last position and
    // keep going until we get to the beginning (reverse order)
    for (j = n - 2; j >= 0; j--) {
      // right value + value before
      new_row[j] = new_row[j + 1] + row[j];
    }
    // update row
    row = new_row;
  }
  return row[0];
};
```

</TabItem>
</Tabs>
