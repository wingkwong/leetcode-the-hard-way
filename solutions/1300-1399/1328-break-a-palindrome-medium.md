---
description: 'Author: @wingkwong | https://leetcode.com/problems/break-a-palindrome/'
---

# 1328 - Break a Palindrome (Medium)

## Problem Statement

Given a palindromic string of lowercase English letters `palindrome`, replace **exactly one** character with any lowercase English letter so that the resulting string is **not** a palindrome and that it is the **lexicographically smallest** one possible.

Return _the resulting string. If there is no way to replace a character to make it not a palindrome, return an **empty string**._

A string `a` is lexicographically smaller than a string `b` (of the same length) if in the first position where `a` and `b` differ, `a` has a character strictly smaller than the corresponding character in `b`. For example, `"abcc"` is lexicographically smaller than `"abcd"` because the first position they differ is at the fourth character, and `'c'` is smaller than `'d'`.

**Example 1:**

```
Input: palindrome = "abccba"
Output: "aaccba"
Explanation: There are many ways to make "abccba" not a palindrome, such as "zbccba", "aaccba", and "abacba".
Of all the ways, "aaccba" is the lexicographically smallest.
```

**Example 2:**

```
Input: palindrome = "a"
Output: ""
Explanation: There is no way to replace a single character to make "a" not a palindrome, so return an empty string.
```

**Constraints:**

* `1 <= palindrome.length <= 1000`
* `palindrome` consists of only lowercase English letters.

## Approach 1: Greedy

If the input $$s$$ has the length of 1, then the answer is an empty string because a single letter is always a palindrome. There is no way to make it not a palindrome.

If we need to make it lexicographically smallest one, that means we should replace a character with `a` as early as possible (from the left to right). Therefore, we iterate the input and check the first index $$i$$ where $$s[i]$$is not `a`. This is the position where we need to replace.

If there is no such position, that means all characters are `a`. In this case, the lexicographically smallest one is $$aaaaaab$$. We can simply change the last character to `b`.

```cpp
class Solution {
public:
    string breakPalindrome(string s) {
        int n = s.size();
        if (n < 2) return "";
        for (int i = 0; i < n / 2; i++) {
            if (s[i] != 'a') {
                s[i] = 'a';
                return s;
            }
        }
        s[n - 1] = 'b';
        return s;
    }
};
```
