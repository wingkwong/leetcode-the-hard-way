---
description: https://leetcode.com/problems/count-primes/
---

# 0204 - Count Primes

## Problem Statement

Given an integer `n`, return _the number of prime numbers that are strictly less than_ `n`.

**Example 1:**

```
Input: n = 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
```

**Example 2:**

```
Input: n = 0
Output: 0
```

**Example 3:**

```
Input: n = 1
Output: 0 
```

**Constraints:**

* `0 <= n <= 5 * 10^6`

## Approach 1: Sieve of Eratosthenes

See [Sieve of Eratosthenes](../../tutorials/math/number-theory/sieve-of-eratosthenes.md).

```cpp
class Solution {
public:
    vector<bool> seiveOfEratosthenes(const int n) {
      vector<bool> isPrime(n + 1, true);
      isPrime[0] = isPrime[1] = 0;
      for (int i = 2; i * i <= n; i++) {
        if (isPrime[i]) {
          for (int j = i * i; j <= n; j += i) {
            isPrime[j] = false;
          }
        }
      }
      return isPrime;
    }

    int countPrimes(int n) {
        if(n < 2) return 0;
        vector<bool> isPrime = seiveOfEratosthenes(n - 1);
        int cnt = 0;
        for(int i = 2; i < n; i++) cnt += isPrime[i] == true;
        return cnt;
    }
};
```
