---
description: >-
  Author: @wkw | https://leetcode.com/problems/subarrays-with-k-different-integers/


tags: [Array, Hash Table, Sliding Window, Counting]
---

# 0992 - Subarrays with K Different Integers (Hard)

## Problem Link

https://leetcode.com/problems/subarrays-with-k-different-integers/

## Problem Statement

Given an integer array `nums` and an integer `k`, return _the number of **good subarrays** of_ `nums`.

A **good array** is an array where the number of different integers in that array is exactly `k`.

- For example, `[1,2,3,1,2]` has `3` different integers: `1`, `2`, and `3`.

A **subarray** is a **contiguous** part of an array.

**Example 1:**

```
Input: nums = [1,2,1,2,3], k = 2
Output: 7
Explanation: Subarrays formed with exactly 2 different integers: [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2]
```

**Example 2:**

```
Input: nums = [1,2,1,3,4], k = 3
Output: 3
Explanation: Subarrays formed with exactly 3 different integers: [1,2,1,3], [2,1,3], [1,3,4].
```

**Constraints:**

- `1 <= nums.length <= 2 * 10^4`
- `1 <= nums[i], k <= nums.length`

## Approach 1: Sliding Window

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    int atMost(vector<int>& nums, int k) {
        // standard sliding window pattern
        int n = nums.size(), i = 0, ans = 0;
        unordered_map<int, int> m;
        for (int j = 0; j < n; j++) {
            // step 1: make the condition invalid
            k -= !m[nums[j]]++;
            // step 2: if the condition is failed,
            // it means we need to shrink the window
            // by adding k to make the condition valid
            while(k < 0) k += !(--m[nums[i++]]);
            // step 3: add the distance to ans
            ans += j - i + 1;
        }
        return ans;
    }

    int subarraysWithKDistinct(vector<int>& nums, int k) {
        // exactky k = at most k - at most (k - 1)
        return atMost(nums, k) - atMost(nums, k - 1);
    }
};
```

</TabItem>
</Tabs>
