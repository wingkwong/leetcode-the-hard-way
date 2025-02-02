---
description: 'Author: @wkw | https://leetcode.com/problems/longest-nice-subarray/'
tags: [Array, Bit Manipulation, Sliding Window]
---

# 2401 - Longest Nice Subarray (Medium)

## Problem Statement

You are given an array `nums` consisting of **positive** integers.

We call a subarray of `nums` **nice** if the bitwise **AND** of every pair of elements that are in **different** positions in the subarray is equal to `0`.

Return _the length of the **longest** nice subarray_.

A **subarray** is a **contiguous** part of an array.

**Note** that subarrays of length `1` are always considered nice.

**Example 1:**

```
Input: nums = [1,3,8,48,10]
Output: 3
Explanation: The longest nice subarray is [3,8,48]. This subarray satisfies the conditions:
- 3 AND 8 = 0.
- 3 AND 48 = 0.
- 8 AND 48 = 0.
It can be proven that no longer nice subarray can be obtained, so we return 3.
```

**Example 2:**

```
Input: nums = [3,1,5,11,13]
Output: 1
Explanation: The length of the longest nice subarray is 1. Any subarray of length 1 can be chosen.
```

**Constraints:**

- `1 <= nums.length <= 1e5`
- `1 <= nums[i] <= 10^9`

## Approach 1: Sliding Window + Bit Manipulation

<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    int longestNiceSubarray(vector<int>& nums) {
        // the observation is that each number has unique bits in the nice array
        // finding a subarray of something -> a hint to use sliding window
        int l = 0, n = nums.size(), x = 0, ans = 0;
        // iterate right pointer
        for (int r = 0; r < n; r++) {
            // x is the current AND value of current window at this point
            // now we want to include nums[r] in the window
            // however, if we include it, the current window may become not nice (i.e. x_new != 0)
            // therefore, in this case, we need to remove some bits using XOR,
            // i.e shrinking the window from the left
            while ((x & nums[r]) != 0) x ^= nums[l++];
            // here we are good to include nums[r], we use OR to set the bits
            x |= nums[r];
            // record the max length
            ans = max(ans, r - l + 1);
        }
        return ans;
    }
};
```
