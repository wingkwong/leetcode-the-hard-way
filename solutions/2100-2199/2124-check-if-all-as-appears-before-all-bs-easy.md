---
title: "LeetCode 2124 – Check if All A's Appears Before All B's"
description: "Determine whether every 'a' appears before every 'b' by checking for the invalid 'ba' transition in linear time and constant extra space."
tags: ['String']
---

# 2124 - Check if All A's Appears Before All B's (Easy)

## Problem Link

https://leetcode.com/problems/check-if-all-as-appears-before-all-bs

## Problem Statement

Given a string `s` consisting of **only** the characters `'a'` and `'b'`, return `true` *if **every***`'a'` *appears before **every***`'b'`*in the string*. Otherwise, return `false`.

**Example 1:**

```
Input: s = "aaabbb"
Output: true
Explanation:
The 'a's are at indices 0, 1, and 2, while the 'b's are at indices 3, 4, and 5.
Hence, every 'a' appears before every 'b' and we return true.
```

**Example 2:**

```
Input: s = "abab"
Output: false
Explanation:
There is an 'a' at index 2 and a 'b' at index 1.
Hence, not every 'a' appears before every 'b' and we return false.
```

**Example 3:**

```
Input: s = "bbb"
Output: true
Explanation:
There are no 'a's, hence, every 'a' appears before every 'b' and we return true.
```

**Constraints:**

- `1 <= s.length <= 100`
- `s[i]` is either `'a'` or `'b'`.

## Approach 1: Substring Check

We need to check whether all the $a$ characters appear before all the $b$ characters. A valid string can contain only $a$ characters, only $b$ characters, or some $a$ characters followed by some $b$ characters.

The string becomes invalid if a $b$ appears before an $a$. Because the string contains only $a$ and $b$, this situation must create the adjacent pattern $"ba"$ somewhere in the string. Therefore, we can simply check whether $"ba"$ is present. If $"ba"$ is not in the string, every $a$ appears before every $b$, so the result is true. Otherwise, it is false.

The time complexity is $O(n)$ and the space complexity is $O(1)$.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def checkString(self, s: str) -> bool:
        return "ba" not in s
```

</TabItem>
</Tabs>