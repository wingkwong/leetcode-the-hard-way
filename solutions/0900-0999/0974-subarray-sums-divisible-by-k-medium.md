---
description: 'Author: @wingkwong | https://leetcode.com/problems/subarray-sums-divisible-by-k/'
tags: [Array, Hash Table, Prefix Sum]
---

# 0974 - Subarray Sums Divisible by K (Medium) 

## Problem Statement

Given an integer array `nums` and an integer `k`, return *the number of non-empty **subarrays** that have a sum divisible by*`k`.

A **subarray** is a **contiguous** part of an array.

**Example 1:**

```
Input: nums = [4,5,0,-2,-3,1], k = 5
Output: 7
Explanation: There are 7 subarrays with a sum divisible by k = 5:
[4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]
```

**Example 2:**

```
Input: nums = [5], k = 9
Output: 0
```

**Constraints:**

- `1 <= nums.length <= 3 * 10^4`
- `-104 <= nums[i] <= 10^4`
- `2 <= k <= 10^4`

## Approach 1: Hash Map + Prefix Sum

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    vector<int> generatePrefixSum(vector<int>& a) {
        int n = a.size();
        vector<int> pref(n);
        pref[0] = a[0];
        for (int i = 1; i < n; i++) pref[i] = pref[i - 1] + a[i];
        return pref;
    }

    int subarraysDivByK(vector<int>& nums, int k) {
        // generate prefix sum
        vector<int> pref = generatePrefixSum(nums);
        // store the modular cnt
        vector<int> m(k);
        // base value
        m[0] = 1;
        // init ans
        int ans = 0;
        // iterate each sum
        for (auto& x : pref) {
            // if x is negative, turn it to positive modular equivalent
            if (x < 0) x = (x % k + k) % k;
            // we need to find pairs such that (pref[j] - pref[i]) % k == 0
            // hence, we look for pref[j] % k == pref[i] % k
            // proof ..? 
            // pref[j] = a * k + x
            // pref[i] = b * k + y
            // pref[j] - pref[i] = (a * k + x) - (b * k + y)
            // pref[j] - pref[i] = k * (a - b) + (x - y)
            // -> (pref[j] - pref[i]) % k == 0 if & only if (x - y) == 0
            m[x % k]++;
        }
        // n choose 2
        for (auto& x : m) ans += x * (x - 1) / 2;
        return ans;
    }
};
```