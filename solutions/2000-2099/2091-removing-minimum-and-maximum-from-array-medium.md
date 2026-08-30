---
description: 'Author: @wkw | https://leetcode.com/problems/removing-minimum-and-maximum-from-array'
tags: ['Array', 'Greedy']
---

# 2091 - Removing Minimum and Maximum From Array (Medium) 

## Problem Link

https://leetcode.com/problems/removing-minimum-and-maximum-from-array

## Problem Statement

You are given a **0-indexed** array of **distinct** integers `nums`.

There is an element in `nums` that has the **lowest** value and an element that has the **highest** value. We call them the **minimum** and **maximum** respectively. Your goal is to remove **both** these elements from the array.

A **deletion** is defined as either removing an element from the **front** of the array or removing an element from the **back** of the array.

Return *the **minimum** number of deletions it would take to remove **both** the minimum and maximum element from the array.*

**Example 1:**

```
Input: nums = [2,10,7,5,4,1,8,6]
Output: 5
Explanation: 
The minimum element in the array is nums[5], which is 1.
The maximum element in the array is nums[1], which is 10.
We can remove both the minimum and maximum by removing 2 elements from the front and 3 elements from the back.
This results in 2 + 3 = 5 deletions, which is the minimum number possible.
```

**Example 2:**

```
Input: nums = [0,-4,19,1,8,-2,-3,5]
Output: 3
Explanation: 
The minimum element in the array is nums[1], which is -4.
The maximum element in the array is nums[2], which is 19.
We can remove both the minimum and maximum by removing 3 elements from the front.
This results in only 3 deletions, which is the minimum number possible.
```

**Example 3:**

```
Input: nums = [101]
Output: 1
Explanation:  
There is only one element in the array, which makes it both the minimum and maximum element.
We can remove it with 1 deletion.
```

**Constraints:**

- `1 <= nums.length <= 1e5`
- `-1e5 <= nums[i] <= 1e5`
- The integers in `nums` are **distinct**.

## Approach 1: Greedy

Find the indices of the minimum and maximum elements and sort them as $x < y$. There are three possible optimal strategies: delete everything from the front through index $y$, requiring $y + 1$ deletions; delete everything from index $x$ through the back, requiring $len(nums) - x$ deletions; or delete through index $x$ from the front and from index $y$ through the back, requiring $x + 1 + len(nums) - y$ deletions. The minimum of these three values is the answer. 

Time Complexity: $O(n)$

Space Complexity: $O(1)$

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def minimumDeletions(self, nums: List[int]) -> int:
        n = len(nums)
        x, y = sorted((nums.index(min(nums)), nums.index(max(nums))))
        return min(y + 1, n - x, x + 1 + n - y)
```

</TabItem>
</Tabs>