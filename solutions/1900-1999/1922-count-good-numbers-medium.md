---
description: 'Author: @wkw | https://leetcode.com/problems/count-good-numbers'
tags: [Math, Recursion]
---

# 1922 - Count Good Numbers (Medium)

## Problem Link

https://leetcode.com/problems/count-good-numbers

## Problem Statement

A digit string is good if the digits (0-indexed) at even indices are even and the digits at odd indices are prime (2, 3, 5, or 7).

For example, "2582" is good because the digits (2 and 8) at even positions are even and the digits (5 and 2) at odd positions are prime. However, "3245" is not good because 3 is at an even index but is not even.

Given an integer n, return the total number of good digit strings of length n. Since the answer may be large, return it modulo $1e9 + 7$.

A digit string is a string consisting of digits 0 through 9 that may contain leading zeros.

**Example 1:**

```
Input: n = 1
Output: 5
Explanation: The good numbers of length 1 are "0", "2", "4", "6", "8".
```

**Example 2:**

```
Input: n = 4
Output: 400
```

**Example 3:**

```
Input: n = 50
Output: 564908303
```

**Constraints:**

- $1 <= n <= 1e15$

## Approach 1: Math

For even indices, good numbers can only include $0, 2, 4, 6, 8$. For odd indices, $2 ,3, 5, 7$ are good. Given a string of length $n$, it has $n + 1 // 2$ even indices and $n // 2$ odd indices. Thefore, the number of good numbers is simply $(5 ^ {(n + 1) / 2}) * (4 ^ {(n / 2)})$. Since $n$ can be up to $10 ^ {15}$, built-in $pow$ will cause TLE. We need to use [Binary Exponentiation](../../tutorials/math/number-theory/binary-exponentiation) to optimize it.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def countGoodNumbers(self, n: int) -> int:
        M = 10 ** 9 + 7
        # Binary Exponentiation
        def fastpow(b, exp, m):
            res = 1
            while exp > 0:
                if exp & 1: res = (res * b) % m
                b = (b * b) % m
                exp >>= 1
            return res
        # even: 0, 2, 4, 6, 8
        # odd: 2, 3, 5, 7
        # ways: (5 ** (n + 1) // 2) * (4 ** (n // 2))
        return (fastpow(5, (n + 1) // 2, M) * fastpow(4, n // 2, M)) % M
```

</TabItem>
</Tabs>
