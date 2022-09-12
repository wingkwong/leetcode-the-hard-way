---
description: 'Author: @wingkwong | https://leetcode.com/problems/find-the-duplicate-number/'
---

# 0287 - Find the Duplicate Number (Medium)

## Problem Link

https://leetcode.com/problems/find-the-duplicate-number/

## Problem Statement

Given an array of integers `nums` containing `n + 1` integers where each integer is in the range `[1, n]` inclusive.

There is only **one repeated number** in `nums`, return _this repeated number_.

You must solve the problem **without** modifying the array `nums` and uses only constant extra space.

**Example 1:**

```
Input: nums = [1,3,4,2,2]
Output: 2
```

**Example 2:**

```
Input: nums = [3,1,3,4,2]
Output: 3
```

**Constraints:**

* `1 <= n <= 10^5`
* `nums.length == n + 1`
* `1 <= nums[i] <= n`
* All the integers in `nums` appear only **once** except for **precisely one integer** which appears **two or more** times.

## Approach 1: Bit Masking

We iterate each bit one by one. We calculate the expected bit count and the actual bit count. If the actual one is greater than the expected one, then it means this bit is part of the duplicate number.

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int findDuplicate(vector<int>& nums) {
        int duplicate = 0, n = nums.size() - 1;
        // iterate each bit one by one
        for(int i = 0; i < 31; i++) {
            long expected = 0, actual = 0;
            // the integer range [1, n] inclusive
            // iterate each integer to calculate the expected bit count
            for(int j = 1; j <= n; j++) expected += (1 << i) & j;
            // iterate each number to calculate the actual bit count
            for(int j : nums) actual += (1 << i) & j;
            // if actual one is greater than the expected one
            // then this bit is part of the duplicate number
            if(actual > expected) duplicate |= (1 << i);
        }
        return duplicate;
    }
};
```
