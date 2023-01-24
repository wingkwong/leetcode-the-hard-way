---
description: 'Author: @wingkwong | https://leetcode.com/problems/find-all-good-indices/'
---

# 2420 - Find All Good Indices (Medium) 

## Problem Link

https://leetcode.com/problems/find-all-good-indices/

## Problem Statement

You are given a **0-indexed** integer array `nums` of size `n` and a positive integer `k`.

We call an index `i` in the range `k <= i < n - k` **good** if the following conditions are satisfied:

- The `k` elements that are just **before** the index `i` are in **non-increasing** order.
- The `k` elements that are just **after** the index `i` are in **non-decreasing** order.

Return *an array of all good indices sorted in **increasing** order*.

**Example 1:**

```
Input: nums = [2,1,1,1,3,4,1], k = 2
Output: [2,3]
Explanation: There are two good indices in the array:
- Index 2. The subarray [2,1] is in non-increasing order, and the subarray [1,3] is in non-decreasing order.
- Index 3. The subarray [1,1] is in non-increasing order, and the subarray [3,4] is in non-decreasing order.
Note that the index 4 is not good because [4,1] is not non-decreasing.
```

**Example 2:**

```
Input: nums = [2,1,1,2], k = 2
Output: []
Explanation: There are no good indices in this array.
```

**Constraints:**

- `n == nums.length`
- `3 <= n <= 105`
- `1 <= nums[i] <= 10^6`
- `1 <= k <= n / 2`

## Approach 1: Prefix & Suffix

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    vector<int> goodIndices(vector<int>& nums, int k) {
        int n = nums.size();
        // inc[i]: number of elements after the index i are in non-decreasing order
        // dec[i]: number of elements before the index i are in non-increasing order 
        vector<int> inc(n, 1), dec(n, 1);
        for (int i = 1; i < n; i++) {
            // if it's non-increasing, add 1 to the previous state
            if (nums[i - 1] >= nums[i]) dec[i] = dec[i - 1] + 1;
            // we don't need to reset to 1 as we init each as 1 at the beginning
        }
        for (int i = n - 2; ~i; i--) {
            // if it's non-decreasing, add 1 to the previous state
            if (nums[i + 1] >= nums[i]) inc[i] = inc[i + 1] + 1;
            // we don't need to reset to 1 as we init each as 1 at the beginning
        }
        vector<int> ans;
        // k <= i < n - k
        for (int i = k; i < n - k; i++) {
            // how many elements before the index i are in non-increasing order?
            // how many elements after the index i are in non-decreasing order?
            if (dec[i - 1] >= k && inc[i + 1] >= k) {
                ans.push_back(i);
            }
        }
        return ans;
    }
};
```

</TabItem>
</Tabs>