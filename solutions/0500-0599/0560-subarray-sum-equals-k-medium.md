---
description: 'Author: @wingkwong | https://leetcode.com/problems/subarray-sum-equals-k/'
---

import SolutionAuthor from '@site/src/components/SolutionAuthor';

# 0560 - Subarray Sum Equals K (Medium)

## Problem Link

https://leetcode.com/problems/subarray-sum-equals-k/

## Problem Statement

Given an array of integers `nums` and an integer `k`, return _the total number of continuous subarrays whose sum equals to `k`_.

**Example 1:**

```
Input: nums = [1,1,1], k = 2
Output: 2
```

**Example 2:**

```
Input: nums = [1,2,3], k = 3
Output: 2
```

**Constraints:**

* `1 <= nums.length <= 2 * 10^4`
* `-1000 <= nums[i] <= 1000`
* `-10^7 <= k <= 10^7`

## Approach 1: Hash Map

We use hash map to store the cumulative sum $$sum[i]$$ up to index $$i$$. If $$sum[i] - sum[j] = k$$, then it means the sum between indices $$i$$ and $$j$$ is $$k$$. Therefore, we store the cumulative sum, search for $$sum - k$$ in the hash map and add the occurrences if it is found to the answer.

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int subarraySum(vector<int>& nums, int k) {
        unordered_map<int, int> m;
        m[0]++;
        int sum = 0, ans = 0;
        for (int i = 0; i < nums.size(); i++) {
            sum += nums[i];
            ans += m[sum - k];
            m[sum]++;
        }
        return ans;
    }
};
```
