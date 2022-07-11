---
description: >-
  Author: @SkollRyu |
  https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/
---

import SolutionAuthor from '@site/src/components/SolutionAuthor';

# 1011 - Capacity to Ship Packages within d days (Medium)

## Problem Link

https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/c

## Problem Statement

// This part will be handled by the owner @wingkwong. Contributors can leave it blank.

## Approach 1: Binary Seach

Prerequisite: [Binary Search](../../tutorials/basic-topics/binary-search)

We set the boundary from the largest package weight to the sum of the packages' weights. In each round, we try the middle value (ship capacity) $$m = l + ((r - l) / 2)$$ with the function $$count_days$$. This helper function helps us to count how many days are needed to ship packages with specific capacity (middle value). If the $$days_needed$$ is less than $$days$$, it means the ship capacity is too large and we need to reduce it, then move the right pointer to $$m$$, else move the left pointer to $$m + 1$$. At the end, the index would be $$l$$.

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
