---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/
---

import SolutionAuthor from '@site/src/components/SolutionAuthor';

# 2148 - Count Elements With Strictly Smaller and Greater Elements (Easy)

## Problem Link

https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/

## Problem Statement

Given an integer array `nums`, return _the number of elements that have **both** a strictly smaller and a strictly greater element appear in_ `nums`.

**Example 1:**

```
Input: nums = [11,7,2,15]
Output: 2
Explanation: The element 7 has the element 2 strictly smaller than it and the element 11 strictly greater than it.
Element 11 has element 7 strictly smaller than it and element 15 strictly greater than it.
In total there are 2 elements having both a strictly smaller and a strictly greater element appear in nums.
```

**Example 2:**

```
Input: nums = [-3,3,3,90]
Output: 2
Explanation: The element 3 has the element -3 strictly smaller than it and the element 90 strictly greater than it.
Since there are two elements with the value 3, in total there are 2 elements having both a strictly smaller and a strictly greater element appear in nums.
```

**Constraints:**

* `1 <= nums.length <= 100`
* `-10^5 <= nums[i] <= 10^5`

## Approach 1: Sorting

The order doesn't matter. We can sort the array and only focus on all elements except the first one and the last one because those two elements won't have strictly smaller and greater elements at the same time. From `nums[1..n - 2]`, we can check if the element is greater than the smallest one and smaller than the greatest one.

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int countElements(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        int ans = 0;
        for (int i = 1; i < nums.size() - 1; i++) {
            ans += nums[i] > nums.front() && nums[i] < nums.back();
        }
        return ans;
    }
};
```

