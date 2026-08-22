---
description: 'Author: @wkw | https://leetcode.com/problems/check-divisibility-by-digit-sum-and-product'
tags: [Math]
---

# 3622 - Check Divisibility by Digit Sum and Product (Easy) 

## Problem Link

https://leetcode.com/problems/check-divisibility-by-digit-sum-and-product

## Problem Statement

You are given a positive integer `n`. Determine whether `n` is divisible by the **sum**of the following two values:

- The **digit sum** of `n` (the sum of its digits).
- The **digit** **product** of `n` (the product of its digits).

Return `true` if `n` is divisible by this sum; otherwise, return `false`.

**Example 1:**

**Input:** n = 99

**Output:** true

**Explanation:**

Since 99 is divisible by the sum (9 + 9 = 18) plus product (9 * 9 = 81) of its digits (total 99), the output is true.

**Example 2:**

**Input:** n = 23

**Output:** false

**Explanation:**

Since 23 is not divisible by the sum (2 + 3 = 5) plus product (2 * 3 = 6) of its digits (total 11), the output is false.

**Constraints:**

- `1 <= n <= 1e6`

## Approach 1: Simulation

We can simply simulate digit extraction using modulo and integer division. The helper function `ds` calculates the digit sum by repeatedly adding `n % 10`, while `dp` calculates the digit product by multiplying each extracted digit. After processing a digit, `n //= 10` removes it from the number. Once you get the idea, the code can be further simplified by combining them together.

Finally, the code adds the digit sum and digit product and checks whether the original $n$ is divisible by the result. It returns true when the remainder is zero and false otherwise. The time complexity is $O(log n)$, and the space complexity is $O(1)$.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def checkDivisibility(self, n: int) -> bool:
        def ds(n):
            res = 0
            while n > 0:
                res += n % 10
                n //= 10
            return res
        def dp(n):
            res = 1
            while n > 0:
                res *= n % 10
                n //= 10
            return res
        return n % (dp(n) + ds(n)) == 0
```

</TabItem>
</Tabs>