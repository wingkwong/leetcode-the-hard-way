---
description: 'Author: @wkw | https://leetcode.com/problems/subarray-product-less-than-k/'
tags: [Array, Sliding Window]
---

# 0713 - Subarray Product Less Than K (Medium)

## Problem Link

https://leetcode.com/problems/subarray-product-less-than-k/

## Problem Statement

Given an array of integers `nums` and an integer `k`, return _the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than_`k`.

**Example 1:**

```
Input: nums = [10,5,2,6], k = 100
Output: 8
Explanation: The 8 subarrays that have product less than 100 are:
[10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
```

**Example 2:**

```
Input: nums = [1,2,3], k = 0
Output: 0
```

**Constraints:**

- `1 <= nums.length <= 3 * 10^4`
- `1 <= nums[i] <= 1000`
- `0 <= k <= 10^6`

## Approach 1: Sliding Window

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    int numSubarrayProductLessThanK(vector<int>& nums, int k) {
        // edge case
        if (k <= 1) return 0;
        int n = nums.size(), p = 1, ans = 0, i = 0;
        // standard sliding window
        for (int j = 0; j < n; j++){
            // step 1: expand the window
            p *= nums[j];
            // step 2: shrink the window if applicable
            while (p >= k) p /= nums[i++];
            // step 3: add the window size to answer
            ans += j - i + 1;
        }
        return ans;
    }
};
```

</TabItem>
</Tabs>
