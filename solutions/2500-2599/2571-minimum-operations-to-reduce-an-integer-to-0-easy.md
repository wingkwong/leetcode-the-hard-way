---
description: 'Author: @wingkwong | https://leetcode.com/problems/minimum-operations-to-reduce-an-integer-to-0/'
---

# 2571 - Minimum Operations to Reduce an Integer to 0 (Easy) 

## Problem Link

https://leetcode.com/problems/minimum-operations-to-reduce-an-integer-to-0/

## Problem Statement

You are given a positive integer `n`, you can do the following operation **any** number of times:

- Add or subtract a **power** of `2` from `n`.

Return *the **minimum** number of operations to make*`n`*equal to*`0`.

A number `x` is power of `2` if `x == 2i` where `i >= 0`*.*

**Example 1:**

```
Input: n = 39
Output: 3
Explanation: We can do the following operations:
- Add 20 = 1 to n, so now n = 40.
- Subtract 23 = 8 from n, so now n = 32.
- Subtract 25 = 32 from n, so now n = 0.
It can be shown that 3 is the minimum number of operations we need to make n equal to 0.
```

**Example 2:**

```
Input: n = 54
Output: 3
Explanation: We can do the following operations:
- Add 21 = 2 to n, so now n = 56.
- Add 23 = 8 to n, so now n = 64.
- Subtract 26 = 64 from n, so now n = 0.
So the minimum number of operations is 3.
```

**Constraints:**

- `1 <= n <= 10^5`

## Approach 1: DP

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wingkwong"/>

```py
class Solution:
    def minOperations(self, n: int) -> int:
        # precompute power of 2
        p = {1 << i for i in range(20)}
        def dp(x):
            # reach 0 -> 0 operation
            if x == 0: return 0
            # if x is a power of 2, 
            # we need 1 operation (i.e. subtract itself)
            if x in p: return 1
            # otherwise we either add / subtract the lsb to x
            # e.g. 0111 -> 1000 -> 0000
            # e.g. 1001 -> 1000 -> 0000
            return min(dp(x + (x & -x)), dp(x - (x & -x))) + 1
        return dp(n)
```

</TabItem>
</Tabs>