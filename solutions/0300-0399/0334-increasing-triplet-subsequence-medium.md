---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/increasing-triplet-subsequence/
---

# 0334 - Increasing Triplet Subsequence (Medium)

## Problem Link

https://leetcode.com/problems/increasing-triplet-subsequence/

## Problem Statement

Given an integer array `nums`, return `true` _if there exists a triple of indices_ `(i, j, k)` _such that_ `i < j < k` _and_ `nums[i] < nums[j] < nums[k]`. If no such indices exists, return `false`.


**Example 1:**

```
Input: nums = [1,2,3,4,5]
Output: true
Explanation: Any triplet where i < j < k is valid.
```

**Example 2:**

```
Input: nums = [5,4,3,2,1]
Output: false
Explanation: No triplet exists.
```

**Example 3:**

```
Input: nums = [2,1,5,0,4,6]
Output: true
Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.
```

**Constraints:**

* `1 <= nums.length <= 5 * 10^5`
* `-2^31 <= nums[i] <= 2^31 - 1`

**Follow up:** Could you implement a solution that runs in `O(n)` time complexity and `O(1)` space complexity?

## Approach 1: Greedy

Find the first two smallest numbers. If there is a number greater than them, then we can return true. Otherwise, return false at the end.

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    bool increasingTriplet(vector<int>& nums) {
        int first = INT_MAX, second = INT_MAX;
        for (auto x : nums) {
            // update the first smallest number
            if (x <= first) first = x;
            // update the second smallest number
            else if (x <= second) second = x;
            // x > first && x > second -> found the answer
            else return true;
        }
        return false;
    }
};
```
