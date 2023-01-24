---
description: >-
  Author: @SkollRyu |
  https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/
---

# 1011 - Capacity to Ship Packages within d days (Medium)

## Problem Link

https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/

## Problem Statement

A conveyor belt has packages that must be shipped from one port to another within `days` days.

The `ith` package on the conveyor belt has a weight of `weights[i]`. Each day, we load the ship with packages on the conveyor belt (in the order given by `weights`). We may not load more weight than the maximum weight capacity of the ship.

Return the least weight capacity of the ship that will result in all the packages on the conveyor belt being shipped within `days` days.

**Example 1:**

```
Input: weights = [1,2,3,4,5,6,7,8,9,10], days = 5
Output: 15
Explanation: A ship capacity of 15 is the minimum to ship all the packages in 5 days like this:
1st day: 1, 2, 3, 4, 5
2nd day: 6, 7
3rd day: 8
4th day: 9
5th day: 10

Note that the cargo must be shipped in the order given, so using a ship of capacity 14 and splitting the packages into parts like (2, 3, 4, 5), (1, 6, 7), (8), (9), (10) is not allowed.
```

**Example 2:**

```
Input: weights = [3,2,2,4,1,4], days = 3
Output: 6
Explanation: A ship capacity of 6 is the minimum to ship all the packages in 3 days like this:
1st day: 3, 2
2nd day: 2, 4
3rd day: 1, 4
```

**Example 3:**

```
Input: weights = [1,2,3,1,1], days = 4
Output: 3
Explanation:
1st day: 1
2nd day: 2
3rd day: 3
4th day: 1, 1
```

**Constraints:**

* `1 <= days <= weights.length <= 5 * 10^4`
* `1 <= weights[i] <= 500`

## Approach 1: Binary Seach

:::info Prerequisite

- [Binary Tree](../../tutorials/graph-theory/binary-tree)

:::

We set the boundary from the largest package weight to the sum of the packages' weights. In each round, we try the middle value (ship capacity) $$m = l + ((r - l) / 2)$$ with the function $$count_days$$. This helper function helps us to count how many days are needed to ship packages with specific capacity (middle value). If the `days_needed` is less than `days`, it means the ship capacity is too large and we need to reduce it, then move the right pointer to $$m$$, else move the left pointer to $$m + 1$$. At the end, the index would be $$l$$.

<SolutionAuthor name="@SkollRyu"/>

```python
class Solution:
    def shipWithinDays(self, weights: List[int], days: int) -> int:
        def count_days(target_cap):
            curr = 0
            days_needed = 1
            # day starts from 1st
            
            for weight in weights:
                if weight + curr > target_cap:
                    days_needed += 1
                    curr = 0
                curr += weight
            
            return days_needed
            
        l = max(weights)     
        r = sum(weights)
        # if days = 1, the capacity needed is the sum of weights
        
        while l < r:
            mid  = l + ((r-l) // 2)
            days_needed = count_days(mid)
            if days_needed <= days:
                # it means the capacity is too large
                # so we finish the shipping too eailer
                r = mid
            else:
                l = mid + 1
        
        return l
```
