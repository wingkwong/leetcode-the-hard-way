---
description: 'Author: @wkw | https://leetcode.com/problems/two-city-scheduling/'
tags: ['Array', 'Sorting', 'Greedy']
---

# 1029 - Two City Scheduling (Medium)

## Problem Link

https://leetcode.com/problems/two-city-scheduling/

## Problem Statement

A company is planning to interview `2n` people. Given the array `costs` where `costs[i] = [aCosti, bCosti]`, the cost of flying the `ith` person to city `a` is `aCosti`, and the cost of flying the `ith` person to city `b` is `bCosti`.

Return _the minimum cost to fly every person to a city_ such that exactly `n` people arrive in each city.

**Example 1:**

```
Input: costs = [[10,20],[30,200],[400,50],[30,20]]
Output: 110
Explanation:
The first person goes to city A for a cost of 10.
The second person goes to city A for a cost of 30.
The third person goes to city B for a cost of 50.
The fourth person goes to city B for a cost of 20.

The total minimum cost is 10 + 30 + 50 + 20 = 110 to have half the people interviewing in each city.
```

**Example 2:**

```
Input: costs = [[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]]
Output: 1859
```

**Example 3:**

```
Input: costs = [[515,563],[451,713],[537,709],[343,819],[855,779],[457,60],[650,359],[631,42]]
Output: 3086
```

**Constraints:**

- `2 * n == costs.length`
- `2 <= costs.length <= 100`
- `costs.length` is even.
- `1 <= aCosti, bCosti <= 1000`

## Approach 1: Sorting + Greedy

If we need to spend more money to fly to city B, then it's better to send it to city A, and vice versa. Therefore, we sort the input by their difference (i.e. how much a company can save) and take the first $$n$$ to city A and the rest of them to city B.

```cpp
class Solution {
public:
    int twoCitySchedCost(vector<vector<int>>& costs) {
        int n = costs.size(), ans = 0;
        // sort by the diff
        sort(costs.begin(), costs.end(), [&](const vector<int>& x, const vector<int>& y) {
           return x[1] - x[0] > y[1] - y[0];
        });
        for (int i = 0; i < n / 2; i++) {
            // cost to fly i-th person to city A
            ans += costs[i][0];
            // cost to fly (n - 1 - i)-th person to city B
            ans += costs[n - 1 - i][1];
        }
        return ans;
    }
};
```
