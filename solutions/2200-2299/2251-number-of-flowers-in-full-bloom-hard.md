---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/number-of-flowers-in-full-bloom/
---

import Authors from '@site/src/components/Authors';

# 2251 - Number of Flowers in Full Bloom (Hard)

## Problem Link

https://leetcode.com/problems/number-of-flowers-in-full-bloom/

## Problem Statement

You are given a **0-indexed** 2D integer array `flowers`, where `flowers[i] = [starti, endi]` means the `ith` flower will be in **full bloom** from `starti` to `endi` (**inclusive**). You are also given a **0-indexed** integer array `persons` of size `n`, where `persons[i]` is the time that the `ith` person will arrive to see the flowers.

Return _an integer array_ `answer` _of size_ `n`_, where_ `answer[i]` _is the **number** of flowers that are in full bloom when the_ `ith` _person arrives._

**Example 1:**

![](https://assets.leetcode.com/uploads/2022/03/02/ex1new.jpg)

```
Input: flowers = [[1,6],[3,7],[9,12],[4,13]], persons = [2,3,7,11]
Output: [1,2,2,2]
Explanation: The figure above shows the times when the flowers are in full bloom and when the people arrive.
For each person, we return the number of flowers in full bloom during their arrival.
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2022/03/02/ex2new.jpg)

```
Input: flowers = [[1,10],[3,3]], persons = [3,3,2]
Output: [2,2,1]
Explanation: The figure above shows the times when the flowers are in full bloom and when the people arrive.
For each person, we return the number of flowers in full bloom during their arrival.
```

**Constraints:**

* `1 <= flowers.length <= 5 * 10^4`
* `flowers[i].length == 2`
* `1 <= starti <= endi <= 10^9`
* `1 <= persons.length <= 5 * 10^4`
* `1 <= persons[i] <= 10^9`

## Approach 1: Line Sweep

<Authors names="@wingkwong"/>

```cpp
class Solution {
public:
    vector<int> fullBloomFlowers(vector<vector<int>>& flowers, vector<int>& persons) {
        int n = persons.size();
        vector<int> ans(n);
        vector<array<int, 3>> v; // {time, idx, val}
        for (auto& flower : flowers) {
            // in
            v.push_back({flower[0], -1, 1});
            // out
            v.push_back({flower[1] + 1, -1, -1});
        }
        // include persons
        for (int i = 0; i < n; i++) v.push_back({persons[i], i, 0});
        // sort in ascending
        sort(v.begin(), v.end());
        int sum = 0;
        for (auto& [time, idx, val] : v) {
            // calculate the prefix sum
            sum += val;
            // idx is not -1, set the answer for person[idx]
            if (idx != -1) {
                ans[idx] = sum;
            }
        }
        return ans;
    }
};
```
