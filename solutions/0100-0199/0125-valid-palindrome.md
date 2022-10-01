---
description: 'Author: @vale-c | https://leetcode.com/problems/valid-palindrome/'
---

# 0125 - Valid Palindrome (Easy)

## Problem Link

https://leetcode.com/problems/valid-palindrome/

## Problem Statement

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string `s`, return `true` if it is a palindrome, or `false` otherwise.

**Constraints:**

* `1 <= s.length <= 2 * 105`
* `s` consists only of printable ASCII characters.


## Approach: Two Pointers

We can use two pointers to check if the string is a palindrome. We start from the beginning and the end of the string and move progressively towards the middle of the string. 

If the characters at the two pointers are *not* the same, we return *false*. 

If we reach the middle of the string, we return *true*.

<SolutionAuthor name="@vale-c"/>

```python
class Solution:
    def isPalindrome(self, s: str) -> bool:
        alpha = ''.join(char for char in s.lower() if char.isalnum())
        
        start = 0
        end = len(alpha)-1
        
        if s == ' ':
            return True
        
        while (start < end):
            if alpha[start] != alpha[end]:              
                return False
            else:
                start += 1
                end -= 1
        return True
```