---
description: 'Author: @wingkwong | https://leetcode.com/problems/k-diff-pairs-in-an-array/'
---

# 0532 - K-diff Pairs in an Array (Medium)

## Problem Statement

Given an array of integers `nums` and an integer `k`, return _the number of **unique** k-diff pairs in the array_.

A **k-diff** pair is an integer pair `(nums[i], nums[j])`, where the following are true:

* `0 <= i < j < nums.length`
* `|nums[i] - nums[j]| == k`

**Notice** that `|val|` denotes the absolute value of `val`.&#x20;

**Example 1:**

```
Input: nums = [3,1,4,1,5], k = 2
Output: 2
Explanation: There are two 2-diff pairs in the array, (1, 3) and (3, 5).
Although we have two 1s in the input, we should only return the number of unique pairs.
```

**Example 2:**

```
Input: nums = [1,2,3,4,5], k = 1
Output: 4
Explanation: There are four 1-diff pairs in the array, (1, 2), (2, 3), (3, 4) and (4, 5).
```

**Example 3:**

```
Input: nums = [1,3,1,5,4], k = 0
Output: 1
Explanation: There is one 0-diff pair in the array, (1, 1).
```

**Constraints:**

* `1 <= nums.length <= 10^4`
* `-10^7 <= nums[i] <= 10^7`
* `0 <= k <= 10^7`

## Approach 1: Hash Map

Let's build a frequency hash map $$m$$. The key $$x$$ is each unique number and the value $$y$$ is the occurrence of that number. For example, for input $$[1,3,1,5,4]$$, we will have the following $$(x, y)$$:&#x20;

| key | value |
| --- | ----- |
| 1   | 2     |
| 3   | 1     |
| 4   | 1     |
| 5   | 1     |

We iterate $$m$$ to check each $$(x, y)$$. There are two cases:

1. If $$k$$ is $$0$$, that means $$nums[i] == nums[j]$$, so we need at least two occurrences of that number.
2. If $$k$$is greater than $$0$$, then we need to check if the complement $$x + k$$ exists in hash map or not.

```cpp
class Solution {
public:
    int findPairs(vector<int>& nums, int k) {
        unordered_map<int, int> m;
        int ans = 0;
        for (auto x : nums) m[x]++;
        for (auto x : m) {
            // if k = 0, the element in the pair must be equal
            // if k > 0, check if b = a + k exists
            ans += (!k && x.second > 1) || (k && m.count(x.first + k));
        }
        return ans;
    }
};
```
