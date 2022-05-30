---
description: 'Author: @wingkwong | https://leetcode.com/problems/delete-and-earn/'
---

# 0740 - Delete and Earn (Medium)

## Problem Statement

You are given an integer array `nums`. You want to maximize the number of points you get by performing the following operation any number of times:

* Pick any `nums[i]` and delete it to earn `nums[i]` points. Afterwards, you must delete **every** element equal to `nums[i] - 1` and **every** element equal to `nums[i] + 1`.

Return _the **maximum number of points** you can earn by applying the above operation some number of times_.

**Example 1:**

```
Input: nums = [3,4,2]
Output: 6
Explanation: You can perform the following operations:
- Delete 4 to earn 4 points. Consequently, 3 is also deleted. nums = [2].
- Delete 2 to earn 2 points. nums = [].
You earn a total of 6 points.
```

**Example 2:**

```
Input: nums = [2,2,3,3,3,4]
Output: 9
Explanation: You can perform the following operations:
- Delete a 3 to earn 3 points. All 2's and 4's are also deleted. nums = [3,3].
- Delete a 3 again to earn 3 points. nums = [3].
- Delete a 3 once more to earn 3 points. nums = [].
You earn a total of 9 points.
```

**Constraints:**

* `1 <= nums.length <= 2 * 10^4`
* `1 <= nums[i] <= 10^4`

## Approach 1: DP

Let $$dp[i]$$ be the maximum number of points you can earn by apply the operation till number $$i$$.

If we pick $$1$$, we can earn $$dp[1]$$. If we pick $$2$$, we can earn $$dp[2]$$. If we pick $$3$$, then we cannot pick $$2$$ but we can earn $$dp[3]$$ + $$dp[1]$$. If we don't pick it, then the max point we can earn is the previous state which is $$dp[2]$$.

Therefore, the transition will be $$dp[i] = max(dp[i - 1], dp[i - 2] + dp[i])$$. We either take the previous state (i.e. not pick the current number) or take the current number, skip the previous state and get the two states before the current one.

```cpp
class Solution {
public:
    int deleteAndEarn(vector<int>& nums) {
        // we find out the max value 
        // instead of trying from 1 to 10 ^ 4
        int n = *max_element(nums.begin(), nums.end());
        // init dp
        vector<int> dp(n + 1);
        // dp[i] = max number of points if we pick number i
        for (auto x : nums) dp[x] += x;
        for (int i = 2; i <= n; i++) {
            // if we don't pick the current number, 
            // then take the previous state (i.e. dp[i - 1])
            // else, we pick the current number 
            // we earn dp[i] plus the 2 states before that (i.e. dp[i - 2])
            dp[i] = max(dp[i - 1], dp[i - 2] + dp[i]);
        }
        return dp[n];
    }
};
```
