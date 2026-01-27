---
description: 'Author: @wkw, @vigneshshiv | https://leetcode.com/problems/greatest-common-divisor-of-strings/'
tags: [Math, String]
---

# 1071 - Greatest Common Divisor of Strings (Easy)

## Problem Link

https://leetcode.com/problems/greatest-common-divisor-of-strings/

## Problem Statement

For two strings `s` and `t`, we say "`t` divides `s`" if and only if `s = t + ... + t` (i.e., `t` is concatenated with itself one or more times).

Given two strings `str1` and `str2`, return _the largest string_`x`_such that_`x`_divides both_`str1`_and_`str2`.

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

## Approach 1: Optimal Solution - String equals with GCD

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

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

<TabItem value="java" label="java">
<SolutionAuthor name="@vigneshshiv"/>

```java
class Solution {

    /**
     * m - Str1, n - str2
     *
     * Time complexity - O(m + n)
     * Space complexity - O(1)
     */
    public String gcdOfStrings(String str1, String str2) {
        if (!Objects.equals(str1 + str2, str2 + str1)) {
            return "";
        }
        return str1.substring(0, gcd(str1.length(), str2.length()));
    }

    private int gcd(int a, int b) {
        if (b == 0) return a;
        return gcd(b, a % b);
    }
}
```

</TabItem>
</Tabs>

## Approach 2: Substring Division

As stated in the problem, `t` divides `s` which means length of `t` is either `equal` or `factor` of `t` & `s`.

First, iterate over the smallest string `min(t, s)`, use the `index` to substring(0, index) and divide both `s` & `t` and if there's no reminder then apply factor (no. of times) with str1 and str2 to find string equals.

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
class Solution {

    /**
     * m - Str1, n - str2
     *
     * Time complexity - O(min(m, n) * (m + n))
     * Space complexity - O(1)
     */
    public String gcdOfStrings(String str1, String str2) {
        int str1Len = str1.length(), str2Len = str2.length();
        // Check 1st char in both strings
        if (str1.charAt(0) != str2.charAt(0)) {
            return "";
        }
        // Function - Check both strings are factor by divisor substring length
        Function<Integer, Boolean> isDivisor = len -> {
            if (str1Len % len != 0 || str2Len % len != 0) {
                return false;
            }
            int f1 = str1Len / len, f2 = str2Len / len;
            String mini = str2.substring(0, len);
            return Objects.equals(mini.repeat(f1), str1) && Objects.equals(mini.repeat(f2), str2);
        };
        for (int i = Math.min(str1Len, str2Len); i > 0; i--) {
            if (isDivisor.apply(i)) {
                return str1.substring(0, i);
            }
        }
        return "";
    }
}
```

</TabItem>
</Tabs>
