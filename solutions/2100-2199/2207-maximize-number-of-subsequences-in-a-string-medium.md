---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/maximize-number-of-subsequences-in-a-string/
---

# 2207 - Maximize Number of Subsequences in a String (Medium)

## Problem Link

https://leetcode.com/problems/maximize-number-of-subsequences-in-a-string/

## Problem Statement

You are given a **0-indexed** string `text` and another **0-indexed** string `pattern` of length `2`, both of which consist of only lowercase English letters.

You can add **either** `pattern[0]` **or** `pattern[1]` anywhere in `text` **exactly once**. Note that the character can be added even at the beginning or at the end of `text`.

Return _the **maximum** number of times_ `pattern` _can occur as a **subsequence** of the modified_ `text`.

A **subsequence** is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters.

**Example 1:**

```
Input: text = "abdcdbc", pattern = "ac"
Output: 4
Explanation:
If we add pattern[0] = 'a' in between text[1] and text[2], we get "abadcdbc". Now, the number of times "ac" occurs as a subsequence is 4.
Some other strings which have 4 subsequences "ac" after adding a character to text are "aabdcdbc" and "abdacdbc".
However, strings such as "abdcadbc", "abdccdbc", and "abdcdbcc", although obtainable, have only 3 subsequences "ac" and are thus suboptimal.
It can be shown that it is not possible to get more than 4 subsequences "ac" by adding only one character.
```

**Example 2:**

```
Input: text = "aabb", pattern = "ab"
Output: 6
Explanation:
Some of the strings which can be obtained from text and have 6 subsequences "ab" are "aaabb", "aaabb", and "aabbb".
```

**Constraints:**

* `1 <= text.length <= 10^5`
* `pattern.length == 2`
* `text` and `pattern` consist only of lowercase English letters.

## Approach 1: Counting

We should add $$pattern[0]$$ to the beginning or add $$pattern[1]$$ to the end of the text. Therefore, we check both case to see which one is better. We iterate the text and check if the character is equal to $$pattern[1]$$, if so, we add the frequency of $$pattern[0]$$. We increase the frequency of the current character by $$1$$.

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    long long maximumSubsequenceCount(string text, string pattern) {
        char f = pattern[0], s = pattern[1];
        auto check = [&](string text) -> long long {
            long long res = 0, cnt = 0;
            for (auto x : text) {
                if (x == s) res += cnt;
                if (x == f) cnt++;
            }
            return res;
        };
        // case 1: add pattern[0] at the beginning
        long long x = check(f + text);
        // case 2: add pattern[1] at the end
        long long y = check(text + s);
        // take the max one
        return max(x, y);
    }
};
```
