---
description: 'Author: @ColeB2 | https://leetcode.com/problems/partition-equal-subset-sum/'
tags: [Array, Dynamic Programming]
---

# 0416 - Partition Equal Subset Sum (Medium)

## Problem Link

https://leetcode.com/problems/partition-equal-subset-sum/

## Problem Statement

Given an integer array `nums`, return `true` _if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or_ `false` _otherwise_.

**Example 1:**

```
Input: nums = [1,5,11,5]
Output: true
Explanation: The array can be partitioned as [1, 5, 5] and [11].
```

**Example 2:**

```
Input: nums = [1,2,3,5]
Output: false
Explanation: The array cannot be partitioned into equal sum subsets.
```

**Constraints:**

- `1 <= nums.length <= 200`
- `1 <= nums[i] <= 100`

## Approach 1: Dynamic Programming

We can use dynamic programming and a hash set to solve this problem. Our hash set would represent all the totals we can make using the numbers in $$nums$$, and our base case would be $$0$$. We also only have to reach a total of the $$sum(nums) // 2$$ as if one half is half the sum, then the other will be too. This also means we can terminate early if the sum of all numbers isn't even.

Then we can iterate through each number in $$nums$$, and for each iteration, iterate through our hash set of totals. If the current $$total$$ + the current $$number$$ is equal to our target we can return true, otherwise, we will have to add our $$total + num$$ to our hash set.
Note we can loop through our hash set and add numbers to it, so we will need an intermediate hash set to add our $$total + num$$ and $$total$$ to, as well as reassign later.

If we don't find our target total, we can return False.

Time Complexity: $$O(n * S)$$ where $$n$$ is the length of $$nums$$ array and $$S$$ is the sum of all elements in the array.

Space Complexity: $$O(S)$$ where $$S$$ is the sum of all elements in the array as we only need to store up to $$S$$ numbers in our hash set.

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        # calcuate target k
        k = sum(nums)
        # k isn't even, we can't partition the array
        if k % 2:
            return False
        # update our target to be half of k, as if we find half
        # the total then the remaining would be the other half.
        k //= 2
        # initialize our set with a starting total of 0.
        dp = set()
        dp.add(0)
        # loop through each number in nums
        for num in nums:
            # initialize intermediate set, so we can loop through original.
            new_dp = set()
            # loop through all the totals in the original dp set.
            for total in dp:
                # if any total + number == k, we found our answer.
                if (total + num) == k:
                    return True
                # add total + num, as well as original total to
                # the intermediate set.
                new_dp.add(total + num)
                new_dp.add(total)
            # reassign our set
            dp = new_dp
        # make it through and didn't find an answer return False.
        return False
```

</TabItem>
</Tabs>
