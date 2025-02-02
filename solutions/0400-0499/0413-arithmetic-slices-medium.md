---
description: 'Author: @wkw | https://leetcode.com/problems/arithmetic-slices/'
---

# 0413 - Arithmetic Slices (Medium)

## Problem Link

https://leetcode.com/problems/arithmetic-slices/

## Problem Statement

An integer array is called arithmetic if it consists of **at least three elements** and if the difference between any two consecutive elements is the same.

- For example, `[1,3,5,7,9]`, `[7,7,7,7]`, and `[3,-1,-5,-9]` are arithmetic sequences.

Given an integer array `nums`, return _the number of arithmetic **subarrays** of_ `nums`.

A **subarray** is a contiguous subsequence of the array.

**Example 1:**

```
Input: nums = [1,2,3,4]
Output: 3
Explanation: We have 3 arithmetic slices in nums: [1, 2, 3], [2, 3, 4] and [1,2,3,4] itself.
```

**Example 2:**

```
Input: nums = [1]
Output: 0
```

**Constraints:**

- `1 <= nums.length <= 5000`
- `-1000 <= nums[i] <= 1000`

## Approach 1: DP

Let's say we have the input $$nums = [1,2,3,4,5,6,7]$$. Starting the third element, we know that $$[1,2,3]$$ is an arithmetic subarrays. If we process the next number $$4$$, we can have a new one $$[2,3,4]$$. Also we can add $$4$$ to previous result $$[1,2,3]$$ to form $$[1,2,3,4]$$. In total, we got $$3$$arithmetic subarrays if we end at number $$4$$. What about ending at number $$5$$? Similarly, we could have a new one $$[3,4,5]$$. It extends the previous results $$[1,2,3]$$, $$[2,3,4]$$,$$[1,2,3,4]$$ and we can add $$5$$to form $$[1,2,3,4,5]$$ and $$[2,3,4,5]$$. We can see that the number of arithmetic subarrays at $$i$$ won't be affected by the indices beyond. Hence, we can use DP to solve it.

Let $$dp[i]$$ be the number of arithmetic subarrays that end at $$i$$. If it can form an arithmetic subarray, then $$dp[i] = dp[i - 1] + 1$$.

<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    int numberOfArithmeticSlices(vector<int>& nums) {
        int ans = 0, n = nums.size();
        vector<int> dp(n);
        for(int i = 2; i < n; i++) {
            // it can form an arithmetic subarray
            if(nums[i] - nums[i - 1] == nums[i - 1] - nums[i - 2]) {
                dp[i] = dp[i - 1] + 1;
            }
            ans += dp[i];
        }
        return ans;
    }
};
```

As we can see that, the transition is based on the previous result. Hence we can optimize the space by using a variable $$dp$$ to track the number of arithmetic subarrays. If it is found, we increase it by $$1$$ and add $$dp$$ to $$ans$$. If at some point we find it is not arithmetic, then we can simply reset $$dp$$ to $$0$$.

```cpp
class Solution {
public:
    int numberOfArithmeticSlices(vector<int>& nums) {
        int dp = 0, ans = 0;
        for(int i = 2; i < nums.size(); i++) {
            // it can form an arithmetic subarray
            if(nums[i] - nums[i - 1] == nums[i - 1] - nums[i - 2]) {
                dp += 1, ans += dp;
            } else {
                dp = 0;
            }
        }
        return ans;
    }
};
```
