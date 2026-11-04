---
description: 'Author: @wkw | https://leetcode.com/problems/minimum-operations-to-make-elements-within-k-subarrays-equal'
tags: ['Array', 'Hash Table', 'Math', 'Dynamic Programming', 'Sliding Window', 'Heap (Priority Queue)']
---

# 3505 - Minimum Operations to Make Elements Within K Subarrays Equal (Hard)

## Problem Link

https://leetcode.com/problems/minimum-operations-to-make-elements-within-k-subarrays-equal

## Problem Statement

You are given an integer array `nums` and two integers, `x` and `k`. You can perform the following operation any number of times (**including zero**):

- Increase or decrease any element of `nums` by 1.

Return the **minimum** number of operations needed to have **at least** `k` *non-overlapping subarrays* of size **exactly** `x` in `nums`, where all elements within each subarray are equal.

**Example 1:**

**Input:** nums = [5,-2,1,3,7,3,6,4,-1], x = 3, k = 2

**Output:** 8

**Explanation:**

- Use 3 operations to add 3 to `nums[1]` and use 2 operations to subtract 2 from `nums[3]`. The resulting array is `[5, 1, 1, 1, 7, 3, 6, 4, -1]`.
- Use 1 operation to add 1 to `nums[5]` and use 2 operations to subtract 2 from `nums[6]`. The resulting array is `[5, 1, 1, 1, 7, 4, 4, 4, -1]`.
- Now, all elements within each subarray `[1, 1, 1]` (from indices 1 to 3) and `[4, 4, 4]` (from indices 5 to 7) are equal. Since 8 total operations were used, 8 is the output.

**Example 2:**

**Input:** nums = [9,-2,-2,-2,1,5], x = 2, k = 2

**Output:** 3

**Explanation:**

- Use 3 operations to subtract 3 from `nums[4]`. The resulting array is `[9, -2, -2, -2, -2, 5]`.
- Now, all elements within each subarray `[-2, -2]` (from indices 1 to 2) and `[-2, -2]` (from indices 3 to 4) are equal. Since 3 operations were used, 3 is the output.

**Constraints:**

- `2 <= nums.length <= 1e5`
- `-1e6 <= nums[i] <= 1e6`
- `2 <= x <= nums.length`
- `1 <= k <= 15`
- `2 <= k * x <= nums.length`

## Approach 1: Sliding Window + Fenwick Tree + Dynamic Programming

We can break this problem into two sub-problems:

1. For every subarray of length $x$, compute the minimum cost to make all its elements equal
2. From all these length-$x$ subarrays, choose $k$ non-overlapping ones with minimum total cost

First, let's find the cost of one fixed subarray. For a fixed window, if we want to make all numbers equal using $+1 / -1$ operations, the optimal target value is the median of that window. So for every window of size $x$, we need (1) the median, (2) the sum of numbers smaller than the median and (3) the total sum of the window. Then the cost can be computed in $O(1)$ once the median is known.

Suppose $m$ is the median, $c$ is the number of elements strictly smaller than $m$, $s$ is the sum of elements strictly smaller than $m$, $tot$ is the total sum of the whole window. Then the cost to raise smaller elements up to $m$ is $m * c - s$, and the cost to lower larger elements down to $m$ is $(tot - s) - m * (x - c)$. Adding them together gives $tot - 2 * s + m * (2 * c - x)$

Moving on to finding the sliding window median using a Fenwick tree. The array length is up to $10^5$, so recomputing the median from scratch for every window would be too slow. We compress the values in $nums$, then maintain two Fenwick trees over the current sliding window:

- $ctn[i]$: how many times a compressed value appears
- $sums[i]$: the sum contributed by that value

When the window moves by one position, we add the new value, remove the value that leaves the window and update $tot$. To find the median, we binary-lift on the Fenwick tree of counts and locate the first value whose prefix count reaches $\frac{x + 1}{2}$.

While doing this search, it also accumulates $c$ which is the count of elements strictly smaller than the median, and $s$ which is the sum of elements strictly smaller than the median. So each window cost is computed in $O(log n)$ time, and we store it in $costs[start]$.

Now we only need to choose $k$ non-overlapping windows from $costs$. Let the chosen starting indices be $p_0 < p_1 < ... < p_{k-1}$. Because windows cannot overlap, $p_{j+1} >= p_j + x$. It is convenient to remove the mandatory $x$ gap contributed by each chosen window: $p_j = j * x + s_j$.

Then the non-overlapping condition becomes $s_0 <= s_1 <= ... <= s_{k-1}$ and every $s_j$ is in $[0, n - k * x]$. So the problem becomes choose a non-decreasing sequence $s_0, s_1, ..., s_{k-1}$ minimizing $costs[s_0] + costs[x + s_1] + costs[2x + s_2] + ... + costs[(k-1)x + s_{k-1}]$

Define $dp[s]$ as the minimum cost after choosing some number of windows, where the current slack value is at most $s$. When we place the next window (0-indexed as $i$), its start is $i * x + s$, so the transition is $ndp[s] = min(ndp[s - 1], dp[s] + costs[i * x + s])$. The term $ndp[s - 1]$ is just a prefix minimum so the code keeps it in a variable $res$ and updates the DP in place. Because $k <= 15$, this DP is fast enough.

The time complexity is $O(n log n + k n)$ and the space complexity is $O(n)$.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def minOperations(self, nums: List[int], x: int, k: int) -> int:
        n = len(nums)
        vals = sorted(set(nums))
        m = len(vals)
        ranks = {v: i + 1 for i, v in enumerate(vals)}
        ctn, sums = [0] * (m + 1), [0] * (m + 1)
        def update(v, d):
            i = ranks[v]
            while i <= m:
                ctn[i] += d
                sums[i] += v * d
                i += i & -i
        costs, tot = [], 0
        for i, v in enumerate(nums):
            update(v, 1); tot += v
            if i >= x: update(nums[i - x], -1); tot -= nums[i - x]
            if i < x - 1: continue
            p = c = s = 0
            st = 1 << (m.bit_length() - 1)
            while st:
                j = p + st
                if j <= m and c + ctn[j] < (x + 1) // 2: 
                    p = j
                    c += ctn[j]
                    s += sums[j]
                st >>= 1
            costs.append(tot - 2 * s + vals[p] * (2 * c - x))
        dp = [0] * (n - k * x + 1)
        for i in range(k):
            res = 10 ** 30
            for s in range(len(dp)):
                res = min(res, dp[s] + costs[i * x + s])
                dp[s] = res
        return res
```

</TabItem>
</Tabs>