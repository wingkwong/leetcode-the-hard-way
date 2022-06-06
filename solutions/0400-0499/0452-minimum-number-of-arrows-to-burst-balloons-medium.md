---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/
---

import SolutionAuthor from '@site/src/components/SolutionAuthor';

# 0452 - Minimum Number of Arrows to Burst Balloons (Medium)

## Problem Link

https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/

## Problem Statement

There are some spherical balloons taped onto a flat wall that represents the XY-plane. The balloons are represented as a 2D integer array `points` where `points[i] = [xstart, xend]` denotes a balloon whose **horizontal diameter** stretches between `xstart` and `xend`. You do not know the exact y-coordinates of the balloons.

Arrows can be shot up **directly vertically** (in the positive y-direction) from different points along the x-axis. A balloon with `xstart` and `xend` is **burst** by an arrow shot at `x` if `xstart <= x <= xend`. There is **no limit** to the number of arrows that can be shot. A shot arrow keeps traveling up infinitely, bursting any balloons in its path.

Given the array `points`, return _the **minimum** number of arrows that must be shot to burst all balloons_.

**Example 1:**

```
Input: points = [[10,16],[2,8],[1,6],[7,12]]
Output: 2
Explanation: The balloons can be burst by 2 arrows:
- Shoot an arrow at x = 6, bursting the balloons [2,8] and [1,6].
- Shoot an arrow at x = 11, bursting the balloons [10,16] and [7,12].
```

**Example 2:**

```
Input: points = [[1,2],[3,4],[5,6],[7,8]]
Output: 4
Explanation: One arrow needs to be shot for each balloon for a total of 4 arrows.
```

**Example 3:**

```
Input: points = [[1,2],[2,3],[3,4],[4,5]]
Output: 2
Explanation: The balloons can be burst by 2 arrows:
- Shoot an arrow at x = 2, bursting the balloons [1,2] and [2,3].
- Shoot an arrow at x = 4, bursting the balloons [3,4] and [4,5].
```

**Constraints:**

* `1 <= points.length <= 10^5`
* `points[i].length == 2`
* `-2^31 <= xstart < xend <= 2^31 - 1`

## Approach 1: Greedy

The answer is at least 1. First we sort the balloons by the end coordinate. Set the first end coordinate as `cur_r`. Iterate over all balloons to check if the balloon starts after `cur_r`. If so, increase answer by 1 and set `cur_r = r`.

```cpp
class Solution {
public:
    int findMinArrowShots(vector<vector<int>>& points) {
        sort(points.begin(), points.end(), [&](const vector<int>& x, const vector<int>& y) {
            return x[1] < y[1];  
        });
        int ans = 1, cur_r = points[0][1];
        for (auto p : points) {
            int l = p[0], r = p[1];
            if (cur_r < l) ans++, cur_r = r;
        }
        return ans;
    }
};
```
