---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/count-positions-on-street-with-required-brightness/
---

# 2237 - Count Positions on Street With Required Brightness (Medium)

## Problem Link

https://leetcode.com/problems/count-positions-on-street-with-required-brightness/

## Problem Statement

You are given an integer `n`. A perfectly straight street is represented by a number line ranging from `0` to `n - 1`. You are given a 2D integer array `lights` representing the street lamp(s) on the street. Each `lights[i] = [positioni, rangei]` indicates that there is a street lamp at position `positioni` that lights up the area from `[max(0, positioni - rangei), min(n - 1, positioni + rangei)]` (**inclusive**).

The **brightness** of a position `p` is defined as the number of street lamps that light up the position `p`. You are given a **0-indexed** integer array `requirement` of size `n` where `requirement[i]` is the minimum **brightness** of the `ith` position on the street.

Return _the number of positions_ `i` _on the street between_ `0` _and_ `n - 1` _that have a **brightness** of **at least** _ `requirement[i]`_._



**Example 1:**

![](https://assets.leetcode.com/uploads/2022/04/11/screenshot-2022-04-11-at-22-24-43-diagramdrawio-diagramsnet.png)

```
Input: n = 5, lights = [[0,1],[2,1],[3,2]], requirement = [0,2,1,4,1]
Output: 4
Explanation:
- The first street lamp lights up the area from [max(0, 0 - 1), min(n - 1, 0 + 1)] = [0, 1] (inclusive).
- The second street lamp lights up the area from [max(0, 2 - 1), min(n - 1, 2 + 1)] = [1, 3] (inclusive).
- The third street lamp lights up the area from [max(0, 3 - 2), min(n - 1, 3 + 2)] = [1, 4] (inclusive).

- Position 0 is covered by the first street lamp. It is covered by 1 street lamp which is greater than requirement[0].
- Position 1 is covered by the first, second, and third street lamps. It is covered by 3 street lamps which is greater than requirement[1].
- Position 2 is covered by the second and third street lamps. It is covered by 2 street lamps which is greater than requirement[2].
- Position 3 is covered by the second and third street lamps. It is covered by 2 street lamps which is less than requirement[3].
- Position 4 is covered by the third street lamp. It is covered by 1 street lamp which is equal to requirement[4].

Positions 0, 1, 2, and 4 meet the requirement so we return 4.
```

**Example 2:**

```
Input: n = 1, lights = [[0,1]], requirement = [2]
Output: 0
Explanation:
- The first street lamp lights up the area from [max(0, 0 - 1), min(n - 1, 0 + 1)] = [0, 0] (inclusive).
- Position 0 is covered by the first street lamp. It is covered by 1 street lamp which is less than requirement[0].
- We return 0 because no position meets their brightness requirement.
```

**Constraints:**

* `1 <= n <= 10^5`
* `1 <= lights.length <= 10^5`
* `0 <= positioni < n`
* `0 <= rangei <= 10^5`
* `requirement.length == n`
* `0 <= requirement[i] <= 10^5`

## Approach 1: Line Sweep

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int meetRequirement(int n, vector<vector<int>>& lights, vector<int>& requirement) {
        vector<int> brightness(n + 1);
        for (auto x : lights) {
            // start: + 1
            brightness[max(0, x[0] - x[1])]++;
            // end: -1
            brightness[min(n, x[0] + x[1] + 1)]--;
        }
        // calculate the prefix sum
        partial_sum(brightness.begin(), brightness.end(), brightness.begin());
        int ans = 0;
        // check each point's brightness to see if it meets its requirement
        for (int i = 0; i < n; i++) ans += brightness[i] >= requirement[i];
        return ans;
    }
};
```
