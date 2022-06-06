---
description: 'Author: @wingkwong | https://leetcode.com/problems/continuous-subarray-sum/'
---

import Authors from '@site/src/components/Authors';

# 0523 - Continuous Subarray Sum (Medium)

## Problem Link

https://leetcode.com/problems/continuous-subarray-sum/

## Problem Statement

Given an integer array `nums` and an integer `k`, return `true` _if_ `nums` _has a continuous subarray of size **at least two** whose elements sum up to a multiple of_ `k`_, or_ `false` _otherwise_.

An integer `x` is a multiple of `k` if there exists an integer `n` such that `x = n * k`. `0` is **always** a multiple of `k`.

**Example 1:**

```
Input: nums = [23,2,4,6,7], k = 6
Output: true
Explanation: [2, 4] is a continuous subarray of size 2 whose elements sum up to 6.
```

**Example 2:**

```
Input: nums = [23,2,6,4,7], k = 6
Output: true
Explanation: [23, 2, 6, 4, 7] is an continuous subarray of size 5 whose elements sum up to 42.
42 is a multiple of 6 because 42 = 7 * 6 and 7 is an integer.
```

**Example 3:**

```
Input: nums = [23,2,6,4,7], k = 13
Output: false
```

**Constraints:**

* `1 <= nums.length <= 10^5`
* `0 <= nums[i] <= 10^9`
* `0 <= sum(nums[i]) <= 2^31 - 1`
* `1 <= k <= 2^31 - 1`

## Approach 1: Hash + Prefix Sum

A continuous subarray sum can be represented as $$sum_j - sum_i$$ where $$sum_j$$ is the prefix sum till index $$j$$ and $$sum_i$$ is the prefix sum till index $$i$$. We are looking for the subarray sum which can be divisible by $$k$$. That means $$(sum_j - sum_i) \% k == 0$$. We can further rewrite as $$sum_j \% k - sum_i \% k== 0$$ and got $$sum_j \% k == sum_i \% k$$.

Therefore, we can calculate the prefix sum and store its remainder to a hash map. If we see the same remainder in the hash map, we need to make sure that the length is at least $$2$$. If so, we can return true.

<Authors names="@wingkwong"/>

```cpp
class Solution {
public:
    bool checkSubarraySum(vector<int>& nums, int k) {
        int n = nums.size();
        if (n == 1) return false;
        // hash map to store the remainders
        unordered_map<int, int> mod {{0, -1}};
        int sum = 0, remainder;
        for (int i = 0; i < n; i++) {
            // prefix sum
            sum += nums[i];
            // calculate the remainder
            remainder = sum % k; 
            if (mod.count(remainder)) {
                // if remainder exists in hash map
                // check the length
                if (i - mod[remainder] >= 2) return true;
            } else {
                // mark the current index to hash map
                mod[remainder] = i;
            }
        }
        return false;
    }
};
```
