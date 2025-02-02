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

<TutorialCredits authors="@wkw"/>

## Overview

The Sieve of Eratosthenes is an algorithm used to find all prime numbers up to a given limit. It works by iteratively marking as composite (i.e., not prime) the multiples of each prime, starting with 2. The algorithm starts by creating a list of all integers from 2 to the limit. It then marks the first number, 2, as prime and removes all multiples of 2 from the list. The next unmarked number in the list is 3, which is also prime, so it marks it and removes all multiples of 3 from the list. This process continues until all numbers in the list have been marked as prime or composite. The remaining unmarked numbers are the prime numbers up to the given limit.

## Implementation

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
vector<bool> sieveOfEratosthenes(const int n) {
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

</TabItem>

</Tabs>

export const suggestedProblems = [ { "problemName": "0204 - Count Primes", "difficulty": "Medium", "leetCodeLink": "https://leetcode.com/problems/count-primes/", "solutionLink": "../../../solutions/0200-0299/count-primes" }, ]

<Table title="Suggested Problems" data={suggestedProblems} />
