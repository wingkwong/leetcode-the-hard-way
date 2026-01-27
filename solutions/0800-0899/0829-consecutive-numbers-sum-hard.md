---
description: 'Author: @wkw | https://leetcode.com/problems/consecutive-numbers-sum/'
---

# 0829 - Consecutive Numbers Sum (Hard)

## Problem Link

https://leetcode.com/problems/consecutive-numbers-sum/

## Problem Statement

Given an integer `n`, return _the number of ways you can write_ `n` _as the sum of consecutive positive integers._

**Example 1:**

```
Input: n = 5
Output: 2
Explanation: 5 = 2 + 3
```

**Example 2:**

```
Input: n = 9
Output: 3
Explanation: 9 = 4 + 5 = 2 + 3 + 4
```

**Example 3:**

```
Input: n = 15
Output: 4
Explanation: 15 = 8 + 7 = 4 + 5 + 6 = 1 + 2 + 3 + 4 + 5
```

**Constraints:**

- `1 <= n <= 10^9`

## Approach: Math

The first observation is that $$n$$itself is one of the answer. We can define $$ans = 1$$.

Let $$x$$ be the first number of the sequence, then we should have

$$
n = x + (x + 1) + (x + 2) + ... + (x + (k - 1))
$$

We can arrange the formula. First there are $$k$$ terms of $$x$$ so we can just multiply them together. The remaining sum is just $$0 + 1 + 2 + ... + (k - 1)$$ which is $$k * (k - 1) / 2$$. Why? We can get that from sum of $$n$$ terms in Arithmetic Progress (A.P.) formula

$$
S = (n / 2) * (2 * a + (n - 1) * d)
$$

where $$a$$is the first term and $$d$$ is the common difference.

We can further transform from

$$
S = (n / 2) * (a + a + (n - 1) * d)
$$

to the following expression

$$
S = (n / 2) * (a * l)
$$

where $$l$$is the last term and it is equivalent to $$a + (n - 1) * d$$.

Back to our problem, from $$0 + 1 + 2 + ... + (k - 1)$$, we can see that the first term is 0 and and last term is $$(k - 1)$$. Therefore, we can know that $$0 + 1 + 2 + ... + (k - 1) = (k / 2) * (0 + (k - 1))  = k * (k - 1) / 2$$.

Now we have $$k * x = n - k * (k - 1) / 2$$, which means we can construct a sum of $$n$$using $$k$$terms starting from $$x$$ if $$n - k * (k - 1) / 2$$ is a multiple of $$k$$. We can iterate $$k$$and check if this statement is true or not. The next problem would be "What is the range of $$k$$?".

Since $$n$$itself is already considered, so we need to start $$k$$ from 2. From the above formula, $$n - k * (k - 1) / 2$$ needs to be greater than 0.

$$
n - k * (k - 1) / 2 > 0
$$

$$
k * (k - 1) < 2 * n
$$

The upper bound for $$k$$ approximately would be around $$\sqrt {2 * n + k}$$. Therefore, we iterate $$k$$ from $$2$$ to $$\sqrt {2 * n + k}$$ to check if $$n - k * (k - 1) / 2$$ is a multiple of $$k$$. If so, it means we have one sequence so we increase the answer by $$1$$.

<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    int consecutiveNumbersSum(int n) {
        int ans = 1;
        // n = x + (x + 1) + (x + 2) + ... + (x + (k - 1))
        // n = k * x + k * (k - 1) / 2
        // k * x = n - k * (k - 1) / 2
        // n - k * (k - 1) / 2 > 0
        // k * (k - 1) < 2 * n
        // ~= k * k < 2 * n + k
        for (int k = 2; k < sqrt(2 * n + k); k++) {
            ans += (n - (k * (k - 1) / 2)) % k == 0;
        }
        return ans;
    }
};
```
