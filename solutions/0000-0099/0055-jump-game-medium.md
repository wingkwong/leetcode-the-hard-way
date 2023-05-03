---
description: 'Author: @ColeB2 | https://leetcode.com/problems/jump-game/'
tags: [Array, Dynamic Programming, Greedy]
---

# 0055 - Jump Game (Medium)

## Problem Link

https://leetcode.com/problems/jump-game/

## Problem Statement

You are given an integer array `nums`. You are initially positioned at the array's **first index**, and each element in the array represents your maximum jump length at that position.

Return `true` _if you can reach the last index, or_ `false` _otherwise_.

**Example 1:**

```
Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
```

**Example 2:**

```
Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
```

**Constraints:**

- `1 <= nums.length <= 10^4`
- `0 <= nums[i] <= 10^5`

## Approach 1: Greedy

We can solve this backwards by tracking the furthest position we can jump, and moving it backwards if we can reach that position from the current position.

By initializing a $$finish$$ at $$nums.length$$ and iterating backwards through the numbers and setting our $$finish$$ to $$i$$ if the current number plus $$i$$ is greater than or equal to our finish, we can find the answer if we can eventually get our $$finish$$ to reach 0.

Time Complexity: $$O(n)$$ where $$n$$ is the length of $$nums$$. We only need to iterate through each number in the $$nums$$ array once.

Space Compelxity: $$O(1)$$. We only need constant space to track our $$finish$$ line.

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def canJump(self, nums: List[int]) -> bool:
        # initialize a finish line
        finish = len(nums) - 1
        # loop through numbers backwards
        for i in range(len(nums) - 1, -1, -1):
            # if we can jump past our finish line from current position:
            if nums[i] + i >= finish:
                # move our finish line to current position, as we know
                # if we ever reach this position, we can reach the finish
                finish = i
        # if our finish reaches 0, we know we can successfully reach
        # the finish line, if not, this will return False.
        return finish == 0
```

</TabItem>
</Tabs>
