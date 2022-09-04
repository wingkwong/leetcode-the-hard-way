---
description: 'Author: @wingkwong | https://leetcode.com/problems/number-of-ways-to-reach-a-position-after-exactly-k-steps/'
---

# 2400 - Number of Ways to Reach a Position After Exactly k Steps (Medium) 

## Problem Statement

You are given two **positive** integers `startPos` and `endPos`. Initially, you are standing at position `startPos` on an **infinite** number line. With one step, you can move either one position to the left, or one position to the right.

Given a positive integer `k`, return *the number of **different** ways to reach the position*`endPos`*starting from*`startPos`*, such that you perform **exactly***`k`*steps*. Since the answer may be very large, return it **modulo** `109 + 7`.

Two ways are considered different if the order of the steps made is not exactly the same.

**Note** that the number line includes negative integers.

**Example 1:**

```
Input: startPos = 1, endPos = 2, k = 3
Output: 3
Explanation: We can reach position 2 from 1 in exactly 3 steps in three ways:
- 1 -> 2 -> 3 -> 2.
- 1 -> 2 -> 1 -> 2.
- 1 -> 0 -> 1 -> 2.
It can be proven that no other way is possible, so we return 3.
```

**Example 2:**

```
Input: startPos = 2, endPos = 5, k = 10
Output: 0
Explanation: It is impossible to reach position 5 from position 2 in exactly 10 steps.
```

**Constraints:**

- `1 <= startPos, endPos, k <= 1000`

## Approach 1: nCr

<SolutionAuthor name="@wingkwong"/>

```cpp
struct comb {
 public:
  int MOD = 1e9 + 7;
  vector<long long> fac, finv, inv;
  comb(int mxN) {
    fac.resize(mxN);
    finv.resize(mxN);
    inv.resize(mxN);
    fac[0] = fac[1] = 1;
    finv[0] = finv[1] = 1;
    inv[1] = 1;
    for (int i = 1; i < mxN - 1; i++) {
      fac[i + 1] = fac[i] * (i + 1) % MOD;
      inv[i + 1] = MOD - inv[MOD % (i + 1)] * (MOD / (i + 1)) % MOD;
      finv[i + 1] = finv[i] * inv[i + 1] % MOD;
    }
  }

  long long ncr(long long n, long long k) {
    if (k < 0 || n < k) return 0;
    long long res = 1;
    res *= fac[n] * finv[k] % MOD * finv[n - k] % MOD;
    return res;
  }
};
class Solution {
public:
    int numberOfWays(int startPos, int endPos, int k) {
        int MOD = 1e9 + 7;
        // init comb
        // see constraints: 1 <= startPos, endPos, k <= 1000
        comb c = comb(1005);
        // if (startPos + endPos) and k have different parity, then return 0
        // otherwise we can use comb to get k choose (endPos - startPos + k) / 2
        // it can also be k choose k - (endPos - startPos + k) / 2)
        // assuming endPos >= startPos, and we know
        // left + right = k -- (1)
        // right - left = endPos - startPos -- (2)
        // (1) + (2)
        // left + right - left + right = k + endPos - startPos
        // 2 * right = endPos - startPos + k
        // right = (endPos - startPos + k) / 2
        // in other word, left would be k - (endPos - startPos + k) / 2)
        return (((startPos + endPos) ^ k) & 1) ? 0 : c.ncr(k, (endPos - startPos + k) / 2) % MOD;
    }
};
```

<SolutionAuthor name="@wingkwong"/>

```py
class Solution:
    def numberOfWays(self, startPos: int, endPos: int, k: int) -> int:
        MOD = 10 ** 9 + 7
        # if (startPos + endPos) and k have different parity, then return 0
        # otherwise we can use comb to get k choose (endPos - startPos + k) / 2
        # it can also be k choose k - (endPos - startPos + k) / 2)
        # assuming endPos >= startPos, and we know
        # left + right = k -- (1)
        # right - left = endPos - startPos -- (2)
        # (1) + (2)
        # left + right - left + right = k + endPos - startPos
        # 2 * right = endPos - startPos + k
        # right = (endPos - startPos + k) / 2
        # in other word, left would be k - (endPos - startPos + k) / 2)
        if (startPos + endPos) % 2 != k % 2:
            return 0
        else:
            return comb(k, (endPos - startPos + k) // 2) % MOD
```