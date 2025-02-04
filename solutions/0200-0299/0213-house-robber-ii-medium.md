---
description: 'Author: @ColeB2 | https://leetcode.com/problems/house-robber-ii/'
tags: [Array, Dynamic Programming]
---

# 0213 - House Robber II (Medium)

## Problem Link

https://leetcode.com/problems/house-robber-ii/

## Problem Statement

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are **arranged in a circle**. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and **it will automatically contact the police if two adjacent houses were broken into on the same night**.

Given an integer array `nums` representing the amount of money of each house, return _the maximum amount of money you can rob tonight **without alerting the police**_.

**Example 1:**

```
Input: nums = [2,3,2]
Output: 3
Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.
```

**Example 2:**

```
Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
```

**Example 3:**

```
Input: nums = [1,2,3]
Output: 3
```

**Constraints:**

- `1 <= nums.length <= 100`
- `0 <= nums[i] <= 1000`

## Approach 1: Dynamic Programming

Similar to [House Robber](/solutions/0100-0199/house-robber-medium), at any given house, the max number of money we can have would be all the money at that house, plus the amount we brought from 2 houses before that house, or it would be the money we got from the last house plus us skipping this house. The caveat is, if we take from the first house, we can't take from the last house and vice-versa. So we can use the same algorithm, with 1 trick, that is to run the algorithm once over $$nums$$ from $$0$$ to $$n - 1$$ and once from $$1$$ to $$n$$, and taking the max of those too passes. This gives us both the max of if we included the first house and if we included the last house and does it in the same, linear time.

Time Complexity: $$O(n)$$ Where $$n$$ is the number of houses. We must traverse each house twice, once for the first $$n - 1$$ houses, and once for the last $$n - 1$$ houses.

Space Complexity: $$O(1)$$ We need to just track the previous 2 houses, which only needs constant extra space.

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    # Algorithm from House Robber 198. O(n) time O(1) space
    def rob_houses(self, nums: List[int], start: int, stop: int) -> int:
        # initialize starting values that track the previous 2 houses.
        # you can imagine our houses will be oriented:
        # a, b, nums[i], and the values of a,b will be the max amount
        # of money we can earn up to that house.
        a, b = 0, 0
        # loop from start to stop, given as a parameter above.
        for i in range(start, stop):
            # a will become b, as b will become 2 houses behind on the
            # next iteration.
            # b will become the max of wither, a + nums[i] which would
            # be us taking the money from a, skipping b, and taking the
            # money at nums[i]. Or it would become b, which is just us
            # skipping the house.
            a, b = b, max((a + nums[i]), b)
        # b will contain the max money we can get in the traversal.
        return b

    def rob(self, nums: List[int]) -> int:
        # with the above algorithm we have 3 cases we need to manage.
        # 1. nums has a single number, in that case we return that number.
        # 2. We take from the first house, leaving the last house out of play.
        # 3. We take from the last house, leaving the first house out of play.
        # The largest of those 3 values will give us our answer.
        return max(
            nums[0],
            self.rob_houses(nums, 0, len(nums) - 1),
            self.rob_houses(nums, 1, len(nums))
        )
```

</TabItem>
</Tabs>
