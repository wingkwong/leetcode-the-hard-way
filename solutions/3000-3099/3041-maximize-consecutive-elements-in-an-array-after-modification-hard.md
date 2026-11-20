---
title: 'LeetCode 3041 – Maximize Consecutive Elements in an Array After Modification'
description: 'Find the maximum number of consecutive elements after optional increments using sorting and dynamic programming, with a clear step-by-step solution.'
tags: ['Array', 'Dynamic Programming', 'Sorting']
---

# 3041 - Maximize Consecutive Elements in an Array After Modification (Hard)

## Problem Link

https://leetcode.com/problems/maximize-consecutive-elements-in-an-array-after-modification

## Problem Statement

You are given a **0-indexed** array `nums` consisting of **positive** integers.

Initially, you can increase the value of **any** element in the array by **at most** `1`.

After that, you need to select **one or more** elements from the final array such that those elements are **consecutive** when sorted in increasing order. For example, the elements `[3, 4, 5]` are consecutive while `[3, 4, 6]` and `[1, 1, 2, 3]` are not.

Return *the **maximum** number of elements that you can select*.

**Example 1:**

```
Input: nums = [2,1,5,1,1]
Output: 3
Explanation: We can increase the elements at indices 0 and 3. The resulting array is nums = [3,1,5,2,1].
We select the elements [3,1,5,2,1] and we sort them to obtain [1,2,3], which are consecutive.
It can be shown that we cannot select more than 3 consecutive elements.
```

**Example 2:**

```
Input: nums = [1,4,7,10]
Output: 1
Explanation: The maximum consecutive elements that we can select is 1.
```

**Constraints:**

- `1 <= nums.length <= 1e5`
- `1 <= nums[i] <= 1e6`

## Approach 1: Dynamic Programming

Each element can either stay the same or increase by $1$. We want to choose as many elements as possible so that, after sorting the chosen elements, every number is exactly one greater than the previous number. Duplicate values cannot appear in the chosen sequence.

First, we sort $nums$. This lets us process smaller numbers before larger numbers and build consecutive sequences by adding elements to their ends.

We use $dp$ to store the longest consecutive sequence ending at each value. For example, if $dp[4] = 3$, we can form a sequence of length $3$ ending at $4$, namely $[2, 3, 4]$. A $defaultdict(int)$ returns $0$ for missing keys, meaning that no sequence ending at that value has been found yet.

For each number $x$, we first consider increasing it to $x + 1$. It can extend a sequence ending at $x$, so we set $dp[x + 1] = dp[x] + 1$. Then we consider leaving it unchanged. It can extend a sequence ending at $x - 1$, so we set $dp[x] = dp[x - 1] + 1$.

The order of these updates is important. We update $dp[x + 1]$ before $dp[x]$ so that the increased option uses a sequence built only from earlier elements. Otherwise, we might accidentally use the current element twice.

The time complexity is $O(n \log n)$ and the space complexity is $O(n)$.


<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def maxSelectedElements(self, nums: List[int]) -> int:
        dp = defaultdict(int)
        res = 0
        for x in sorted(nums):
            dp[x + 1] = dp[x] + 1
            dp[x] = dp[x - 1] + 1
            res = max(res, dp[x], dp[x + 1])
        return res
```

</TabItem>
</Tabs>