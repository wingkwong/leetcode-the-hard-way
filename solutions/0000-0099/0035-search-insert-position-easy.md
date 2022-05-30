---
description: 'Author: @wingkwong | https://leetcode.com/problems/search-insert-position/'
---

# 0035 - Search Insert Position (Easy)

## Problem Statement

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with `O(log n)` runtime complexity.



**Example 1:**

```
Input: nums = [1,3,5,6], target = 5
Output: 2
```

**Example 2:**

```
Input: nums = [1,3,5,6], target = 2
Output: 1
```

**Example 3:**

```
Input: nums = [1,3,5,6], target = 7
Output: 4
```

**Constraints:**

* `1 <= nums.length <= 10^4`
* `-104 <= nums[i] <= 10^4`
* `nums` contains **distinct** values sorted in **ascending** order.
* `-104 <= target <= 10^4`

## Approach 1: Lower Bound

We can use STL to get the answer. lower\_bound returns the first element which has a value not less than target. We need to subtract `nums.begin()` to get the index.

```cpp
class Solution {
public:
    int searchInsert(vector<int>& nums, int target) {
        return lower_bound(nums.begin(), nums.end(), target) - nums.begin();
    }
};
```

## Approach 2: Binary Search

Prerequisite: [Binary Search](../../tutorials/basic-topics/binary-search).

```cpp
class Solution {
public:
    int searchInsert(vector<int>& nums, int target) {
        // init the possible range
        // as we insert at the end of the array, 
        // use nums.size() instead of nums.size() - 1
        int l = 0, r = nums.size();
        while (l < r) {
            // take the lower mid for even elements
            int m = l + (r - l) / 2;
            // exclude m
            if (target > nums[m]) l = m + 1;
            // include m
            else r = m;
        }
        return l;
    }
};
```
