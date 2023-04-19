---
description: 'Author: @ColeB2 | https://leetcode.com/problems/target-sum/'
tags: [Array, Dynamic Programming, Backtracking]
---

# 0494 - Target Sum (Medium)

## Problem Link

https://leetcode.com/problems/target-sum/

## Problem Statement

You are given an integer array `nums` and an integer `target`.

You want to build an **expression** out of nums by adding one of the symbols `'+'` and `'-'` before each integer in nums and then concatenate all the integers.

- For example, if `nums = [2, 1]`, you can add a `'+'` before `2` and a `'-'` before `1` and concatenate them to build the expression `"+2-1"`.

Return the number of different **expressions** that you can build, which evaluates to `target`.

**Example 1:**

```
Input: nums = [1,1,1,1,1], target = 3
Output: 5
Explanation: There are 5 ways to assign symbols to make the sum of nums be target 3.
-1 + 1 + 1 + 1 + 1 = 3
+1 - 1 + 1 + 1 + 1 = 3
+1 + 1 - 1 + 1 + 1 = 3
+1 + 1 + 1 - 1 + 1 = 3
+1 + 1 + 1 + 1 - 1 = 3
```

**Example 2:**

```
Input: nums = [1], target = 1
Output: 1
```

**Constraints:**

- `1 <= nums.length <= 20`
- `0 <= nums[i] <= 1000`
- `0 <= sum(nums[i]) <= 1000`
- `-1000 <= target <= 1000`

## Approach 1: Dynamic Programming - Memoization

For each number in $$nums$$ we can calculate and store the possible sums on each iteration, and continue to do that and count all the sums at the end. 

To improve that we can use a hash map, with our key, value pairs being the $$sum$$ as our key, and the number of times that sum occurs as the value. This avoids repeated work on each iteration and allows $$O(1)$$ access to the $$target$$ number at the end instead of counting the occurrences of our target sum.

Time Complexity: $$O(n * s)$$ where $$n$$ is the number of nums, and $$s$$ is the range of possible sums. Our for loops will loop over all numbers, and all possible sums.

Space Complexity: $$O(s)$$ where $$s$$ is the range of possible sums. Our $$dp$$ hash map will contain key, value pairs based on the number of sums we can create.

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def findTargetSumWays(self, nums: List[int], target: int) -> int:
        # initialize our memoization hash map.
        dp = defaultdict(int)
        # Start with sum 0 = 1. As at the start, we have a sum of 0, that
        # occurs 1 time.
        dp[0] = 1
        # Iterate all our numbers in nums array:
        for num in nums:
            # initialize a new dp dict, as we don't need to remember
            # each sum on each iteration, we just need the new sums
            # we create on every pass.
            new_dp = defaultdict(int)
            # iterate over each key, value pair. 
            # _sum = keys which are our sums we created in dp.
            # value = freq, which is the frequency of each sum.
            for _sum, freq in dp.items():
                # The new sums we create will be the _sum +/- num
                # so our new keys will be _sum + num and _sum - num.
                # The values or frequency of each will be all the 
                # frequencies that each original _sum occurred at in 
                # the original dp hash map.
                new_dp[_sum + num] += freq
                new_dp[_sum - num] += freq
            # replace our old dp hash map with the new_dp hash map.
            dp = new_dp
        # Return the frequency of target in dp hash map.
        return dp[target]
```

</TabItem>
</Tabs>
