---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/shortest-unsorted-continuous-subarray/
---

# 0581 - Shortest Unsorted Continuous Subarray (Medium)

## Problem Link

https://leetcode.com/problems/shortest-unsorted-continuous-subarray/

## Problem Statement

Given an integer array `nums`, you need to find one **continuous subarray** that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order.

Return _the shortest such subarray and output its length_.

**Example 1:**

```
Input: nums = [2,6,4,8,10,9,15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
```

**Example 2:**

```
Input: nums = [1,2,3,4]
Output: 0
```

**Example 3:**

```
Input: nums = [1]
Output: 0
```

**Constraints:**

* `1 <= nums.length <= 10^4`
* `-105 <= nums[i] <= 10^5`

## Approach 1: Sort

If the input is sorted, then return $$0$$.

Otherwise, we compare the input with the sorted version to check the first difference $$l$$ and the last difference $$r$$. The answer will be $$r - l + 1$$.

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int findUnsortedSubarray(vector<int>& nums) {
        vector<int> v = nums;
        // sort the cloned input
        sort(v.begin(), v.end());
        // if it is sorted, then return 0
        if (v == nums) return 0;
        // assuming it must have the answer
        int l = -1, r = -1;
        for (int i = 0; i < nums.size(); i++) {
            // find the first index of the difference
            if (l == -1 && v[i] != nums[i]) l = i;
            // find the last index of the difference
            if (v[i] != nums[i]) r = i;
        }
        // output the length
        return r - l + 1;
    }
};
```

Same idea but search from both side.

```cpp
class Solution {
public:
    int findUnsortedSubarray(vector<int>& nums) {
        vector<int> v = nums;
        sort(nums.begin(), nums.end());
        int n = nums.size(), i = 0, j = n - 1;
        while (i < n && nums[i] == v[i]) i++;
        while (j > i && nums[j] == v[j]) j--;
        return j - i + 1;
    }
};
```
