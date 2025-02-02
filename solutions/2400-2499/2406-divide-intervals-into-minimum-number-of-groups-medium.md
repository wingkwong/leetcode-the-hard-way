---
description: 'Author: @wkw | https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups/'
---

# 2406 - Divide Intervals Into Minimum Number of Groups (Medium)

## Problem Statement

You are given a 2D integer array `intervals` where `intervals[i] = [lefti, righti]` represents the **inclusive** interval `[lefti, righti]`.

You have to divide the intervals into one or more **groups** such that each interval is in **exactly** one group, and no two intervals that are in the same group **intersect** each other.

Return _the **minimum** number of groups you need to make_.

Two intervals **intersect** if there is at least one common number between them. For example, the intervals `[1, 5]` and `[5, 8]` intersect.

**Example 1:**

```
Input: intervals = [[5,10],[6,8],[1,5],[2,3],[1,10]]
Output: 3
Explanation: We can divide the intervals into the following groups:
- Group 1: [1, 5], [6, 8].
- Group 2: [2, 3], [5, 10].
- Group 3: [1, 10].
It can be proven that it is not possible to divide the intervals into fewer than 3 groups.
```

**Example 2:**

```
Input: intervals = [[1,3],[5,6],[8,10],[11,13]]
Output: 1
Explanation: None of the intervals overlap, so we can put all of them in one group.
```

**Constraints:**

- `1 <= intervals.length <= 105`
- `intervals[i].length == 2`
- `1 <= lefti <= righti <= 10^6`

## Approach 1: Line Sweep

<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    // it's almost same as 253. Meeting Rooms II ...
    // the idea is to use line sweep to find out the number of overlapped intervals
    // if it is overlapped, that means you need to create a new group
    // e.g. if 2 intervals are overlapped, you need 2 groups ...
    // e.g. if 3 intervals are overlapped, you need 3 groups ...
    int minGroups(vector<vector<int>>& intervals) {
        int ans = 0, cnt = 0;
        // use map for internally sorting
        map<int, int> m;
        // standard line sweep
        // - increase the count of starting point by 1
        // - decrease the count of ending point by 1
        // - take prefix sum and do something
        for (auto& x: intervals) {
            // in - increase by 1
            m[x[0]]++;
            // out - decrease by 1
            m[x[1] + 1]--;
        }
        // so now what we have is
        // intervals   1  2  3  4  5  6  7  8  9  10
        // +           2  1  0  0  1  1  0  0  0  0
        // -           0  0  1  0  1  0  0  1  0  2
        // m           2  1  -1 0  0  1  0  -1 0  -2
        for (auto& x: m) {
            // here we calculate the prefix sum
            cnt += x.second;
            // and record the maximum overlapping intervals
            ans = max(ans, cnt);
        }
        return ans;
    }
};
```
