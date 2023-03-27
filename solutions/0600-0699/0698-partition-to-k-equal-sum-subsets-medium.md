---
description: 'Author: @wingkwong | https://leetcode.com/problems/partition-to-k-equal-sum-subsets/'
tags: [Array, Dynamic Programming, Backtracking, Bit Manipulation, Memoization, Bitmask]
---

# 0698 - Partition to K Equal Sum Subsets (Medium) 

## Problem Link

https://leetcode.com/problems/partition-to-k-equal-sum-subsets/

## Problem Statement

Given an integer array `nums` and an integer `k`, return `true` if it is possible to divide this array into `k` non-empty subsets whose sums are all equal.

**Example 1:**

```
Input: nums = [4,3,2,3,5,2,1], k = 4
Output: true
Explanation: It is possible to divide it into 4 subsets (5), (1, 4), (2,3), (2,3) with equal sums.
```

**Example 2:**

```
Input: nums = [1,2,3,4], k = 3
Output: false
```

**Constraints:**

- `1 <= k <= nums.length <= 16`
- `1 <= nums[i] <= 104`
- The frequency of each element is in the range `[1, 4]`.

## Approach 1: DP

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    bool canPartitionKSubsets(vector<int>& nums, int k) {
        int n = nums.size();
        int sum = accumulate(nums.begin(), nums.end(), 0);
        // if we divide nums into k subsets with equal sum,
        // then the sum must be divided by k
        // also each subset requires at least 1 element
        if (n < k || sum % k) return false;
        // we need sum / k for each subset
        int target = sum / k;
        // bitmask dp
        vector<int> dp(1 << n, -1);
        // base case
        dp[0] = 0;
        for (int mask = 0; mask < (1 << n); mask++) {
            // if this mask not used, skip it
            if (dp[mask] == -1) continue;
            // iterate each number
            for (int i = 0; i < n; i++) {
                // if this number is not used, 
                // then include it if dp[mask] + nums[i] is less than or equal to target
                if (!(mask & (1 << i)) && dp[mask] + nums[i] <= target) {
                    // set the i-th bit on mask on dp since we include the i-th number
                    dp[mask | (1 << i)] = (dp[mask] + nums[i]) % target;
                }
            }
        }
        return dp[(1 << n) - 1] == 0;
    }
};
```

</TabItem>

<TabItem value="py" label="Python">
<SolutionAuthor name="@wingkwong"/>

```py
class Solution:
    def canPartitionKSubsets(self, nums: List[int], k: int) -> bool:
        n = len(nums)
        s = sum(nums)
        # if we divide nums into k subsets with equal sum,
        # then the sum must be divided by k
        # also each subset requires at least 1 element
        if n < k or s % k: return False
        # we need sum / k for each subset
        target = s / k
        # bitmask dp
        dp = [-1] * (1 << n)
        # base case
        dp[0] = 0
        for mask in range(1 << n):
            # if this mask not used, skip it
            if dp[mask] == -1: continue
            # iterate each number
            for i in range(n):
                # if this number is not used, 
                # then include it if dp[mask] + nums[i] is less than or equal to target
                if not ((1 << i) & mask) and dp[mask] + nums[i] <= target:
                    # set the i-th bit on mask on dp since we include the i-th number
                    dp[(1 << i) | mask] = (dp[mask] + nums[i]) % target
        return dp[(1 << n) - 1] == 0
```

</TabItem>
</Tabs>