---
title: 'Binary Exponentiation'
description: 'Author: @wingkwong'
hide_table_of_contents: true
---

> This tutorial is written by @wingkwong

Binary Exponentiation is also known as Exponentiation by Squaring or even called Fast Pow in some CP templates. It is used to calculate $$a ^ n$$ using only $$O(logn)$$ multiplications instead of $$O(n)$$using naive approach.

We can express $$a ^ n$$as $$a * a * ... * a$$ but it is not efficient for a large $$a$$ and $$n$$. If we display the exponent in binary representation, says 13 = 1101, then we have $$3 ^{13} = 3^{1101} = 3^8*3^4*3^1.$$ Supposing we have a sequence $$a ^ 1, a ^ 2, a ^4, ..., a^{\lfloor log_2 n\rfloor}$$, we can see the an element in the sequence is the square of previous element, i.e. $$3 ^ 4 = (3^2)^2$$. Therefore, to calculate $$3 ^ {13}$$, we just need to calculate $${\lfloor log_2 13\rfloor} = 3$$ times, i.e. (1 -> 4 -> 8). We skip 2 here because the bit is not set. This approach gives us $$O(log n)$$ complexity.&#x20;

To generalise it, for a positive integer $$n$$, we have

![image](https://user-images.githubusercontent.com/35857179/168304432-fa9ac8bb-0eb9-49d9-bdcf-5e3509c1f835.png)

### C++ Implementation

```cpp
long long fastpow(long long base, long long exp) {
  long long res = 1;
  while (exp > 0) {
    // if n is odd, a ^ n can be seen as a ^ (n / 2) * a ^ (n / 2) * a
    if (exp & 1) res *= base;
    // if n is even, a ^ n can be seen as a ^ (n / 2) * a ^ (n / 2)
    base *= base;
    exp >>= 1;
  }
  return res;
}
```

In case you need to take mod.&#x20;

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

### Suggested Problems

* [0050 - Pow(x, n) (Medium)](../../../solutions/0000-0099/pow-x-n-medium)
