---
description: 'Author: @ColeB2 | https://leetcode.com/problems/burst-balloons/'
tags: [Array, Dynamic Programming]
---

# 0312 - Burst Balloons (Hard)

## Problem Link

https://leetcode.com/problems/burst-balloons/

## Problem Statement

You are given `n` balloons, indexed from `0` to `n - 1`. Each balloon is painted with a number on it represented by an array `nums`. You are asked to burst all the balloons.

If you burst the `ith` balloon, you will get `nums[i - 1] * nums[i] * nums[i + 1]` coins. If `i - 1` or `i + 1` goes out of bounds of the array, then treat it as if there is a balloon with a `1` painted on it.

Return _the maximum coins you can collect by bursting the balloons wisely_.

**Example 1:**

```
Input: nums = [3,1,5,8]
Output: 167
Explanation:
nums = [3,1,5,8] --> [3,5,8] --> [3,8] --> [8] --> []
coins =  3*1*5    +   3*5*8   +  1*3*8  + 1*8*1 = 167
```

**Example 2:**

```
Input: nums = [1,5]
Output: 10
```

**Constraints:**

- `n == nums.length`
- `1 <= n <= 300`
- `0 <= nums[i] <= 100`

## Approach 1: Dynamic Programming - Memoization

If we solve this problem recursively we must think of our base case. When all balloons are already popped we can only get 0 coins. Then building up from then, we know, if we have 1 balloon, we will get the coins only from that balloon.

From our base case, we can then build on it. Our goal being that for each $$kth$$ balloon we select as the last balloon we pop, we can calculate the subproblems around that $$kth$$ balloon. That being the subproblem from $$[i : k - 1]$$ and the sub-problem $$[k + 1 : j]$$. Meaning for each $$i$$ and $$j$$ we can select all $$k$$ values to test first, and continue to check the sub problems.

If we preprocess our $$nums$$ array with $$1$$ values on each side to handle the case where we pop and end balloon that need to be multiplied by one, then we can initialize our $$i$$ and $$j$$ values as $$1$$ and $$nums.length - 2$$ which will be the start and end points of our old $$nums$$ array inside our new processed $$nums$$ array.

The memoization comes from storing the max coins we get for each $$k$$ we try at each $$i$$ and $$j$$ value. By checking the amount of coins we can get for each $$k$$ from $$i$$ to $$j$$ and caching the max coin value out of all the $$k$$'s we test we can reuse the work of that $$i,j$$ pair for future sub problems.

Time Complexity: $$O(n^3)$$ where n in the length of $$nums$$. We are going to have $$n^3$$ sub problems where we check each $$i$$, $$j$$, and $$k$$ value.

Space Complexity: $$O(n^2)$$. Since we are only storing the $$i,j$$ values in our cache, we will only end up with $$n^2$$ values inside our cache.

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def maxCoins(self, nums: List[int]) -> int:
        # Pre process nums with 1s on each end to handle the edge
        # ballons where when we pop them the coins are multiplied by 1.
        nums = [1] + nums + [1]
        # initialize our cache with key: (i, j) where i, j are the
        # start and end points of our array and the value: max_coins
        # being the max number of coins we can get from that subproblem
        # with those (i, j) end points.
        cache = {}
        # recursive function. Parameter i, j are our start and endpoints
        # in the array.
        def helper(i, j):
            # base case:
            #i > j it means we have 0 values inside our array.
            if i > j:
                # return 0, as we can't get any coins from empty array.
                return 0
            # memoization: If we calculated this sub problem before:
            if (i, j) in cache:
                # get the value from the sub problem.
                return cache[(i, j)]
            # initialize max coins to -infinity.
            max_c = float('-inf')
            # loop through all the balloons from i to j. We use j + 1
            # as we want j to be an inclusive balloon that we can pop.
            # k will represent the last balloon we pop in the sub array.
            for k in range(i, j + 1):
                # initialize coins as k, being the last balloon we pop.
                coins = nums[k]
                # multiply that kth balloon by the end points, which
                # will be the balloons next to k when we pop all the
                # other balloons between the end points. Those endpoints
                # will be i - 1, and j + 1 which on the first iteration
                # will be the 1's that we preprocessed nums with.
                coins *= nums[i - 1]
                coins *= nums[j + 1]
                # We solved the base case for k being the last balloon
                # popped, now we need to add that to the sub problems
                # where we select ballons between i, k - 1 and k + 1, j.
                # This skips k, as that is the last balloon.
                coins += (helper(i, k - 1) + helper(k + 1, j))
                # update our max coin counter.
                max_c = max(max_c, coins)
                # update our cache so we don't have to redo this work
                # on future iterations.
                cache[(i,j)] = max_c
            # return the value we calculated above.
            return cache[(i, j)]
        # initialize our algorithm with the endpoints of the array.
        # example 1: 3,1,5,8. We preprocess it with 1's giving us:
        # 1,3,1,5,8,1 meaning the first number 3, will be indexed at
        # index 1, and the last number will be indexed at nums.length - 2.
        return helper(1, len(nums) - 2)
```

</TabItem>
</Tabs>
