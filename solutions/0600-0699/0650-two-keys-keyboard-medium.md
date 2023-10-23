---
description: 'Author: @Ishwarendra | https://leetcode.com/problems/2-keys-keyboard/'
tags: ['Prime Factor', 'Math']
---

# 0650 - 2 Keys Keyboard

## Problem Link

https://leetcode.com/problems/2-keys-keyboard/

## Problem Statement

There is only one character `'A'` on the screen of a notepad. You can perform one of two operations on this notepad for each step:

* Copy All: You can copy all the characters present on the screen (a partial copy is not allowed).
* Paste: You can paste the characters which are copied last time.

Given an integer `n`, return the minimum number of operations to get the character `'A'` exactly `n` times on the screen.

**Example 1:**

```
Input: n = 3
Output: 3
Explanation: Initially, we have one character 'A'.
In step 1, we use Copy All operation.
In step 2, we use Paste operation to get 'AA'.
In step 3, we use Paste operation to get 'AAA'.
```

**Example 2:**

```
Input: n = 1
Output: 0
```

**Constraints:**

* $1 \leq n \leq 1000$

## Approach 1: Prime Factorization

If we want to get $p$ `'A'` on screen, where $p$ is a prime number, then we have only 1 option. Copy the initial `'A'` on screen and paste it $(p - 1)$ times. We cannot make $p$ in any other way.

Now instead of a prime $p$, we want `'A'` to appear $p_1 \cdot p_2$ times on screen where $p_1$ and $p_2$ are prime numbers. In this case, we can first make $p_1$ primes using the approach explained in last paragraph. After this, we can use `Copy All` operation once and `Paste` operation $p_2 - 1$ times. Thus, total operation $= (1 + p_1 - 1 + 1 + p_2 - 1) = p_1 + p_2$. If $p_2$ is $2$ then pasting twice and copy once and paste once have same operation count. In all other case, our method is better than pasting all $1$.

What if we want `'A'` to appear $p_1 \cdot p_2 \cdot p_3$ times, where all $p_i$ are prime? We can first get $p_1 \cdot p_2$ `'A'` on screen using approach explained in last para and then use `Copy All` operation once and `Paste` operation $p_3 - 1$ times. Thus total operation is $p_1 + p_2 + 1 + (p_3 - 1) = p_1 + p_2 + p_3$. 

We can extend it to any number of primes. Thus, the answer to problem is nothing but sum of all prime factors of $n$.

<SolutionAuthor name="@Ishwarendra"/>

```cpp
class Solution {
  vector<int> getPrimeFactors(int n) {
    vector<int> prime_factors;

    for (int i = 2; i * i <= n; i++) { 
      while (n % i == 0) {
        prime_factors.emplace_back(i);
        n /= i;
      }
    }

    if (n > 1) prime_factors.emplace_back(n);
    return prime_factors;
  }
public:
    int minSteps(int n) {
      auto pf = getPrimeFactors(n);
      return accumulate(begin(pf), end(pf), 0);
    }
};
```

- **Time Complexity:** $O(\sqrt{n})$.
- **Space Complexity:** $O(log(n))$, as we are storing prime factor of $n$.