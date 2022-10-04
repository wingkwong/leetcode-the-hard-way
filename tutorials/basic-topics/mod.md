---
title: 'MOD (1e9 + 7)'
description: 'Mod 1e9+7'
hide_table_of_contents: true
draft: true
keywords:
  - leetcode
  - tutorial
  - MOD
---

<TutorialAuthors names="@tannudaral"/>

## Overview

Sometimes, the answer to a problem is a very large number but it is enough to output it "modulo m", i.e., the remainder when the answer is divided by m (for example, "modulo 1e9 + 7"). The idea is that even if the actual answer is very large, it suffices to use the data types int and long long. Many languages do not support large-integer arithmetic, so this method avoids integer overflow.

## MOD

The task of modulo operator `%`, also know as the remainder operator, is to give the remainder. We denote by x mod m, the remainder when x is divided by m. For example, $17\,mod\,5= 2$ because 17 = 3*5 + 2.

### Modular Arithmetic   
An important property of the modulo is that in addition, subtraction and multiplication, the remainder can be taken before the operation:  
#### 1. Addition  
$(a + b)\,mod\,m$ $=$ $(a\,mod\,m + b\,mod\,m)\,mod\,m$

#### 2. Subtraction  
Usually we want the remainder to always be between 0...m−1. However, in C++ and other languages, the remainder of a negative number is either zero or negative. An easy way to make sure there are no negative remainders is to add m to the result. This is only needed when there are subtractions in the code and the remainder may become negative. 

  $(a\,−\,b)\,mod\,m$ $=$ $(a \, mod\, m \,−\, b \,mod \,m\, + \,m)\, mod \,m$

#### 3. Multiplication  
$(a * b)\,mod\,m$ $=$ $(a\, mod \,m * b \,mod \,m) \,mod \,m$


#### 4. Division  
The modular division is completely different from modular addition, subtraction and multiplication. It also does not always exist. It requires a concept called the "modular multiplicative inverse". The modular multiplicative inverse of a number $a$ is the number $a^{−1}$ such that $a⋅a^{−1} \,mod\, m = 1$. You may notice that this is similar to the concept of a reciprocal, but here we don't want a fraction; we want an integer, specifically an integer between $0$ and $m−1$ inclusive.  

There are **two** faster ways to calculate the inverse: 
1. The extended GCD algorithm 
2. Fermat's little theorem

Though the extended GCD algorithm is more versatile and sometimes slightly faster, the Fermat's little theorem method is more popular, simply because it's almost "free" once you implement exponentiation which is what we'll cover here.  

Fermat's little theorem says that as long as the modulus m is a prime number ($10^9+7$ is prime) then $a^{m}\, mod\, m = a\, mod\, m$. Working backwards, $a^{m−1}\, mod\, m = a^{0}\, mod\, m = 1 = a ⋅ a^{m−2}\, mod\, m$, therefore the number we need is $a^{m−2}\, mod\, m$.

Hence, we can calculate the modular multiplicative inverse $a^{−1}$ using $a^{−1} = a^{m−2}\, mod\, m$ when $m$ is prime. We can now define the division operator as:

$(a\, /\, b) \,mod\, m$ $=$ $(a\, mod\, m\, * b^{-1} \,mod \,m)\, mod\, m$  

### Example 
Let's understand this with the factorial of a number program. The following code calculates n!, the factorial of n, modulo m:

```cpp
int factorial(int n){
    int M = 1e9+7;
    long long fact = 1;
    for (int i = 2; i <= n; ++i)
        fact = fact * i;    // WRONG APPROACH
                            // Here, fact may exceed 2^64-1
 
    return fact%M;
}
```
Thus, we can take the remainder after every operation and the numbers will never become too large.

```cpp
int factorial(int n){
    int M = 1e9+7;
    long long fact = 1;
    for (int i = 2; i <= n; ++i)
        fact = (fact * i) % M;    // Here, fact never
                                  // exceeds 10^9+7
 
    return fact;
}
```

## Why 1e9+7?

The number `1e9+7` fits nicely into a signed 32-bit integer. It is also the first 10-digit prime number. In some problems we need to compute the Modular Multiplicative Inverse and it helps very much that this number is prime. 

In fact any prime number less then 2^30 will be fine in order to prevent possible overflows. But this one can be easily written as `1e9+7`. This reasoning almost uniquely determined this number.