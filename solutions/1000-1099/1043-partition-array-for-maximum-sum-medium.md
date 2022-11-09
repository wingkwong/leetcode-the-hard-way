---
description: "Author: @Dhanu084 | https://leetcode.com/problems/partition-array-for-maximum-sum/description/"
tags: [Recursion, Dynamic Programming]
---

# 1043 - Partition Array for Maximum Sum (Medium)

## Problem Link

https://leetcode.com/problems/partition-array-for-maximum-sum/description/

## Problem Statement

Given an integer array arr, partition the array into (contiguous) subarrays of length at most k. After partitioning, each subarray has their values changed to become the maximum value of that subarray.

Return the largest sum of the given array after partitioning. Test cases are generated so that the answer fits in a 32-bit integer.

**Example 1:**

```
Input: arr = [1,15,7,9,2,5,10], k = 3
Output: 84
Explanation: arr becomes [15,15,15,9,10,10,10]
```

**Example 2:**

```
Input: arr = [1,4,1,5,7,3,6,1,9,9,3], k = 4
Output: 83
```

**Example 3:**

```
Input: arr = [1], k = 1
Output: 1
```

**Constraints:**

- 1 <= arr.length <= 500
- 0 <= arr[i] <= 109
- 1 <= k <= arr.length

## Approach 1: Recursion

Time complexity: $$O(k^n)$$

Space complexity: $$O(n)$$ + auxilary recursive stack space

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@dhanu084"/>

```py
class Solution:
    def maxSumAfterPartitioning(self, arr: List[int], k: int) -> int:
        def dfs(ind, k):
            if ind == len(arr):
                return 0

            maxi = max_sum = length = 0

            for i in range(ind, min(ind+k, len(arr))):
                length += 1
                maxi = max(maxi, arr[i])
                curr_sum = length * maxi + dfs(i+1, k)
                max_sum = max(curr_sum, max_sum)
            return max_sum
        return dfs(0, k)
```

</TabItem>
</Tabs>

## Approach 2: Memoization

Time complexity: $$O(n*k)$$

Space complexity: $$O(n)$$ + auxilary recursive stack space

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@dhanu084"/>

```py
class Solution:
    def maxSumAfterPartitioning(self, arr: List[int], k: int) -> int:
        n = len(arr)
        dp = [-1]*n

        def dfs(ind, k):
            if ind == len(arr):
                return 0

            if dp[ind] != -1:
                return dp[ind]

            maxi = max_sum = length = 0

            for i in range(ind, min(ind+k, len(arr))):
                length += 1
                maxi = max(maxi, arr[i])
                curr_sum = length * maxi + dfs(i+1, k)
                max_sum = max(curr_sum, max_sum)
            dp[ind] = max_sum
            return dp[ind]

        return dfs(0, k)
```

</TabItem>
</Tabs>

## Approach 3: Iterative DP

Time complexity: $$O(n*k)$$

Space complexity: $$O(n)$$

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@dhanu084"/>

```py
class Solution:
def maxSumAfterPartitioning(self, arr: List[int], k: int) -> int:
        n = len(arr)
        dp = [0]*(n+1)
        ans = 0

        for i in range(n-1,-1,-1):
            maxi = max_sum = length = 0
            for j in range(i,min(i+k, n)):
                length+=1
                maxi = max(maxi, arr[j])
                curr_sum = length * maxi + dp[j+1]
                max_sum = max(max_sum, curr_sum)
            dp[i] = max_sum

        return dp[0]
```

</TabItem>
</Tabs>
