---
description: >-
  Author: @wkw | https://leetcode.com/problems/count-integers-with-even-digit-sum/
---

# 2180 - Count Integers With Even Digit Sum (Easy)

## Problem Link

https://leetcode.com/problems/count-integers-with-even-digit-sum/

## Problem Statement

Given a positive integer `num`, return _the number of positive integers **less than or equal to**_ `num` _whose digit sums are **even**_.

The **digit sum** of a positive integer is the sum of all its digits.

**Example 1:**

```
Input: num = 4
Output: 2
Explanation:
The only integers less than or equal to 4 whose digit sums are even are 2 and 4.
```

**Example 2:**

```
Input: num = 30
Output: 14
Explanation:
The 14 integers less than or equal to 30 whose digit sums are even are
2, 4, 6, 8, 11, 13, 15, 17, 19, 20, 22, 24, 26, and 28.
```

**Constraints:**

- `1 <= num <= 1000`

## Approach 1: Brute Force

We try all numbers in $$[1, num]$$ to see its digit sum is even or not.

<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    int ds(int x) {
        int res = 0;
        while (x) {
            // get the last digit
            res += x % 10;
            // erase the last digit
            x /= 10;
        }
        return res;
    }
    int countEven(int num) {
        int ans = 0;
        // try all possible numbers and calculate its digit sum
        // add 1 to ans if it is even
        for (int i = 1; i <= num; i++) ans += ds(i) % 2 == 0;
        return ans;
    }
};
```
