---
description: 'Author: @wingkwong | https://leetcode.com/problems/ugly-number-iii/'
---

# 1201 - Ugly Number III (Medium)

## Problem Statement

An **ugly number** is a positive integer that is divisible by `a`, `b`, or `c`.

Given four integers `n`, `a`, `b`, and `c`, return the `nth` **ugly number**.

&#x20;

**Example 1:**

```
Input: n = 3, a = 2, b = 3, c = 5
Output: 4
Explanation: The ugly numbers are 2, 3, 4, 5, 6, 8, 9, 10... The 3rd is 4.
```

**Example 2:**

```
Input: n = 4, a = 2, b = 3, c = 4
Output: 6
Explanation: The ugly numbers are 2, 3, 4, 6, 8, 9, 10, 12... The 4th is 6.
```

**Example 3:**

```
Input: n = 5, a = 2, b = 11, c = 13
Output: 10
Explanation: The ugly numbers are 2, 4, 6, 8, 10, 11, 12, 13... The 5th is 10.
```

**Constraints:**

* `1 <= n, a, b, c <= 10^9`
* `1 <= a * b * c <= 10^18`
* It is guaranteed that the result will be in range `[1, 2 * 10^9]`.

## Approach 1: Inclusive-Exclusive + Binary Search

```cpp
class Solution {
public:
    int ok(long long n, long long a, long long b, long long c) {
        // numbers (1 to n) divisble by a = n / a
        // numbers (1 to n) divisble by b = n / b
        // numbers (1 to n) divisble by c = n / c
        // exclude overlapping counts for a and b = n / lcm(a, b)
        // exclude overlapping counts for b and c = n / lcm(b, c)
        // exclude overlapping counts for a and c = n / lcm(a, c)
        // include those covered by all a, b and c = n / lcm(a, lcm(b, c))  
        
        // Set theory Formula: 
        // a + b + c - a ∩ c - a ∩ b - b ∩ c + a ∩ b ∩ c
        return (int) n / a + n / b + n / c 
        - n / lcm(a, b)
        - n / lcm(b, c)
        - n / lcm(a, c)
        + n / lcm(a, lcm(b, c));
    }
    
    int nthUglyNumber(int n, int a, int b, int c) {
        // init possible range [1, 2 * 10 ^ 9]
        int l = 1, r = 2e9;
        while (l < r) {
            // get the middle one
            // for even number of elements, take the lower one
            int m = l + (r - l) / 2;
            // exclude m
            if (n > ok(m, a, b, c)) l = m + 1;
            // include m
            else r = m;
        }
        return l;
    }
};
```
