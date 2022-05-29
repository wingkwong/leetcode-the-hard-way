---
description: 'Author: @wingkwong| https://leetcode.com/problems/max-consecutive-ones-iii/'
---

# 1004 - Max Consecutive Ones III (Medium)

## Problem Statement

Given a binary array `nums` and an integer `k`, return _the maximum number of consecutive_ `1`_'s in the array if you can flip at most_ `k` `0`'s.

**Example 1:**

```
Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
```

**Example 2:**

```
Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
```

**Constraints:**

* `1 <= nums.length <= 10^5`
* `nums[i]` is either `0` or `1`.
* `0 <= k <= nums.length`

## Approach 1: Sliding Window

We are looking for the longest subarray with $$k$$ zeros. We can use standard sliding windows to solve it.

```cpp
class Solution {
public:
    int longestOnes(vector<int>& nums, int k) {
        // pointer i = window starting point
        // pointer j = window ending point
        int n = nums.size(), ans = 0, i = 0, j = 0;
        while (j < n) {
            // if it is 0, then decrease k by 1
            if (nums[j] == 0) k -= 1;
            // k < 0 means the window includes k zeros
            if (k < 0) {
                // if the starting point of the window is 0,
                // then add 1 to k to reduce the window size by 1 
                if (nums[i] == 0) k++;
                // move pointer i
                i++;
            }
            // move pointer j
            j++;
        }
        return j - i;
    }
};c
```
