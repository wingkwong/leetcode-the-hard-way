---
description: 'Author: @ColeB2 | https://leetcode.com/problems/subsets-ii/'
tags: [Array, Backtracking, Bit Manipulation]
---

# 0090 - Subsets II (Medium)

## Problem Link

https://leetcode.com/problems/subsets-ii/

## Problem Statement

Given an integer array nums that may contain duplicates, _return all possible subsets (the power set)_.

The solution set **must not** contain duplicate subsets. Return the solution in **any order**.

**Example 1:**

```
Input: nums = [1,2,2]
Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
```

**Example 2:**

```
Input: nums = [0]
Output: [[],[0]]
```

**Constraints:**

- `1 <= nums.length <= 10`
- `-10 <= nums[i] <= 10`

## Approach 1: Iterative Backtracking

Standard backtracking problem. At each step, we must decide to either take a number or not take a number at each step, similar to Subsets I. The only difference is the input may contain duplicates, and our answer can't.

We can push all of them to a set to remove the duplicates. We also must first sort the numbers, as while backtracking if we have a number set of $$[4,1,4]$$ for example, during our iterations through for selection, we will at some point push both $$(4,1)$$ and $$(1,4)$$ to our set, which are the same set when ordered properly, but when hashing and pushing to our set, won't be considered as the same set. By sorting first, we can easily fix that problem, and since the time complexity of backtracking is much greater than sorting, it won't affect our big oh.

Time Complexity: $$O(n*2^n)$$ to generate and copy all subsets into our power set.
Space Complexity: $$(n*2^n)$$ to return all our subsets.

Worst case, we will have no duplicates and have both exponential time and space.

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        # create our power set, start with empty
        power_set = set()
        # initialize our stack for backtracking
        # we start with an empty tuple instead of a list for hashing
        # and idx of where we are at in our nums array.
        stack = [((), 0)]
        # sort our numbers, since when hashing (1,4) and (4,1) they
        # are obviously the same for our questions purposes, 
        # but will hash differently and both make our set.
        nums.sort()
        while stack:
            # pop off the current subset and index inside nums.
            subset, idx = stack.pop()
            # add it to our power set. Set will ignore all dupes for us.
            power_set.add(subset)
            # if our idx is in bounds:
            if idx < len(nums):
                # Both take the number, and don't take the number.
                # add current subset where we don't take the number
                stack.append((subset, idx + 1))
                # add subset where we do take the number.
                stack.append((subset + (nums[idx],), idx + 1))
        # convert powerset back to a list.
        return list(power_set)
```

</TabItem>
</Tabs>