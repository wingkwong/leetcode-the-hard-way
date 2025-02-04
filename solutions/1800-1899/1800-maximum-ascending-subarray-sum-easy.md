---
description: >-
  Author: @wkw | https://leetcode.com/problems/maximum-ascending-subarray-sum/
---

# 1800 - Maximum Ascending Subarray Sum (Easy)

## Problem Link

https://leetcode.com/problems/maximum-ascending-subarray-sum/

## Problem Statement

Given an array of positive integers `nums`, return the _maximum possible sum of an **ascending** subarray in_ `nums`.

A subarray is defined as a contiguous sequence of numbers in an array.

A subarray `[numsl, numsl+1, ..., numsr-1, numsr]` is **ascending** if for all `i` where `l <= i < r`, `numsi < numsi+1`. Note that a subarray of size `1` is **ascending**.

**Example 1:**

```
Input: nums = [10,20,30,5,10,50]
Output: 65
Explanation: [5,10,50] is the ascending subarray with the maximum sum of 65.
```

**Example 2:**

```
Input: nums = [10,20,30,40,50]
Output: 150
Explanation: [10,20,30,40,50] is the ascending subarray with the maximum sum of 150.
```

**Example 3:**

```
Input: nums = [12,17,15,13,10,11,12]
Output: 33
Explanation: [10,11,12] is the ascending subarray with the maximum sum of 33.
```

**Constraints:**

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 100`

## Approach 1: One-Pass

Check each number starting from the second one to see if the current number is greater than the previous one or not. If so, add the current number to total sum and compare with the answer. Else we reset the sum as the current number.

<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    int maxAscendingSum(vector<int>& nums) {
        int n = nums.size(), sum = nums[0], ans = nums[0];
        for (int i = 1; i < n; i++) {
            // check if it's ascending
            if (nums[i] > nums[i - 1]) {
                // it's ascending -> add this number to sum
                sum += nums[i];
                // update ans
                ans = max(ans, sum);
            } else {
                // start a new ascending subarray
                // reset sum to nums[i]
                sum = nums[i];
            }
        }
        return ans;
    }
};
```
