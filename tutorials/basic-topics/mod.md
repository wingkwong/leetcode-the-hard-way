---
title: 'MOD (1e9 + 7)'
description: 'Mod 1e9+7'
hide_table_of_contents: false
keywords:
  - leetcode
  - tutorial
  - MOD
---

<TutorialAuthors names="@tannudaral"/>

## Overview

When the answer to a problem is a very large number, problem setters expect you to output it "modulo $m$", that is, the remainder after dividing the answer by $m$ (for example, "modulo $1e9 + 7$"). So if the actual answer is very large, with the use of modulo $m$, it would be sufficient to use the data types int and long long. Since many languages do not support large-integer arithmetic, this method avoids integer overflow.

The task of modulo operator $\%$, also know as the remainder operator, is to give the remainder. We denote it by $x\,mod\,m$, the remainder when $x$ is divided by $m$. For example, $17$ $mod$ $5$ $=$ $2$ because $17$ $=$ $3*5 + 2$.

## Modular Arithmetic

An important property of the modulo is that in addition, subtraction and multiplication, the remainder can be taken before the operation:  

### Addition

$(a + b)\,mod\,m$ $=$ $(a\,mod\,m + b\,mod\,m)\,mod\,m$

### Subtraction

The remainder should usually fall between $0....m−1$. However, in C++ and other languages, a negative number's remainder is either zero or negative. An easy way to make sure there are no negative remainders is to add m to the result. It is only needed when there are subtractions in the code and the remainder may become negative.

$(a\,−\,b)\,mod\,m$ $=$ $(a\,mod\,m\, − \,b\,mod\,m\,+\,m)\,mod\,m$

### Multiplication

$(a * b)\,mod\,m$ $=$ $(a\,mod\,m * b\,mod\,m)\,mod\,m$

### Division

The modular division is completely different from modular addition, subtraction and multiplication. It also does not always exist. It requires a concept called the "Modular Multiplicative Inverse". The modular multiplicative inverse of a number $a$ is the number $a^{−1}$ such that $a ⋅ a^{−1} \,mod\, m = 1$. You may notice that this is similar to the concept of a reciprocal of a number, but here we don't want a fraction; we want an integer, specifically an integer between $0$ and $m−1$ inclusive.  

There are **two** faster ways to calculate the inverse: 

- Extended GCD algorithm 
- Fermat's little theorem

The extended GCD algorithm may be more versatile and sometimes faster, but Fermat's little theorem method is more popular, since it's almost free once you implement exponentiation, which we will cover here. 

Fermat's little theorem says that provided the modulus m is a prime number ($10^9+7$ is prime) then $a^{m}\,mod\,m=a\,mod\,m$. Working backwards, $a^{m−1}\,mod\,m = 1 = a ⋅ a^{m−2}\, mod\, m$, therefore the number we need is $a^{m−2}\, mod\, m$.

Hence, we can calculate the modular multiplicative inverse $a^{−1}$ using $a^{−1} = a^{m−2}\, mod\, m$ when $m$ is prime. We can now define the division operator as:

$$
(a\, /\, b) \,mod\, m = (a\, mod\, m\, * b^{-1} \,mod \,m)\, mod\, m
$$

## Example 

Let's understand this with the factorial of a number program. The following code calculates $n!$, the factorial of $n$, modulo $m$:

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
int factorial(int n) {
    int M = 1e9 + 7;
    long long fact = 1;
    for (int i = 2; i <= n; i++) {
        // WRONG APPROACH
        // Here, fact may exceed 2 ^ 64 - 1
        fact = fact * i;                 
    }           
    return fact % M;
}
```

</TabItem>
</Tabs>

Thus, we can take the remainder after every operation and the numbers will never become too large.

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
int factorial(int n) {
    int M = 1e9 + 7;
    long long fact = 1;
    for (int i = 2; i <= n; i++) {
        // Here, fact never exceeds 10 ^ 9 + 7
        fact = (fact * i) % M;
    }
 
    return fact;
}
```

</TabItem>
</Tabs>

## Why 1e9 + 7?

The number $1e9 + 7$ fits nicely into a signed 32-bit integer. It is also the first 10-digit prime number. In some problems we need to compute the Modular Multiplicative Inverse and it helps very much that this number is prime. 

In fact any prime number less then $2^{30}$ will be fine in order to prevent possible overflows. But this one can be easily written as $1e9 + 7$. This reasoning almost uniquely determined this number.

## References

1. [Competitive Programmer's Handbook](https://cses.fi/book/book.pdf)
2. [Fermat's Little Theorem](https://en.wikipedia.org/wiki/Fermat%27s_little_theorem) 
