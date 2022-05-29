---
title: 'Binary Search'
description: 'Binary search is the searching strategy that reduces the search space by half every iteration until you have found the target.'
hide_table_of_contents: true
keywords:
  - leetcode
  - tutorial
  - binary search
  - algorithm
---

> This tutorial is written by @heiheihang

We have all played a game to guess a number from 1 to 100. The optimal approach to this game is actually binary search. Binary search is the searching strategy that reduces the search space by half every iteration until you have found the target.

Let's look at the most basic form of binary search:

> Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write a function to search `target` in `nums`. If `target` exists, then return its index. Otherwise, return `-1`.
>
> You must write an algorithm with `O(log n)` runtime complexity.

For example, given the sorted input:

```python
nums = [-1,0,3,5,9,12], target = 9
```

The index of the element 9 is 4. We can use the following template to find the target

```python
def binarySearch(nums, target):
    
    lp = 0
    rp = len(nums) - 1
    
    while(lp <= rp):
        mid = (lp + rp) // 2
        if(nums[mid] == target):
            return mid
        elif(nums[mid] < target):
            lp = mid + 1
        else:
            rp = mid - 1
    return -1
    
```

There can be very challenging questions using binary search, but we should focus on the basic application first.
