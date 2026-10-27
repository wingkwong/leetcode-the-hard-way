---
description: 'Author: @wkw | https://leetcode.com/problems/binary-digit-score'
---

# 4092 - Binary Digit Score (Easy)

## Problem Link

https://leetcode.com/problems/binary-digit-score

## Problem Statement

You are given two integers `a` and `b`.

Let `s1` and `s2` be the number of **set bits** in the binary representations of `a` and `b`, respectively.

The **score** of these integers is defined as follows:

- If `s1 >= s2`, the score is `s1 * s2`.
- Otherwise, the score is `s2 / s1` using integer division.

Return an integer representing the score of `a` and `b`.

A **set bit** refers to a bit in the binary representation of a number that has a value of 1.

**Example 1:**

**Input:** a = 14, b = 6

**Output:** 6

**Explanation:**

- The binary representation of `a = 14` is `"1110"`, so `s1 = 3`.
- The binary representation of `b = 6` is `"110"`, so `s2 = 2`.
- Since `s1 > s2`, the score of `a` and `b` is `s1 * s2 = 3 * 2 = 6`.

**Example 2:**

**Input:** a = 5, b = 15

**Output:** 2

**Explanation:**

- The binary representation of `a = 5` is `"101"`, so `s1 = 2`.
- The binary representation of `b = 15` is `"1111"`, so `s2 = 4`.
- Since `s1 < s2`, the score of `a` and `b` is `s2 / s1 = 4 / 2 = 2`.

**Example 3:**

**Input:** a = 10, b = 12

**Output:** 4

**Explanation:**

- The binary representation of `a = 10` is `"1010"`, so `s1 = 2`.
- The binary representation of `b = 12` is `"1100"`, so `s2 = 2`.
- Since `s1 == s2`, the score of `a` and `b` is `s1 * s2 = 2 * 2 = 4`.

**Constraints:**

- `1 <= a, b <= 100`

## Approach 1: Bit Counting

Count the number of 1s in the binary representations of $a$ and $b$. Then compare the two counts: multiply them if the first count is greater than or equal to the second; otherwise, divide the second count by the first using integer division.

The time complexity is $O(1)$ and the space complexity is $O(1)$.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def calculateScore(self, a: int, b: int) -> int:
        s1, s2 = a.bit_count(), b.bit_count()
        return s1 * s2 if s1 >= s2 else s2 // s1
```

</TabItem>
</Tabs>