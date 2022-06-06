---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options/
---

import SolutionAuthor from '@site/src/components/SolutionAuthor';

# 1359 - Count All Valid Pickup and Delivery Options (Hard)

## Problem Link

https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options/

## Problem Statement

Given `n` orders, each order consist in pickup and delivery services.

Count all valid pickup/delivery possible sequences such that delivery(i) is always after of pickup(i).

Since the answer may be too large, return it modulo 10^9 + 7.

**Example 1:**

```
Input: n = 1
Output: 1
Explanation: Unique order (P1, D1), Delivery 1 always is after of Pickup 1.
```

**Example 2:**

```
Input: n = 2
Output: 6
Explanation: All possible orders: 
(P1,P2,D1,D2), (P1,P2,D2,D1), (P1,D1,P2,D2), (P2,P1,D1,D2), (P2,P1,D2,D1) and (P2,D2,P1,D1).
This is an invalid order (P1,D2,P2,D1) because Pickup 2 is after of Delivery 2.
```

**Example 3:**

```
Input: n = 3
Output: 90
```

**Constraints:**

* `1 <= n <= 500`

## Approach 1: Math

If we just put all $$P$$ in a row, we would have $$N!$$ ways. It's a permutation with no repetition. The first choice has $$N$$ possibilities, and the next choice has $$N - 1$$ possibilities (as you cannot choose the first choice), and then $$N - 2$$ (as you cannot choose the previous two choices), $$N - 3$$ and so on.  Hence, we got $$N * (N - 1) * (N - 2) * .. * 1 = N!$$.

Then we need to think how to put $$D_i$$in some possible places. We know that$$D_i$$ must come after $$P_i$$. It's obvious that there is only one way to put $$D$$ for the last $$P$$. For the second $$D$$, we can put it right after the corresponding $$P$$ or put it to the left / right of the previous $$D$$. Hence, we have $$3$$ possible places to put. If you keep doing the same thing, you should find the number of ways to put $$D$$ is $$1 * 3 * 5 * .. * (2N - 1)$$.

Hence, the answer is $$N! * \sum_{i=1}^{N} (2 * i - 1)$$. Remember to take $$MOD$$ during the calculation.

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int countOrders(int n) {
        long long M = 1e9 + 7, ans = 1;
        for (int i = 1; i <= n; i++) {
            // number of ways to put P: N!
            (ans *= i) %= M;
            // number of ways to put D after P: 1 * 3 * 5 * .. * (2N - 1)
            (ans *= (2 * i - 1)) %= M;
        }
        return ans;
    }
};
```
