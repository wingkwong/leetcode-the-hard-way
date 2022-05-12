---
description: 'Author: @wingkwong | https://leetcode.com/problems/maximum-population-year/'
---

# 1854 - Maximum Population Year (Easy)

## Problem Statement

You are given a 2D integer array `logs` where each `logs[i] = [birthi, deathi]` indicates the birth and death years of the `ith` person.

The **population** of some year `x` is the number of people alive during that year. The `ith` person is counted in year `x`'s population if `x` is in the **inclusive** range `[birthi, deathi - 1]`. Note that the person is **not** counted in the year that they die.

Return _the **earliest** year with the **maximum population**_.

**Example 1:**

```
Input: logs = [[1993,1999],[2000,2010]]
Output: 1993
Explanation: The maximum population is 1, and 1993 is the earliest year with this population.
```

**Example 2:**

```
Input: logs = [[1950,1961],[1960,1971],[1970,1981]]
Output: 1960
Explanation: 
The maximum population is 2, and it had happened in years 1960 and 1970.
The earlier year between them is 1960.
```

**Constraints:**

* `1 <= logs.length <= 100`
* `1950 <= birthi < deathi <= 2050`

## Approach 1: Line Sweep

```cpp
class Solution {
public:
    int maximumPopulation(vector<vector<int>>& logs) {
        vector<int> cnt(2100);
        for (auto x : logs) {
            // start: + 1
            cnt[x[0]]++;
            // end: - 1
            cnt[x[1]]--;
        }
        // calculate prefix sum
        partial_sum(cnt.begin(), cnt.end(), cnt.begin());
        // check the maximum
        int mx = *max_element(cnt.begin(), cnt.end());
        // find the first year with the max population
        for (int i = 1950; i <= 2050; i++) {
            if (mx == cnt[i]) {
                return i;
            }
        }
        return -1;
    }
};
```

We can further revise it due to the constraint $$1950 <= birth_i < death_i <= 2050$$.

```cpp
class Solution {
public:
    int maximumPopulation(vector<vector<int>>& logs) {
        vector<int> cnt(101);
        for (auto x : logs) {
            // start: + 1
            cnt[x[0] - 1950]++;
            // end: - 1
            cnt[x[1] - 1950]--;
        }
        // calculate prefix sum
        partial_sum(cnt.begin(), cnt.end(), cnt.begin());
        // check the maximum
        int mx = *max_element(cnt.begin(), cnt.end());
        // find the first year with the max population
        for (int i = 0; i <= 100; i++) {
            if (mx == cnt[i]) {
                return 1950 + i;
            }
        }
        return -1;
    }
};
```
