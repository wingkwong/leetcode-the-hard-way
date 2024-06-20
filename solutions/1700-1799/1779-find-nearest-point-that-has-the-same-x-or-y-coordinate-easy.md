---
description: "Author: @wingkwong | https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/"
tags: [Array]
---

# 1779 - Find Nearest Point That Has the Same X or Y Coordinate (Easy)

## Problem Link

https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/

## Problem Statement

You are given two integers, `x` and `y`, which represent your current location on a Cartesian grid: `(x, y)`. You are also given an array `points` where each `points[i] = [ai, bi]` represents that a point exists at `(ai, bi)`. A point is **valid** if it shares the same x-coordinate or the same y-coordinate as your location.

Return _the index **(0-indexed)** of the **valid** point with the smallest **Manhattan distance** from your current location_. If there are multiple, return _the valid point with the **smallest** index_. If there are no valid points, return `-1`.

The **Manhattan distance** between two points `(x1, y1)` and `(x2, y2)` is `abs(x1 - x2) + abs(y1 - y2)`.

**Example 1:**

```
Input: x = 3, y = 4, points = [[1,2],[3,1],[2,4],[2,3],[4,4]]
Output: 2
Explanation: Of all the points, only [3,1], [2,4] and [4,4] are valid. Of the valid points, [2,4] and [4,4] have the smallest Manhattan distance from your current location, with a distance of 1. [2,4] has the smallest index, so return 2.
```

**Example 2:**

```
Input: x = 3, y = 4, points = [[3,4]]
Output: 0
Explanation: The answer is allowed to be on the same location as your current location.
```

**Example 3:**

```
Input: x = 3, y = 4, points = [[2,3]]
Output: -1
Explanation: There are no valid points.
```

**Constraints:**

- `1 <= points.length <= 10^4`
- `points[i].length == 2`
- `1 <= x, y, ai, bi <= 10^4`

## Approach 1: Brute Force

For each point, we simply check if the current point has the same X or Y coordinate and calculate the distance between that and the target point $(x, y)$. If we find the one with smaller distance, update the distance and answer.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int nearestValidPoint(int x, int y, vector<vector<int>>& points) {
        int ans = -1, mi = INT_MAX;
        for(int i = 0; i < points.size(); i++) {
            auto p = points[i];
            if(x == p[0] || y == p[1]) {
                if(abs(x - p[0]) + abs(y - p[1]) < mi) {
                    mi = abs(x - p[0]) + abs(y - p[1]);
                    ans = i;
                }
            }
        }
        return ans;
    }
};
```

</TabItem>

<TabItem value="rs" label="Rust">
<SolutionAuthor name="@wingkwong"/>

```rs
impl Solution {
    pub fn nearest_valid_point(x: i32, y: i32, points: Vec<Vec<i32>>) -> i32 {
        let mut mi = std::i32::MAX;
        let mut ans = -1;
        for (i, p) in points.into_iter().enumerate() {
            if p[0] == x || p[1] == y {
                let d = (p[0] - x).abs() + (p[1] - y).abs();
                if (d < mi) {
                    mi = d;
                    ans = i as i32;
                }
            }
        }
        ans
    }
}
```

</TabItem>
</Tabs>
