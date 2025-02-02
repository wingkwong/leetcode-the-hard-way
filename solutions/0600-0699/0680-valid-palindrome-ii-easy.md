---
description: 'Author: @wkw | https://leetcode.com/problems/valid-palindrome-ii/'
---

# 0680 - Valid Palindrome II (Easy)

## Problem Link

https://leetcode.com/problems/valid-palindrome-ii

## Problem Statement

Given a string `s`, return `true` _if the_ `s` _can be palindrome after deleting **at most one** character from it_.

**Example 1:**

```
Input: s = "aba"
Output: true
```

**Example 2:**

```
Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.
```

**Example 3:**

```
Input: s = "abc"
Output: false
```

**Constraints:**

- `1 <= s.length <= 10^5`
- `s` consists of lowercase English letters.

## Approach 1: Brute Force

To check if a string is a palindrome, we can use two pointers to compare the character at pointer $$i$$ and that at pointer $$j$$. If they are not same, then it means it is not a palindrome. However, this problem allows us to delete at most one character from it. Therefore, we do the same way. If there is a difference, that means we can potentially delete the one at pointer $$i$$ or the one at pointer $$j$$. We try both case to see if it is possible to form a palindrome.

<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    // check palindrome with target range
    bool palindromeWithRange(string s, int i, int j) {
        while (i < j) {
            if (s[i] != s[j]) return false;
            i++, j--;
        }
        return true;
    }

    bool validPalindrome(string s) {
        int n = s.size(), i = 0, j = n - 1;
        while (i < j) {
            // not same -> potentially delete s[i] or s[j]
            if (s[i] != s[j]) {
                // try both case
                return palindromeWithRange(s, i, j - 1) || palindromeWithRange(s, i + 1, j);
            }
            i++, j--;
        }
        return true;
    }
};
```
