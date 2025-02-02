---
description: 'Author: @wkw | https://leetcode.com/problems/single-element-in-a-sorted-array/'
tags: [Array, Binary Search]
---

# 0540 - Single Element in a Sorted Array (Medium)

## Problem Statement

You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

Return _the single element that appears only once_.

Your solution must run in `O(log n)` time and `O(1)` space.

**Example 1:**

```
Input: nums = [1,1,2,3,3,4,4,8,8]
Output: 2
```

**Example 2:**

```
Input: nums = [3,3,7,7,10,11,11]
Output: 10
```

**Constraints:**

- `1 <= nums.length <= 105`
- `0 <= nums[i] <= 105`

## Approach 1: Binary Search

<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    int singleNonDuplicate(vector<int>& nums) {
        // init possible boundary
        int n = nums.size(), l = 0, r = n - 1;
        while (l < r) {
            // get the middle one
            // for even number of elements, take the lower one
            int m = l + (r - l) / 2;
            // handle case like [3,3,7,7,10,11,11]
             m -= m & 1;
            // exclude m
            if (nums[m] == nums[m + 1]) l = m + 2;
            // include m
            else r = m;
        }
        return nums[l];
    }
};
```
