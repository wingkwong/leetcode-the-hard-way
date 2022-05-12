---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/subarrays-with-k-different-integers/
---

# 0992 - Subarrays with K Different Integers (Hard)

## Problem Statement

Given an integer array `nums` and an integer `k`, return _the number of **good subarrays** of_ `nums`.

A **good array** is an array where the number of different integers in that array is exactly `k`.

* For example, `[1,2,3,1,2]` has `3` different integers: `1`, `2`, and `3`.

A **subarray** is a **contiguous** part of an array.

**Example 1:**

```
Input: nums = [1,2,1,2,3], k = 2
Output: 7
Explanation: Subarrays formed with exactly 2 different integers: [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2]
```

**Example 2:**

```
Input: nums = [1,2,1,3,4], k = 3
Output: 3
Explanation: Subarrays formed with exactly 3 different integers: [1,2,1,3], [2,1,3], [1,3,4].
```

**Constraints:**

* `1 <= nums.length <= 2 * 10^4`
* `1 <= nums[i], k <= nums.length`

## Approach 1: Sliding Window

```cpp
class Solution {
public:
    // sliding window
    int go(vector<int>& nums, int k) {
        // count the frequency for each number
        unordered_map<int, int> cnt;
        int l = 0, res = 0;
        for (int r = 0; r < nums.size(); r++) {
            // if nums[r] doesn't exist, we subtract k by 1
            // update cnt[nums[r]]
            if (!cnt[nums[r]]++) k -= 1;
            // while k < 0, we need to pop the leftmost element out
            // if we remove nums[l] and its frequency is 0
            // then we can include other integer so we increase k by 1
            while (k < 0) {
                if (!--cnt[nums[l]]) k += 1;
                l++;
            }
            // add the current range to ans
            res += r - l + 1;
        }
        return res;
    }
    
    int subarraysWithKDistinct(vector<int>& nums, int k) {
        // exactly k differences = 
        // at most k differences - at most k - 1 differences
        return go(nums, k) - go(nums, k - 1);
    }
};
```
