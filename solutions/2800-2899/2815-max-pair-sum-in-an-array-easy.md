---
description: 'Author: @wkw | https://leetcode.com/problems/max-pair-sum-in-an-array/'
tags: [Array, Hash Table]
---

# 2815 - Max Pair Sum in an Array (Easy)

## Problem Link

https://leetcode.com/problems/max-pair-sum-in-an-array/

## Problem Statement

You are given a **0-indexed** integer array `nums`. You have to find the **maximum** sum of a pair of numbers from `nums` such that the maximum **digit**in both numbers are equal.

Return _the maximum sum or_ `-1`_if no such pair exists_.

**Example 1:**

```
Input: nums = [51,71,17,24,42]
Output: 88
Explanation:
For i = 1 and j = 2, nums[i] and nums[j] have equal maximum digits with a pair sum of 71 + 17 = 88.
For i = 3 and j = 4, nums[i] and nums[j] have equal maximum digits with a pair sum of 24 + 42 = 66.
It can be shown that there are no other pairs with equal maximum digits, so the answer is 88.
```

**Example 2:**

```
Input: nums = [1,2,3,4]
Output: -1
Explanation: No pair exists in nums with equal maximum digits.
```

**Constraints:**

- `2 <= nums.length <= 100`
- `1 <= nums[i] <= 10^4`

## Approach 1: Brute Force

We brute force all the pairs and use `mx_ds` to find the maximum digits of $x$. If there is a pair $(i, j)$ that both maximum digits are same, then get the maximun sum of $nums[i] + nums[j]$.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    // get the max digit in `x`
    int mx_ds(int x) {
        int mx = 0;
        while (x > 0) {
            mx = max(mx, x % 10);
             x /= 10;
        }
        return mx;
    }

    int maxSum(vector<int>& nums) {
        int n = nums.size(), ans = -1;
        // brute-force all the pairs
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                // if both max digit are same
                if (mx_ds(nums[i]) == mx_ds(nums[j])) {
                    // track the max sum
                    ans = max(ans, nums[i] + nums[j]);
                }
            }
        }
        return ans;
    }
};
```

</TabItem>
</Tabs>
