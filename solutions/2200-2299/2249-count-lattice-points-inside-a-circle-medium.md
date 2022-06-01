---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/count-lattice-points-inside-a-circle/
---

import Authors from '@site/src/components/Authors';

# 2249 - Count Lattice Points Inside a Circle (Medium)

## Problem Link

https://leetcode.com/problems/count-lattice-points-inside-a-circle/

## Problem Statement

Given a 2D integer array `circles` where `circles[i] = [xi, yi, ri]` represents the center `(xi, yi)` and radius `ri` of the `ith` circle drawn on a grid, return _the **number of lattice points** that are present inside **at least one** circle_.

**Note:**

* A **lattice point** is a point with integer coordinates.
* Points that lie **on the circumference of a circle** are also considered to be inside it.

**Example 1:**

![](https://assets.leetcode.com/uploads/2022/03/02/exa-11.png)

```
Input: circles = [[2,2,1]]
Output: 5
Explanation:
The figure above shows the given circle.
The lattice points present inside the circle are (1, 2), (2, 1), (2, 2), (2, 3), and (3, 2) and are shown in green.
Other points such as (1, 1) and (1, 3), which are shown in red, are not considered inside the circle.
Hence, the number of lattice points present inside at least one circle is 5.
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2022/03/02/exa-22.png)

```
Input: circles = [[2,2,2],[3,4,1]]
Output: 16
Explanation:
The figure above shows the given circles.
There are exactly 16 lattice points which are present inside at least one circle. 
Some of them are (0, 2), (2, 0), (2, 4), (3, 2), and (4, 4).
```

**Constraints:**

* `1 <= circles.length <= 200`
* `circles[i].length == 3`
* `1 <= xi, yi <= 100`
* `1 <= ri <= min(xi, yi)`

## Approach 1: Brute Force

Iterate each point, check if the distance between the center point and the target point is less than or equal to the radius. If so, that means the target point is within the circle.

<Authors names="@wingkwong"/>

```cpp
class Solution {
public:
    int countLatticePoints(vector<vector<int>>& circles) {
        int ans = 0, mxL = 200;
        // iterate each possible points
        for (int i = 0; i <= mxL; i++) {
            for (int j = 0; j <= mxL; j++) {
                // without & - it will give TLE
                for (auto& circle : circles) {
                    int x = circle[0], y = circle[1], r = circle[2];
                    // distance formula
                    if ( (x - i) * (x - i) + (y - j) * (y - j) <= r * r ) {
                        ans += 1;
                        // we only need to include once
                        break;
                    }
                }
            }
        }
        return ans;
    }
};
```
