---
description: 'Author: @wingkwong | https://leetcode.com/problems/monotonic-array/'
tags: [Array]
---

# 0896 - Monotonic Array (Easy) 

## Problem Statement

An array is **monotonic** if it is either monotone increasing or monotone decreasing.

An array `nums` is monotone increasing if for all `i <= j`, `nums[i] <= nums[j]`. An array `nums` is monotone decreasing if for all `i <= j`, `nums[i] >= nums[j]`.

Given an integer array `nums`, return `true`*if the given array is monotonic, or*`false`*otherwise*.

**Example 1:**

```
Input: nums = [1,2,2,3]
Output: true
```

**Example 2:**

```
Input: nums = [6,5,4,4]
Output: true
```

**Example 3:**

```
Input: nums = [1,3,2]
Output: false
```

**Constraints:**

- `1 <= nums.length <= 10^5`
- `-10^5 <= nums[i] <= 10^5`

## Approach 1: Two Loops

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    bool isMonotonic(vector<int>& nums) {
        int n = nums.size(), ok = 1;
        // check for monotone increasing
        for (int i = 1 ; i < n; i++) ok &= nums[i - 1] <= nums[i];
        // if it is monotone increasing, return true
        if (ok) return true;
        // reset ok
        ok = 1;
        // check for monotone decreasing
        for (int i = n - 2; i >= 0; i--) ok &= nums[i] >= nums[i + 1];
        // return the answer
        return ok;
    }
};
```

## Approach 2: One Pass

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    bool isMonotonic(vector<int>& nums) {
        int n = nums.size(), inc = 1, dec = 1;
        for (int i = 1 ; i < n; i++) {
            // check for monotone increasing
            inc &= nums[i - 1] <= nums[i];
            // check for monotone decreasing
            dec &= nums[i - 1] >= nums[i]; 
        }
        // the given is monotonic if either one is true
        return inc || dec;
    }
};
```