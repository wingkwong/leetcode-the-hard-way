---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/smallest-string-with-a-given-numeric-value/
---

# 1633 - Smallest String With A Given Numeric Value (Medium)

## Problem Statement

The **numeric value** of a **lowercase character** is defined as its position `(1-indexed)` in the alphabet, so the numeric value of `a` is `1`, the numeric value of `b` is `2`, the numeric value of `c` is `3`, and so on.

The **numeric value** of a **string** consisting of lowercase characters is defined as the sum of its characters' numeric values. For example, the numeric value of the string `"abe"` is equal to `1 + 2 + 5 = 8`.

You are given two integers `n` and `k`. Return _the **lexicographically smallest string** with **length** equal to `n` and **numeric value** equal to `k`._

Note that a string `x` is lexicographically smaller than string `y` if `x` comes before `y` in dictionary order, that is, either `x` is a prefix of `y`, or if `i` is the first position such that `x[i] != y[i]`, then `x[i]` comes before `y[i]` in alphabetic order.

&#x20;

**Example 1:**

```
Input: n = 3, k = 27
Output: "aay"
Explanation: The numeric value of the string is 1 + 1 + 25 = 27, and it is the smallest string with such a value and length equal to 3.
```

**Example 2:**

```
Input: n = 5, k = 73
Output: "aaszz"
```

**Constraints:**

* `1 <= n <= 10^5`
* `n <= k <= 26 * n`

## Approach 1: Build from the right

To obtain lexicographically smallest string, we should put $$a$$ from the left and $$z$$ from the right if possible and put what's left in the middle. Therefore, we initialise the answer with all $$a$$s. Starting from the right, the best case is to make it to $$z$$ (i.e. $$s[i] + 25$$). If we cannot do it, then we can only make it to the max one (i.e. $$s[i] + k$$).

```cpp
class Solution {
public:
    string getSmallestString(int n, int k) {
        // init s with all 'a's
        string s(n, 'a');
        // since we put n times, update k
        k -= n; 
        // 0-index
        n -= 1;
        // fill character until k <= 0
        while (k > 0) {
            // we either put a + 25 (z) or a + k
            s[n] += min(k, 25);
            // update k
            k -= 25;
            // shift the pointer to the left
            n -= 1;
        }
        return answer
        return s;
    }
};
```

## Approach 2: Three segments

The answer can be potentially constructed by three segments. The first segment contains only $$a$$. The last segment contains only $$z$$. The middle segment contains a character. This approach is to calculate each character in each segment given $$n$$ and $$k$$.

First we calculate the number of characters that are not $$a$$, i.e. the total number of characters in the second and the third segment. Let's call it $$nonA$$. Then we know that there would be $$n - nonA$$ a in the first segment and $$nonA - 1$$ z in the third segment (minus one because we need one for the second segment). So how to get $$nonA$$? We can use above condition to find out $$nonA$$. That is $$(n - nonA) * 1 + nonA * 26 >= k$$ which gives $$nonA >= (k - n) / 25$$.

For the middle segment, how many $$k$$ left we can use? We've used $$(n - nonA) * 1$$ for the first segment and $$(nonA-1)* 26$$ for the last segment. The index of the character in the middle segment would be $$k - (n - nonA) - (nonA - 1) * 26$$.

```cpp
class Solution {
public:
    string getSmallestString(int n, int k) {
        // total number of characters in 2nd & 3rd segment
        int nonA = ((k - n) + 25 - 1) / 25;
        // 1st segment: there is (n - nonA) 'a's
        // 2nd segment: one character with index k - (n - nonA) - (nonA - 1) * 26
        // 3rd segemnt: there is (nonA - 1) 'z's
        return string(n - nonA, 'a') + 
               char(k - (n - nonA) - (nonA - 1) * 26 + 'a' - 1) + 
               string(nonA - 1, 'z');
    }
};
```
