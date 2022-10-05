---
title:'Count-Primes'
description: 'Author: @Vidhan | https://leetcode.com/problems/count-primes/'
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

* `0 <= n <= 5 * 10^6`

 ## Approach 1:Brute Force Method

In this approach, we will check each number starting from 2 to n that each number is prime or not . If the number is prime we will increase our count by 1 else we continue with the next number.


The approach here to check a number is prime or not(assuming number to be x) is to iterate from 1 to x and keep count of factors of x .If the factors is equal to <u>two</u> i.e 1 and x itself ,then number is prime and if factors are more than two than its not a prime number. 

### Time Complexity-O(N<sup>2</sup> )
### Space Complexity-O(1) 


```cpp
  class Solution {
public:
     int isPrime(int n) {
      
      int factors=0;
      for(int i=1;i<=n;i++)
      {
        if(n%i==0)
          factors++;
      }
      if(factors==2)
         return true ;
      else
         return false;
    }

    int countPrimes(int n) {
        if(n < 2) return 0;
        int cnt=0;
        for(int i=2;i<=n;i++)
        {
          if(isPrime(i))
            cnt++;
        }
        return cnt;
    }
 ``` 
```example
 Example 1

 Input n=10

 Here i goes from  2 to 10 
It calls isPrime() every time from 2 to 10 and in isPrime() it goes from 2 to i again and final result is passed and count is incremented depending upon that and returned. 
```

## Approach 2: Sieve of Eratosthenes

Sieve of Eratosthenes is a way of finding all prime numbers up to n
(inclusive).

First we mark all integers as true except 0 and 1. Then starting from 2, we mark out all multiples of 2 that are bigger than itself because they are composite. The next integer that is not marked out is 3 and it is prime. We mark out all multiples of 3 that are bigger than itself. Similarly, we search for the next integer kk that is not marked out and is prime, then mark out all multiples of kk.

<SolutionAuthor name="@wingkwong"/>

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
