---
title: 'LeetCode 3411 – Maximum Subarray With Equal Products'
description: 'Find the longest product-equivalent subarray in O(n) using a sliding window and prime-factor bitmasks to efficiently detect shared factors.'
tags: ['Array', 'Math', 'Sliding Window', 'Enumeration', 'Number Theory']
---

# 3411 - Maximum Subarray With Equal Products (Easy)

## Problem Link

https://leetcode.com/problems/maximum-subarray-with-equal-products

## Problem Statement

You are given an array of **positive** integers `nums`.

An array `arr` is called **product equivalent** if `prod(arr) == lcm(arr) * gcd(arr)`, where:

- `prod(arr)` is the product of all elements of `arr`.
- `gcd(arr)` is the GCD of all elements of `arr`.
- `lcm(arr)` is the LCM of all elements of `arr`.

Return the length of the **longest** **product equivalent** subarray of `nums`.

**Example 1:**

**Input:** nums = [1,2,1,2,1,1,1]

**Output:** 5

**Explanation:**

The longest product equivalent subarray is `[1, 2, 1, 1, 1]`, where `prod([1, 2, 1, 1, 1]) = 2`, `gcd([1, 2, 1, 1, 1]) = 1`, and `lcm([1, 2, 1, 1, 1]) = 2`.

**Example 2:**

**Input:** nums = [2,3,4,5,6]

**Output:** 3

**Explanation:**

The longest product equivalent subarray is `[3, 4, 5].`

**Example 3:**

**Input:** nums = [1,2,3,1,4,5,1]

**Output:** 5

**Constraints:**

- `2 <= nums.length <= 100`
- `1 <= nums[i] <= 10`

## Approach 1: Sliding Window

We use a sliding window to find the longest valid subarray. Every subarray of length $2$ is always product equivalent because, for any two positive integers $a$ and $b$: $a × b = gcd(a, b) × lcm(a, b)$. Therefore, we initialize $res = 2$.

For subarrays with at least three elements, the condition is satisfied when no prime factor appears in two different elements. For example, $[2, 3, 5]$ is valid because the numbers use different prime factors. However, $[2, 3, 6]$ is invalid because $6$ shares prime factor $2$ with $2$ and prime factor $3$ with $3$.

Since every number is at most $10$, the only possible prime factors are $2$, $3$, $5$, and $7$. We represent them using four bits:

- Bit $0$ represents $2$
- Bit $1$ represents $3$
- Bit $2$ represents $5$
- Bit $3$ represents $7$

The array $m$ stores the prime-factor bitmask of every number from $0$ to $10$. For example:

- $m[2] = 1$ because $2$ has prime factor $2$
- $m[3] = 2$ because $3$ has prime factor $3$
- $m[6] = 3$ because $6$ has prime factors $2$ and $3$
- $m[10] = 5$ because $10$ has prime factors $2$ and $5$
- $m[1] = 0$ because $1$ has no prime factors

The variable $u$ stores all prime factors currently used inside the window. For each new number $x$, $u \& m[x]$ checks whether $x$ shares a prime factor with any number already in the window.  If there is a shared prime factor, we repeatedly remove numbers from the left side of the window. We continue until the new number has no conflict with the remaining elements.

After that, we add the new number's prime factors to $u$ and update $res$ using the current window length. The number $1$ never causes a conflict because its mask is $0$. Therefore, any number of $1$s can remain in the window.

The time complexity is $O(n)$ and the space complexity is $O(1)$.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def maxLength(self, nums: List[int]) -> int:
        m = [0, 0, 1, 2, 1, 4, 3, 8, 1, 2, 5]
        l = u = 0
        res = 2
        for r, x in enumerate(nums):
            while u & m[x]:
                u ^= m[nums[l]]
                l += 1
            u |= m[x]
            res = max(res, r - l + 1)
        return res
```

</TabItem>
</Tabs>