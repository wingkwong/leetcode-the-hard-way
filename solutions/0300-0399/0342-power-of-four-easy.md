---
description: 'Author: @wingkwong | https://leetcode.com/problems/power-of-four/'
tags: [Math, Bit Manipulation, Recursion]
---

# 0342 - Power of Four (Easy) 

## Problem Statement

Given an integer `n`, return *true if it is a power of four. Otherwise, return false*.

An integer `n` is a power of four, if there exists an integer `x` such that `n == 4x`.

**Example 1:**

```
Input: n = 16
Output: true
```

**Example 2:**

```
Input: n = 5
Output: false
```

**Example 3:**

```
Input: n = 1
Output: true
```

**Constraints:**

- `-2^31 <= n <= 2^31 - 1`

**Follow up:** Could you solve it without loops/recursion?

## Approach 1: Binary Search

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    bool isPowerOfFour(int n) {
	    // the idea is to use binary search to find x to see if 4 ^ x = n is true or false
        int l = 0, r = (int) log(pow(2, 31)) / log(4);
         while (l < r) {
            // get the middle one
            // for even number of elements, take the lower one
            int m = l + (r - l) / 2;
            // exclude m
            if (pow(4, m) < n) l = m + 1;
            // include m
            else r = m;
        }
		// check if 4 ^ l is n
        // if so, then n is a power of four, otherwise it is not
        return pow(4, l) == n;
    }
};
```

## Approach 2: Bit Manipulation

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    bool isPowerOfFour(int num) {
        // 4: 100
        // 16: 10000
        // observation: 
        // count of 1s is 1 and the number of trailing zeros is even
        return __builtin_popcount(num)==1 && // only 1 bit is set
              (__builtin_ctz(num)&1)==0;     // with even trailing zeros 
    }
};
```