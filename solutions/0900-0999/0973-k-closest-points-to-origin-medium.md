---
description: 'Author: @wingkwong | https://leetcode.com/problems/k-closest-points-to-origin/'
---

import Authors from '@site/src/components/Authors';

# 0973 - K Closest Points to Origin (Medium)

## Problem Statement

Given an array of `points` where `points[i] = [xi, yi]` represents a point on the **X-Y** plane and an integer `k`, return the `k` closest points to the origin `(0, 0)`.

The distance between two points on the **X-Y** plane is the Euclidean distance (i.e., `√(x1 - x2)2 + (y1 - y2)2`).

You may return the answer in **any order**. The answer is **guaranteed** to be **unique** (except for the order that it is in).

**Example 1:**

![](https://assets.leetcode.com/uploads/2021/03/03/closestplane1.jpg)

```
Input: points = [[1,3],[-2,2]], k = 1
Output: [[-2,2]]
Explanation:
The distance between (1, 3) and the origin is sqrt(10).
The distance between (-2, 2) and the origin is sqrt(8).
Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].
```

**Example 2:**

```
Input: points = [[3,3],[5,-1],[-2,4]], k = 2
Output: [[3,3],[-2,4]]
Explanation: The answer [[-2,4],[3,3]] would also be accepted.
```

**Constraints:**

* `1 <= k <= points.length <= 10^4`
* `-10^4 < xi, yi < 10^4`

## Approach 1: nth_element

<Authors names="@wingkwong"/>

```cpp
class Solution {
public:
    vector<vector<int>> kClosest(vector<vector<int>>& points, int K) {
        // we don't need to care about the exact order 
        // nth_element approach is enough
        nth_element(points.begin(), points.begin() + K, points.end(),[](vector<int>& q, vector<int>& p) {
            // sort by Euclidean distance
            // dist(q, p) = sqrt( (q1 - p1) * (q1 - p1) + (q2 - p2) * (q2 - p2) )
            // since we are comparing the points with the origin (0,0)
            // dist(q, p) = sqrt( (q1) * (q1) + (q2) * (q2) )
            // and we don't need to perform sqrt as sqrt(a) must be smaller than sqrt(b) if a < b
            return q[0] * q[0] + q[1] * q[1] < p[0] * p[0] + p[1] * p[1];
        });
        // resize points to show K clostest points
        points.resize(K);
        return points;
    }
};
```