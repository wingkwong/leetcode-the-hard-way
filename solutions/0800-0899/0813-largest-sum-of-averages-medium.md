---
description: 'Author: @wkw | https://leetcode.com/problems/largest-sum-of-averages/'
tags: [Array, Dynamic Programming, Prefix Sum]
---

# 0813 - Largest Sum of Averages (Medium)

## Problem Link

https://leetcode.com/problems/largest-sum-of-averages/

## Problem Statement

You are given an integer array `nums` and an integer `k`. You can partition the array into **at most** `k` non-empty adjacent subarrays. The **score** of a partition is the sum of the averages of each subarray.

Note that the partition must use every integer in `nums`, and that the score is not necessarily an integer.

Return _the maximum **score** you can achieve of all the possible partitions_. Answers within `10-6` of the actual answer will be accepted.

**Example 1:**

```
Input: nums = [9,1,2,3,9], k = 3
Output: 20.00000
Explanation:
The best choice is to partition nums into [9], [1, 2, 3], [9]. The answer is 9 + (1 + 2 + 3) / 3 + 9 = 20.
We could have also partitioned nums into [9, 1], [2], [3, 9], for example.
That partition would lead to a score of 5 + 2 + 6 = 13, which is worse.
```

**Example 2:**

```
Input: nums = [1,2,3,4,5,6,7], k = 4
Output: 20.50000
```

**Constraints:**

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 10^4`
- `1 <= k <= nums.length`

## Approach 1: Dynamic Programming

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    double dfs(vector<vector<double>>& dp, vector<int>& nums, int k, int i) {
        // reached all elements
        if (i >= nums.size()) return 0;
        // cannot further partition
        if (k == 0) return INT_MIN;
        // the result has been calculated before
        if (dp[i][k] != -1) return dp[i][k];
        double mx = INT_MIN, sum = 0;
        for (int j = i; j < nums.size(); j++) {
            // sum from nums[i .. j]
            sum += nums[j];
            // current partition + the best result starting from the next index
            mx = max(mx, sum / (j - i + 1) + dfs(dp, nums, k - 1, j + 1));
        }
        // memorise the result
        return dp[i][k] = mx;
    }
    double largestSumOfAverages(vector<int>& nums, int k) {
        int n = nums.size();
        // The best score partitioning A[i:] into at most K parts
        vector<vector<double>> dp(n, vector<double>(k + 1, -1));
        // starting from index 0
        return dfs(dp, nums, k, 0);
    }
};
```

</TabItem>
</Tabs>
