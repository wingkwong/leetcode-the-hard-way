---
description: 'Author: @wingkwong | https://leetcode.com/problems/binary-search/'
---

# 0704 - Binary Search (Easy)

## Problem Link

https://leetcode.com/problems/binary-search/

## Problem Statement

Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write a function to search `target` in `nums`. If `target` exists, then return its index. Otherwise, return `-1`.

You must write an algorithm with `O(log n)` runtime complexity.

**Example 1:**

```
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
```

**Example 2:**

```
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
```

**Constraints:**

* `1 <= nums.length <= 104`
* `-104 < nums[i], target < 104`
* All the integers in `nums` are **unique**.
* `nums` is sorted in ascending order.

## Approach 1: Binary Search

Prerequisite: [Binary Search](../../tutorials/basic-topics/binary-search)

We set the boundary from the first index to the last index of the array. In each round, we try the middle one $$m = l + (r - l + 1) / 2$$. The reason we add $$1$$ here is that we need to take the upper one if there are even number of elements. If the target is less than $$nums[m]$$, then move the right pointer to $$m - 1$$, else move the left pointer to $$m$$. At the end, if the target is found, the index would be $$l$$.

```cpp
class Solution {
public:
    int search(vector<int>& nums, int target) {
        // init possible boundary
        int n = nums.size(), l = 0, r = n - 1;
        while (l < r) {
            // get the middle one
            // for even number of elements, take the upper one
            int m = l + (r - l + 1) / 2;
            // exclude m
            if (target < nums[m]) r = m - 1;
            // include m
            else l = m;
        }
        return nums[l] == target ? l : -1;
    }
};
```

> How about taking the lower element if the number of elements is even?

Similarly, we set the boundary from the first index to the last index of the array. In each round, we try the middle one $$m = l + (r - l) / 2$$. If there are even number of elements, we take the lower one. If the target is greater than $$nums[m]$$, then move the left pointer to $$m + 1$$, else move the right pointer to $$m$$. At the end, if the target is found, the index would be $$l$$.

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int search(vector<int>& nums, int target) {
        // init possible boundary
        int n = nums.size(), l = 0, r = n - 1;
        while (l < r) {
            // get the middle one
            // for even number of elements, take the lower one
            int m = l + (r - l) / 2;
            // exclude m
            if (target > nums[m]) l = m + 1;
            // include m
            else r = m;
        }
        return nums[l] == target ? l : -1;
    }
};
```
