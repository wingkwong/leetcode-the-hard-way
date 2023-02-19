---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/sum-of-unique-elements/
tags: ['Hash Map']
---

# 1748 - Sum of Unique Elements (Easy)

## Problem Link

https://leetcode.com/problems/sum-of-unique-elements/

## Problem Statement

You are given an integer array `nums`. The unique elements of an array are the elements that appear **exactly once** in the array.

Return _the **sum** of all the unique elements of_ `nums`.

**Example 1:**

```
Input: nums = [1,2,3,2]
Output: 4
Explanation: The unique elements are [1,3], and the sum is 4.
```

**Example 2:**

```
Input: nums = [1,1,1,1,1]
Output: 0
Explanation: There are no unique elements, and the sum is 0.
```

**Example 3:**

```
Input: nums = [1,2,3,4,5]
Output: 15
Explanation: The unique elements are [1,2,3,4,5], and the sum is 15.
```

**Constraints:**

* `1 <= nums.length <= 100`
* `1 <= nums[i] <= 100`

## Approach 1: Hash Map

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int sumOfUnique(vector<int>& nums) {
        unordered_map<int, int> m;
        int ans = 0;
        // use hash map to count the frequency of each number
        for(int x : nums) m[x]++;
        // unique number would have frequency of 1
        for(auto x : m) {
            if(x.second == 1) {
                ans += x.first;
            }
        }
        return ans;
    }
};
```