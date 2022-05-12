---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/check-if-it-is-a-straight-line/
---

# 1232 - Check If It Is a Straight Line (Easy)

## Problem Statement

You are given an array `coordinates`, `coordinates[i] = [x, y]`, where `[x, y]` represents the coordinate of a point. Check if these points make a straight line in the XY plane.

&#x20;

**Example 1:**

![](https://assets.leetcode.com/uploads/2019/10/15/untitled-diagram-2.jpg)

```
Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
Output: true
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2019/10/09/untitled-diagram-1.jpg)

```
Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
Output: false
```

&#x20;

**Constraints:**

* `2 <= coordinates.length <= 1000`
* `coordinates[i].length == 2`
* `-10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4`
* `coordinates` contains no duplicate point.

## Approach 1: Check the Slope

First we calculate the slope between the first two points. Then starting from the third one, we check if the slope with the previous point is same as the target one. To compare the slope, we can use multiplication instead of division to avoid divide-by-zero and precision issue.

```cpp
class Solution {
public:
    bool checkStraightLine(vector<vector<int>>& coordinates) {
        // slope for first two points: dy0 / dx0
        int dx0 = coordinates[1][0] - coordinates[0][0];
        int dy0 = coordinates[1][1] - coordinates[0][1];
        for (int i = 2; i < coordinates.size(); i++) {
            // slope for the current point and the previous point
            // = dy / dx
            int dx = coordinates[i][0] - coordinates[i - 1][0];
            int dy = coordinates[i][1] - coordinates[i - 1][1];
            // is dy0 / dx0 = dy / dx ?
            // it is same as dy * dx0 = dy0 * dx
            if (dy * dx0 != dy0 * dx) {
                return false;
            }
        }
        return true;
    }
};
```

