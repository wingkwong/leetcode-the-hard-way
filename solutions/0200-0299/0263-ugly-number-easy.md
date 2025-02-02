---
description: 'Author: @Ishwarendra | https://leetcode.com/problems/ugly-number/'
tags: ['Prime Factor', 'Math']
---

# 0263 - Ugly Number

## Problem Link

https://leetcode.com/problems/ugly-number/

## Problem Statement

An **ugly number** is a positive integer whose prime factors are limited to `2`, `3`, and `5`.

Given an integer `n`, return `true` if `n` is an **_ugly number._**

**Example 1:**

```
Input: n = 6
Output: true
Explanation: 6 = 2 × 3
```

**Example 2:**

```
Input: n = 1
Output: true
Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.
```

**Example 3:**

```
Input: n = 14
Output: false
Explanation: 14 is not ugly since it includes the prime factor 7.
```

**Constraints:**

- $-2^{31} \leq n \leq 2^{31} - 1$

## Approach 1: Brute Force

Remove all power of $2$ from $n$ by dividing it by $2$ until $n$ is no longer divisible by $2$. Repeat the same for $3$ and $5$. If $n$ becomes $1$ then it doesn't have any prime factor other than these three, thus it is an **ugly number**. Otherwise $n$ is not an ugly number.

<SolutionAuthor name="@Ishwarendra"/>

```cpp
class Solution {
public:
  bool isUgly(int n) {
    // Since ugly numbers are positive
    if (n <= 0) return false;

    array<int, 3> nums {2, 3, 5};

    for (int num : nums) {
      while (n % num == 0) n /= num;
    }

    return n == 1;
  }
};
```

- **Time Complexity:** $O(log(n))$.
- **Space Complexity:** $O(1)$.
