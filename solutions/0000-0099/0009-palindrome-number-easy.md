---
description: 'Author: @tostream | https://leetcode.com/problems/palindrome-number/'
---

import Authors from '@site/src/components/Authors';

# 0009 - Palindrome Number (Easy)

## Problem Link

https://leetcode.com/problems/palindrome-number/

## Problem Statement

Given an integer `x`, return `true` if `x` is palindrome integer.

An integer is a **palindrome** when it reads the same backward as forward.

* For example, `121` is a palindrome while `123` is not.

**Example 1:**

```
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
```

**Example 2:**

```
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
```

**Example 3:**

```
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
```

**Constraints:**

* `-2^31 <= x <= 2^31 - 1`

## Approach 1: Convert to string

Convert the integer value to string format and compare it one by one.

<Authors names="@wingkwong"/>

```python
class Solution:
    def isPalindrome(self, x: int) -> bool:
        #str: convert to string
        #[::-1]: read from the end
        return str(x) == str(x)[::-1]
```

## Approach 2: Calculation

Calculate the reversed number.

<Authors names="@wingkwong"/>

```python
class Solution:
    def isPalindrome(self, x: int) -> bool:
        in_num = x
        reverser = 0
        while in_num > 0:
            reverser = reverser * 10 + checker % 10
            in_num = in_num//10
        return reverser == x
```
