---
description: 'Author: @wingkwong | https://leetcode.com/problems/powx-n/'
---

import SolutionAuthor from '@site/src/components/SolutionAuthor';

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

* `-100.0 < x < 100.0`
* `-2^31 <= n <= 2^31 - 1`
* `-10^4 <= x^n <= 10^4`

## Approach 1: Binary Exponentiation

If the exponent $$n$$ is negative, we need to change it to positive exponent $$- n$$ and make the base  to $$1 / x$$. Then apply [Binary Exponentiation](../../tutorials/math/number-theory/binary-exponentiation).

<SolutionAuthor name="@wingkwong"/>

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
