---
description: 'Author: @wingkwong | https://leetcode.com/problems/add-two-integers/'
---

import SolutionAuthor from '@site/src/components/SolutionAuthor';

# 2235 - Add Two Integers (Easy)

## Problem Link

https://leetcode.com/problems/add-two-integers/

## Problem Statement

Given two integers `num1` and `num2`, return _the **sum** of the two integers_.

**Example 1:**

```
Input: num1 = 12, num2 = 5
Output: 17
Explanation: num1 is 12, num2 is 5, and their sum is 12 + 5 = 17, so 17 is returned.
```

**Example 2:**

```
Input: num1 = -10, num2 = 4
Output: -6
Explanation: num1 + num2 = -6, so -6 is returned.
```

**Constraints:**

* `-100 <= num1, num2 <= 100`

## Approach 1: A + B

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int sum(int num1, int num2) {
        return num1 + num2;
    }
};
```

## Approach 2: Half Adder

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int sum(int num1, int num2) {
        return num2 == 0 ? num1 : sum(num1 ^ num2, (unsigned) (num1 & num2) << 1);
    }
};
```

## Approach 3: Log & Exp

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int sum(int num1, int num2) {
        return log(exp(num1) * exp(num2)));
    }
};
```
