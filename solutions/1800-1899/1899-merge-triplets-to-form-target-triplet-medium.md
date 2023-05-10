---
description: 'Author: @ColeB2 | https://leetcode.com/problems/merge-triplets-to-form-target-triplet/'
tags: [Array, Greedy]
---

# 1899 - Merge Triplets to Form Target Triplet (Medium)

## Problem Link

https://leetcode.com/problems/merge-triplets-to-form-target-triplet/

## Problem Statement

A **triplet** is an array of three integers. You are given a 2D integer array `triplets`, where `triplets[i] = [ai, bi, ci]` describes the `ith` **triplet**. You are also given an integer array `target = [x, y, z]` that describes the **triplet** you want to obtain.

To obtain `target`, you may apply the following operation on `triplets` **any number** of times (possibly **zero**):

- Choose two indices (**0-indexed**) `i` and `j` (`i != j`) and **update** `triplets[j]` to become `[max(ai, aj), max(bi, bj), max(ci, cj)]`.
    - For example, if `triplets[i] = [2, 5, 3]` and `triplets[j] = [1, 7, 5]`, `triplets[j]` will be updated to `[max(2, 1), max(5, 7), max(3, 5)] = [2, 7, 5]`.

Return `true` _if it is possible to obtain the_ `target` _**triplet**_ `[x, y, z]` _as an element of_ `triplets`, _or_ `false` _otherwise_.


**Example 1:**

```
Input: triplets = [[2,5,3],[1,8,4],[1,7,5]], target = [2,7,5]
Output: true
Explanation: Perform the following operations:
- Choose the first and last triplets [[2,5,3],[1,8,4],[1,7,5]]. Update the last triplet to be [max(2,1), max(5,7), max(3,5)] = [2,7,5]. triplets = [[2,5,3],[1,8,4],[2,7,5]]
The target triplet [2,7,5] is now an element of triplets.
```

**Example 2:**

```
Input: triplets = [[3,4,5],[4,5,6]], target = [3,2,5]
Output: false
Explanation: It is impossible to have [3,2,5] as an element because there is no 2 in any of the triplets.
```

**Example 3:**

```
Input: triplets = [[2,5,3],[2,3,4],[1,2,5],[5,2,3]], target = [5,5,5]
Output: true
Explanation: Perform the following operations:
- Choose the first and third triplets [[2,5,3],[2,3,4],[1,2,5],[5,2,3]]. Update the third triplet to be [max(2,1), max(5,2), max(3,5)] = [2,5,5]. triplets = [[2,5,3],[2,3,4],[2,5,5],[5,2,3]].
- Choose the third and fourth triplets [[2,5,3],[2,3,4],[2,5,5],[5,2,3]]. Update the fourth triplet to be [max(2,5), max(5,2), max(5,3)] = [5,5,5]. triplets = [[2,5,3],[2,3,4],[2,5,5],[5,5,5]].
The target triplet [5,5,5] is now an element of triplets.
```

**Constraints:**

- `1 <= triplets.length <= 10^5`
- `triplets[i].length == target.length == 3`
- `1 <= ai, bi, ci, x, y, z <= 1000`

## Approach 1: Greedy

We only need to know that it is possible to create our target triplet given a list of triplets. To create our target triplet, we either need a single triplet, or a combination of triplets, that matches exactly to our target triplet. 

We can do this by looping through all the triplets and marking down each digit that matches while also maintaining that the other digits in the triplet that don't match are at least less than the digit they are suppose to match too (If any digit is greater than any target triplet digit, then we know we can't use the triplet as it will override the target digit value that we need to match). If we match all 3 digits, then we can return True.

Time Complexity: $$O(n)$$. We only need to loop through triplets once, performing constant time work on each iteration.

Space Complexity: $$O(1)$$, we can finish our algorithm using constant space to track which digits we matched in our target triplet.

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def mergeTriplets(self, triplets: List[List[int]], target: List[int]) -> bool:
        # set x,y,z equal to our target for cleaner digit checking
        x, y, z = target
        # initialize a target triplet of all False, each False represents
        # a digit in target that we matched.
        target_triplet = [False, False, False]
        # loop all our triplets:
        for triplet in triplets:
            # set a, b, c to be each digit in the triplet for cleaner
            # digit checking.
            a, b, c = triplet[0], triplet[1], triplet[2]
            # if any of a, b, or c are greater than target x, y, z. Then
            # we know we can't use this triplet as it will override our
            # corresponding digits.
            if a > x or b > y or c > z:
                continue
            # loop through our triplet to match our digits
            for i, value in enumerate(triplet):
                # if the corresponding triplet digit matches our target
                if value == target[i]:
                    # set target triplet we matched to True
                    target_triplet[i] = True
            # Check early that we matched all 3 digits so we can terminate
            # early if we found enough matching triplets.
            if target_triplet == [True, True, True]:
                return True
        # Return that our target_triplet has matched all 3 digits.
        return target_triplet == [True, True, True]
```

</TabItem>
</Tabs>
