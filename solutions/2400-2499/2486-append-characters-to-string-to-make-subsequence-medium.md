---
description: "Author: @dhanu084 | https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/"
tags: [Two Pointers]
---

# 2486 - Append Characters to String to Make Subsequence (Medium)

## Problem Link

https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/

## Problem Statement

You are given two strings s and t consisting of only lowercase English letters.

Return the minimum number of characters that need to be appended to the end of s so that t becomes a subsequence of s.

A subsequence is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters.

**Example 1:**

```
Input: s = "coaching", t = "coding"
Output: 4
Explanation: Append the characters "ding" to the end of s so that s = "coachingding".
Now, t is a subsequence of s ("coachingding").
It can be shown that appending any 3 characters to the end of s will never make t a subsequence.
```

**Example 2:**

```
Input: s = "abcde", t = "a"
Output: 0
Explanation: t is already a subsequence of s ("abcde").
```

**Example 3:**

```
Input: s = "z", t = "abcde"
Output: 5
Explanation: Append the characters "abcde" to the end of s so that s = "zabcde".
Now, t is a subsequence of s ("zabcde").
It can be shown that appending any 4 characters to the end of s will never make t a subsequence.
```

**Constraints:**

- 1 <= s.length, t.length <= 105
- s and t consist only of lowercase English letters.

## Approach 1: Two Pointers

Time Complexity: $$O(min(s.length, t.length))$$

Space Complexity: $$O(1)$$

<Tabs>
<TabItem value="py" label="Python">

<SolutionAuthor name="@dhanu084" />

```python
class Solution:
    def appendCharacters(self, s: str, t: str) -> int:
        i = j = 0
        '''
            * Iterate through the both strings
            * if both letters of s and t match increase both pointers
            * if not matching increment i pointer to check if there is any possible match
            in future - this also ensures that order is maintained
            * return len(t) - current j position to find the number of letters that needs to be appened
            * for input s = "coaching", t = "coding"
            i pointer will reach end of s and j pointer will point to d as it was the last mismatch position
            so return 6-2 = 4
        '''
        while i < len(s) and j < len(t):
            if s[i] == t[j]:
                i += 1
                j += 1
            else:
                i += 1

        return len(t) - j
```

</TabItem>
</Tabs>
