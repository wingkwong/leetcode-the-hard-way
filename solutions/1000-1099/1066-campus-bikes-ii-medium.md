---
description: 'Author: @wingkwong | https://leetcode.com/problems/campus-bikes-ii/'
---

import SolutionAuthor from '@site/src/components/SolutionAuthor';

# 1066 - Campus Bikes II (Medium)

## Problem Link

https://leetcode.com/problems/campus-bikes-ii/

## Problem Statement

On a campus represented as a 2D grid, there are `n` workers and `m` bikes, with `n <= m`. Each worker and bike is a 2D coordinate on this grid.

We assign one unique bike to each worker so that the sum of the **Manhattan distances** between each worker and their assigned bike is minimized.

Return `the minimum possible sum of Manhattan distances between each worker and their assigned bike`.

The **Manhattan distance** between two points `p1` and `p2` is `Manhattan(p1, p2) = |p1.x - p2.x| + |p1.y - p2.y|`.



**Example 1:**

![](https://assets.leetcode.com/uploads/2019/03/06/1261\_example\_1\_v2.png)

```
Input: workers = [[0,0],[2,1]], bikes = [[1,2],[3,3]]
Output: 6
Explanation: 
We assign bike 0 to worker 0, bike 1 to worker 1. The Manhattan distance of both assignments is 3, so the output is 6.
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2019/03/06/1261\_example\_2\_v2.png)

```
Input: workers = [[0,0],[1,1],[2,0]], bikes = [[1,0],[2,2],[2,1]]
Output: 4
Explanation: 
We first assign bike 0 to worker 0, then assign bike 1 to worker 1 or worker 2, bike 2 to worker 2 or worker 1. Both assignments lead to sum of the Manhattan distances as 4.
```

**Example 3:**

```
Input: workers = [[0,0],[1,0],[2,0],[3,0],[4,0]], bikes = [[0,999],[1,999],[2,999],[3,999],[4,999]]
Output: 4995
```

**Constraints:**

* `n == workers.length`
* `m == bikes.length`
* `1 <= n <= m <= 10`
* `workers[i].length == 2`
* `bikes[i].length == 2`
* `0 <= workers[i][0], workers[i][1], bikes[i][0], bikes[i][1] < 1000`
* All the workers and the bikes locations are **unique**.

## Approach 1:  DP Bit Masking

Iterate each mask from $$0$$ to $$m$$ where $$m$$ is the size of $$bikes$$. For each mask, we try to find each bike that is not in use and calculate the Manhattan distance and try the next $$workerIdx$$. We memorise the result to speed up the whole process.

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    vector<int> dp;
    int n, m;
    int dfs(vector<vector<int>>& workers, vector<vector<int>>& bikes, int workerIdx, int mask) {
        // worker idx out of range
        if (workerIdx >= n) return 0;
        // calculated before, return immediately
        if (dp[mask] != -1) return dp[mask];
        // init res
        int res = INT_MAX;
        // iterate each mask
        for (int bikeIdx = 0; bikeIdx < m; bikeIdx++) {
            // this bike is not in use
            if (!(mask & (1 << bikeIdx))) {
                // calculate the Manhattan distance
                int dist = abs(workers[workerIdx][0] - bikes[bikeIdx][0]) + abs(workers[workerIdx][1] - bikes[bikeIdx][1]);
                res = min(res, dist + dfs(workers, bikes, workerIdx + 1, mask | (1 << bikeIdx)));
            }
        }
        // memoize the smallest distance sum for this mask
        return dp[mask] = res;
    }
    int assignBikes(vector<vector<int>>& workers, vector<vector<int>>& bikes) {
        n = workers.size(), m = bikes.size();
        dp = vector<int>(1 << m, -1);
        return dfs(workers, bikes, 0, 0);
    }
};
```

We can also write like this.

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int assignBikes(vector<vector<int>>& workers, vector<vector<int>>& bikes) {
        int n = workers.size(), m = bikes.size(), ans = 1e9;
        vector<int> dp(1 << m, 1e9);
        dp[0] = 0;
        // iterate each mask
        for (int mask = 0; mask < (1 << m); mask++) {
            // worker idx
            int workerIdx = __builtin_popcount(mask);
            // all workers got the bikes
            // update the answer
            if (workerIdx >= n) {
                ans = min(ans, dp[mask]);
                continue;
            }
            // iterate each bike
            for (int bikeIdx = 0; bikeIdx < m; bikeIdx++) {
                // this bike is not in use
                if (!(mask & (1 << bikeIdx))) {
                    // calculate the Manhattan distance
                    int dist = abs(workers[workerIdx][0] - bikes[bikeIdx][0]) + abs(workers[workerIdx][1] - bikes[bikeIdx][1]);
                    // new mask = current mask + this bike
                    int newMask = mask | (1 << bikeIdx);
                    // update distance sum
                    dp[newMask] = min(dp[newMask], dist + dp[mask]);
                }
            }
        }
        return ans;
    }
};
```
