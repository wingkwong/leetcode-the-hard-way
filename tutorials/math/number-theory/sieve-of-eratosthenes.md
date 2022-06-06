---
title: 'Sieve of Eratosthenes'
description: 'Sieve of Eratosthenes is a way of finding all prime numbers up to N (inclusive).'
hide_table_of_contents: true
keywords:
  - leetcode
  - tutorial
  - sieve of eratosthenes
  - algorithm
---

import TutorialAuthors from '@site/src/components/TutorialAuthors';
import Table from '@site/src/components/Table';

<TutorialAuthors names="@wingkwong"/>

## Overview

Sieve of Eratosthenes is a way of finding all prime numbers up to $$n$$ (inclusive).

First we mark all integers as true except 0 and 1. Then starting from 2, we mark out all multiples of 2 that are bigger than itself because they are composite. The next integer that is not marked out is 3 and it is prime. We mark out all multiples of 3 that are bigger than itself. Similarly, we search for the next integer $$k$$ that is not marked out and is prime, then mark out all multiples of $$k$$.

### C++ Implementation

```cpp
vector<bool> sieveOfEratosthenes(const int n) {
  assert(n >= 2 && "N must be greater or equal to 2");
  vector<bool> isPrime(n + 1, true);
  isPrime[0] = isPrime[1] = false;
  for (int i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      for (int j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }
  return isPrime;
}
```

export const suggestedProblems = [
  {
    "problemName": "0204 - Count Primes",
    "difficulty": "Medium",
    "LeetCodeLink": "https://leetcode.com/problems/count-primes/",
    "SolutionLink": "../../../solutions/0200-0299/count-primes"
  },
]

<Table title="Suggested Problems" data={suggestedProblems} />