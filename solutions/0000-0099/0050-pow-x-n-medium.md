---
description: 'Author: @wkw, @ColeB2 | https://leetcode.com/problems/powx-n/'
tags: [Math, Recursion]
---

# 0050 - Pow(x, n) (Medium)

## Problem Link

https://leetcode.com/problems/powx-n/

## Problem Statement

Implement [pow(x, n)](http://www.cplusplus.com/reference/valarray/pow/), which calculates `x` raised to the power `n` (i.e., `x^n`).

**Example 1:**

```
Input: x = 2.00000, n = 10
Output: 1024.00000
```

**Example 2:**

```
Input: x = 2.10000, n = 3
Output: 9.26100
```

**Example 3:**

```
Input: x = 2.00000, n = -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25
```

**Constraints:**

- `-100.0 < x < 100.0`
- `-2^31 <= n <= 2^31 - 1`
- `-10^4 <= x^n <= 10^4`

## Approach 1: Binary Exponentiation

If the exponent $$n$$ is negative, we need to change it to positive exponent $$- n$$ and make the base to $$1 / x$$. Then apply [Binary Exponentiation](../../tutorials/math/number-theory/binary-exponentiation).

Time Complexity: $$O(log n)$$ instead of calculating $$x * x$$, $$n$$ times. We can utilize binary exponentiation to reduce the number of calculations to $$log n$$ time.

Space Complexity: $$O(1)$$, we can perform it iteratively, with constant extra space.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    double myPow(double x, int N) {
        long long n = N;
        if (n < 0) n = -n, x = 1 / x;
        // Binary Exponentiation
        double ans = 1;
        if (n == 0) return 1;
        while (n > 0) {
            if(n & 1) ans *= x;
            x *= x;
            n >>= 1;
        }
        return ans;
    }
};
```

</TabItem>

<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def myPow(self, x: float, n: int) -> float:
        # negative n --> adjust our starting x and n. So the exponent
        # is positive, and the x value is 1/x
        if (n < 0):
            n = -n
            x = 1 / x
        # initialize our running answer, num, as 1.
        num = 1
        # while we have an exponent:
        while n > 0:
            # if exponent is odd ie: n % 2 == 1:
            if n & 1:
                # multiply answer by current x value.
                num *= x
            # multiply x value, by itself.
            x *= x
            # integer division --> n = n // 2
            n >>= 1
        return num
```

</TabItem>
</Tabs>
