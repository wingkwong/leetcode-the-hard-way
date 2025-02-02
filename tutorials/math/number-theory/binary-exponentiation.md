---
title: "Binary Exponentiation"
description: "Binary Exponentiation is also known as Exponentiation by Squaring."
hide_table_of_contents: true
keywords:
  - leetcode
  - tutorial
  - binary exponentiation
  - fast pow
  - algorithm
---

<TutorialCredits authors="@wingkwong"/>

## Overview

Binary Exponentiation is a method for efficiently calculating large powers of a number, such as $a^n$. Instead of using the naive approach of repeatedly multiplying the base number by itself, which has a time complexity of $O(n)$, binary exponentiation uses a technique called "exponentiation by squaring" to accomplish the same task in $O(log n)$ time complexity.

The basic idea behind binary exponentiation is that we can express $$a ^ n$$ as $$a * a * ... * a$$ but it is not efficient for a large $$a$$ and $$n$$. If we display the exponent in binary representation, says $13 = 1101_2$, then we have $$3 ^{13} = 3^8*3^4*3^1.$$ Supposing we have a sequence $$a ^ 1, a ^ 2, a ^4, ..., a^{\lfloor log_2 n\rfloor}$$, we can see the an element in the sequence is the square of previous element, i.e. $$3 ^ 4 = (3^2)^2$$. Therefore, to calculate $$3 ^ {13}$$, we just need to calculate $${\lfloor log_2 13\rfloor} = 3$$ times, i.e. ($1$ -> $4$ -> $8$). We skip $2$ here because the bit is not set. This approach gives us $$O(log n)$$ complexity.

To generalise it, for a positive integer $$n$$, we have

$
x^n = \begin{cases}
x \cdot (x^2)^{\frac{n - 1}{2}}, & \text{if } n \text{ is odd}\\
(x^2)^{\frac{n}{2}}, & \text{if } n \text{ is even.}
\end{cases}
$

## Implementation

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
long long fastpow(long long base, long long exp) {
  long long res = 1;
  while (exp > 0) {
    // if n is odd, a ^ n can be seen as a ^ (n / 2) * a ^ (n / 2) * a
    if (exp & 1) res *= base;
    // if n is even, a ^ n can be seen as a ^ (n / 2) * a ^ (n / 2)
    base *= base;
    // shift 1 bit to the right
    exp >>= 1;
  }
  return res;
}
```

</TabItem>

</Tabs>

In case you need to take mod during the calculation, we can do as follows.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
long long modpow(long long base, long long exp, long long mod) {
  base %= mod;
  long long res = 1;
  while (exp > 0) {
    if (exp & 1) res = (res * base) % mod;
    base = (base * base) % mod;
    exp >>= 1;
  }
  return res;
}
```

</TabItem>

</Tabs>

export const suggestedProblems = [
{
"problemName": "0050 - Pow(x, n)",
"difficulty": "Medium",
"leetCodeLink": "https://leetcode.com/problems/powx-n/",
"solutionLink": "../../../solutions/0000-0099/pow-x-n-medium"
},
]

<Table title="Suggested Problems" data={suggestedProblems} />
