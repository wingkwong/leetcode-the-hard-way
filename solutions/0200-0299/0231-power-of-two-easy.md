---
description: 'Author: @wingkwong | https://leetcode.com/problems/power-of-two/'
---

# 0231 - Power of Two (Easy)

## Problem Link

https://leetcode.com/problems/power-of-two/

## Problem Statement

Given an integer `n`, return _`true` if it is a power of two. Otherwise, return `false`_.

An integer `n` is a power of two, if there exists an integer `x` such that `n == 2^x`.

**Example 1:**

```
Input: n = 1
Output: true
Explanation: 2^0 = 1
```

**Example 2:**

```
Input: n = 16
Output: true
Explanation: 2^4 = 16
```

**Example 3:**

```
Input: n = 3
Output: false
```

**Constraints:**

* `-2^31 <= n <= 2^31 - 1`

**Follow up:** Could you solve it without loops/recursion?

## Approach 1: Bit Manipulation

It's obvious to see that the answer is `false` if $n <= 0$. If $n$ is positive, a power of two would only have $1$ bit set. We can use $n \& (n-1)$ which is a common trick to remove the rightmost set bit. If it's a power of 2, the only set bit would be removed, hence the result would be $0$. Otherwise, even we remove the rightmost set bit, the value wont be $0$.

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    bool isPowerOfTwo(int n) {
        // 1. check if it is a positive number
        // 2. check the value is 0 after removing the rightmost bit
        return n > 0 && !(n & (n - 1));
    }
};
```