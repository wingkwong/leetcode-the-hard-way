---
description: 'Author: @wingkwong | https://leetcode.com/problems/greatest-common-divisor-of-strings/'
tags: [Math, String]
---

# 1071 - Greatest Common Divisor of Strings (Easy) 

## Problem Link

https://leetcode.com/problems/greatest-common-divisor-of-strings/

## Problem Statement

For two strings `s` and `t`, we say "`t` divides `s`" if and only if `s = t + ... + t` (i.e., `t` is concatenated with itself one or more times).

Given two strings `str1` and `str2`, return *the largest string*`x`*such that*`x`*divides both*`str1`*and*`str2`.

**Example 1:**

```
Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
```

**Example 2:**

```
Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"
```

**Example 3:**

```
Input: str1 = "LEET", str2 = "CODE"
Output: ""
```

**Constraints:**

- `1 <= str1.length, str2.length <= 1000`
- `str1` and `str2` consist of English uppercase letters.

## Approach 1: TBC

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wingkwong"/>

```py
class Solution:
    def gcdOfStrings(self, str1: str, str2: str) -> str:
        # if str1 + str2 == str2 + str1 is true, that means they have the same divisor
        # see example 1: "ABCABC" + "ABC" = "ABC" + "ABCABC"
        # if there is no such divisor, then return ""
        # otherwise, we can use gcd to find the lengths
        # the answer is either 
        # - str1[0 .. g] or 
        # - str2[0 .. g]
        # where g is the gcd of their length
        return "" if str1 + str2 != str2 + str1 else str1[:gcd(len(str1), len(str2))]
```

</TabItem>
</Tabs>