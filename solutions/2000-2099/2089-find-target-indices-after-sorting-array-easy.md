---
description: 'Author: @wkw | https://leetcode.com/problems/find-target-indices-after-sorting-array'
tags: ['Array', 'Binary Search', 'Sorting']
rating: 1152
---

# 2089 - Find Target Indices After Sorting Array (Easy)

## Problem Link

https://leetcode.com/problems/find-target-indices-after-sorting-array

## Problem Statement

You are given a **0-indexed** integer array `nums` and a target element `target`.

A **target index** is an index `i` such that `nums[i] == target`.

Return *a list of the target indices of* `nums` after*sorting*`nums`*in **non-decreasing** order*. If there are no target indices, return *an **empty** list*. The returned list must be sorted in **increasing** order.

**Example 1:**

```
Input: nums = [1,2,5,2,3], target = 2
Output: [1,2]
Explanation: After sorting, nums is [1,2,2,3,5].
The indices where nums[i] == 2 are 1 and 2.
```

**Example 2:**

```
Input: nums = [1,2,5,2,3], target = 3
Output: [3]
Explanation: After sorting, nums is [1,2,2,3,5].
The index where nums[i] == 3 is 3.
```

**Example 3:**

```
Input: nums = [1,2,5,2,3], target = 5
Output: [4]
Explanation: After sorting, nums is [1,2,2,3,5].
The index where nums[i] == 5 is 4.
```

**Constraints:**

- `1 <= nums.length <= 100`
- `1 <= nums[i], target <= 100`

## Approach 1: Sort and Traverse

Sort $nums$ in non-decreasing order, then traverse it from left to right. Whenever $nums[i]$ equals $target$, append index $i$ to the result list. Since the indices are visited in increasing order, the result is already sorted as required. If the target does not appear in the array, the result remains empty.

Let $n$ be the length of $nums$ and $k$ be the number of occurrences of $target$. Sorting takes $O(n log n)$ time, and traversal takes $O(n)$ time, giving an overall time complexity of $O(n log n)$. Python's sorting algorithm uses $O(n)$ auxiliary space in the worst case, while the result list requires an additional $O(k)$ space.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def targetIndices(self, nums: list[int], target: int) -> list[int]:
        nums.sort()
        res = []
        for i in range(len(nums)):
            if nums[i] == target: 
                res.append(i)
        return res
```

</TabItem>
</Tabs>

## Approach 2: Count Smaller and Equal Elements

We can find the target indices without sorting. Count the elements smaller than $target$ as $lt$ and the elements equal to $target$ as $eq$. In sorted order, all $lt$ elements come before the target, and all occurrences of the target appear consecutively. Therefore, the target indices range from $lt$ to $lt + eq - 1$. Return these indices in increasing order; if $eq$ is zero, the result is empty.

Let $n$ be the length of $nums$ and $k$ be the number of occurrences of $target$. Counting takes $O(n)$ time, and constructing the result takes $O(k)$ time, giving $O(n)$ total time** because $k <= n$. The algorithm uses $O(1)$ auxiliary space, excluding the $O(k)$ space required for the returned list.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def targetIndices(self, nums: list[int], target: int) -> list[int]:
        lt = eq = 0
        for x in nums:
            if x < target: lt += 1
            elif x == target: eq += 1
        return list(range(lt, lt + eq))
```

</TabItem>
</Tabs>