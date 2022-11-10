---
description: "Author: @Dhanu084 | https://leetcode.com/problems/partition-array-for-maximum-sum/description/"
tags: [Recursion, Dynamic Programming]
---

# 1043 - Partition Array for Maximum Sum (Medium)

## Problem Link

https://leetcode.com/problems/partition-array-for-maximum-sum/

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

Time complexity: $$O(n * k ^ n)$$

Space complexity: $$O(n)$$ + auxilary recursive stack space

**Note:**
This soution will give Time Limit Exceeded at leetcode as it is exponential in nature

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

            '''
                for eg Input : [1,15,7,9,2,5,10]
                From every index loop till index + k
                Find the maximum in the subarray [index : index+k]
                multiply it with the current subarray length to get the current sum
                If current sum is greater than maximum sum , update it

                there are lot of decisions in recursion, below is the working of the optimal one:
                for subarray [1,15,7] of size k , the maximum in the subarray is 15 and length is 3
                so the sum will be 15 * 3 = 45
                for the next Partition keep just [9] as a subarray with sum 9 * 1 = 9
                for the next partition keep subarray [2,5,10], the maximum is 10 and length is 3
                so the sum is 10 * 3 = 30

                So the total sum is 45 + 9 + 30 = 84

                Please try out other partitions like
                [1] [15] [7,9,2,5,10] = (1 * 1) + (15 * 1) + (10 * 5) = 67
                [1,15] [7] [9,2,5,10] = (15 * 1) + (7 * 1) + (10 * 4) = 62
                [1,15,7] [9,2,5] [10] = (15 * 1) + (9 * 3) + (10 * 1) = 52
                [1,15,7] [9,2] [5,10] = (15 * 3) + (9 * 2) + (10 * 2) = 73
                etc for better understanding
            '''

            for i in range(ind, min(ind + k, len(arr))):
                length += 1
                maxi = max(maxi, arr[i])
                curr_sum = length * maxi + dfs(i + 1, k)
                max_sum = max(curr_sum, max_sum)
            return max_sum
        return dfs(0, k)
```

</TabItem>
</Tabs>

## Approach 2: Memoization

Time complexity: $$O(n * k)$$

Space complexity: $$O(n)$$ + auxilary recursive stack space

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@dhanu084"/>

```py
class Solution:
    def maxSumAfterPartitioning(self, arr: List[int], k: int) -> int:
        n = len(arr)
        dp = [-1] * n

        def dfs(ind, k):
            if ind == len(arr):
                return 0

            '''
                 if decision tree is drawn for the above recursive solution,
                 a lot of overlapping subproblems can be found
                 To avoid subsequent recursive calls to find the result
                 which is already calculated cache the results once calculated and return it later
                 when the same result is required.

                 For caching consider the changing parameters in the function,
                 for this problem only index changes during recursion so
                 create an array of size n and cache the results one found

                 if k also changes then create 2D array for caching both index and k
            '''
            if dp[ind] != -1:
                return dp[ind]

            maxi = max_sum = length = 0

            for i in range(ind, min(ind + k, len(arr))):
                length += 1
                maxi = max(maxi, arr[i])
                curr_sum = length * maxi + dfs(i + 1, k)
                max_sum = max(curr_sum, max_sum)
            dp[ind] = max_sum
            # cache the results
            return dp[ind]

        return dfs(0, k)
```

</TabItem>
</Tabs>

## Approach 3: Iterative DP

Time complexity: $$O(n * k)$$

Space complexity: $$O(n)$$

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@dhanu084"/>

```py
class Solution:
    def maxSumAfterPartitioning(self, arr: List[int], k: int) -> int:
        n = len(arr)
        dp = [0] * (n + 1)
        ans = 0

        for i in range(n-1, -1, -1):
            maxi = max_sum = length = 0
            for j in range(i, min(i + k, n)):
                length += 1
                maxi = max(maxi, arr[j])
                curr_sum = length * maxi + dp[j+1]
                max_sum = max(max_sum, curr_sum)
            dp[i] = max_sum

        return dp[0]
```

</TabItem>
</Tabs>

## References

[Striver DP playlist - takeyouforward youtube channel](https://www.youtube.com/watch?v=PhWWJmaKfMc)
