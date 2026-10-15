---
description: 'Author: @wkw | https://leetcode.com/problems/count-primes/'
---

# 0204 - Count Primes

## Problem Link

https://leetcode.com/problems/count-primes/

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

- `0 <= n <= 5 * 10^6`

## Approach 1: Sieve of Eratosthenes

Create a boolean array for the integers from `0` to `n - 1`. Initially assume each integer is prime, except `0` and `1`. For each remaining prime `p`, mark its multiples as composite, starting at `p * p`. Smaller multiples have already been marked by a smaller prime factor.

Only process candidates while `p * p < n`: every composite number below `n` has a prime factor smaller than `sqrt(n)`. After marking the composites, count the entries still marked prime. For example, below `10`, the remaining numbers are `2`, `3`, `5`, and `7`, so the answer is `4`.

The sieve takes $O(n \log \log n)$ time and $O(n)$ space. The final counting pass takes $O(n)$ time. Return `0` immediately when `n < 2`.

See [Sieve of Eratosthenes](/tutorials/math/number-theory/sieve-of-eratosthenes/) for the full tutorial.

<SolutionAuthor name="@wkw"/>

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
