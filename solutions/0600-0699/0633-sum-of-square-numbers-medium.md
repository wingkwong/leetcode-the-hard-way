---
description: 'Author: @wingkwong | https://leetcode.com/problems/sum-of-square-numbers/'
---

# 0633 - Sum of Square Numbers (Medium)

## Problem Statement

Given a non-negative integer `c`, decide whether there're two integers `a` and `b` such that `a2 + b2 = c`.

**Example 1:**

```
Input: c = 5
Output: true
Explanation: 1 * 1 + 2 * 2 = 5
```

**Example 2:**

```
Input: c = 3
Output: false
```

**Constraints:**

* `0 <= c <= 2^31 - 1`

## Approach 1: Binary Search

Prerequisite: [Binary Search](../../tutorials/basic-topics/binary-search.md)

We can rewrite $$a ^ 2 + b ^ 2 = c$$ to $$b ^ 2 = c - a ^ 2$$ so that we can fix $$a$$ and then check if $$c - a ^ 2$$ is a perfect square. If so, we return `true`. If we couldn't find one at the end, return `false`.

To determine if `x` is a perfect square, we can use binary search to look for `[0, x]`. If $$x$$ is greater 2, the range is actually `[2, x / 2]`. In case you have solved [0367 - Valid Perfect Square (Easy)](https://wingkwong.gitbook.io/leetcode-the-hard-way/solutions/0300-0399/0367-valid-perfect-square-easy), we can use the same solution directly.

```cpp
class Solution {
public:
    // 0367 - Valid Perfect Square (Easy)
    bool isPerfectSquare(int num) {
        // init possible range
        // for num > 2, the range is actually [2, num / 2]
        long long l = 0, r = num;
        while (l < r) {
            long long m = l + (r - l) / 2;
            // exclude m
            if (num > m * m) l = m + 1;
            // include m
            else r = m;
        }
        // check if it is a perfect square
        return l * l == num;
    }
    
    bool judgeSquareSum(int c) {
        // a ^ 2 + b ^ 2 = c
        // b ^ 2 = c - a ^ 2
	// fix a 
        for (long long a = 0; a * a <= c; a++) {
	    // check if c - a ^ 2 is a perfect square or not
            if (isPerfectSquare(c - (int) a * a)) {
                return true;
            }
        }
        return false;
    }
};
```
