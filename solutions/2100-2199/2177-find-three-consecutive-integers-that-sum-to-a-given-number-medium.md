---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/find-three-consecutive-integers-that-sum-to-a-given-number/
---

# 2177 - Find Three Consecutive Integers That Sum to a Given Number (Medium)

## Problem Statement

Given an integer `num`, return _three consecutive integers (as a sorted array) that **sum** to_ `num`. If `num` cannot be expressed as the sum of three consecutive integers, return _an **empty** array._

**Example 1:**

```
Input: num = 33
Output: [10,11,12]
Explanation: 33 can be expressed as 10 + 11 + 12 = 33.
10, 11, 12 are 3 consecutive integers, so we return [10, 11, 12].
```

**Example 2:**

```
Input: num = 4
Output: []
Explanation: There is no way to express 4 as the sum of 3 consecutive integers.
```

**Constraints:**

* `0 <= num <= 10^15`

## Approach 1: Math

We can express it as $$n + (n + 1) + (n + 2) = num$$ and find what $$n$$ is.&#x20;

$$
n + (n + 1) + (n + 2) = num
$$

$$
3 * n + 3 = num
$$

$$
n = (num - 3) / 3
$$

If $$(num - 3)$$ is not divisible by $$3$$, then return empty array. Otherwise, calculate $$n$$ and return $$n$$, $$n + 1$$, and $$n + 2$$.

```cpp
class Solution {
public:
    vector<long long> sumOfThree(long long num) {
        num -= 3;
        if (num % 3 == 0) {
            long long n = num / 3;
            return {n, n + 1, n + 2};
        }
        return {};
    }
};
```
