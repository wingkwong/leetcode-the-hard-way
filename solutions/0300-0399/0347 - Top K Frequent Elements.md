---
description: 'Author: @flow6979 | https://leetcode.com/problems/top-k-frequent-elements/'
---

# 0347 - Top K Frequent Elements(medium)

## Problem Link

https://leetcode.com/problems/top-k-frequent-elements/

## Problem Statement

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

**Example 1:**

```
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
```

**Example 2:**

```
Input: nums = [1], k = 1
Output: [1]
```

**Constraints:**

* 1 <= nums.length <= 105
* -104 <= nums[i] <= 104
* k is in the range [1, the number of unique elements in the array].
* It is guaranteed that the answer is unique.

## Approach 1:  bucket sort

<SolutionAuthor name="@flow6979"/>

```cpp
#include <bits/stdc++.h>

class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        unordered_map<int, int> m;
        for (int num : nums)
            ++m[num];
        
        vector<vector<int>> buckets(nums.size() + 1); 
        for (auto p : m)
            buckets[p.second].push_back(p.first);
        
        vector<int> ans;
        for (int i = buckets.size() - 1; i >= 0 && ans.size() < k; --i) {
            for (int num : buckets[i]) {
                ans.push_back(num);
                if (ans.size() == k)
                    break;
            }
        }
        return ans;
    }
};
```
