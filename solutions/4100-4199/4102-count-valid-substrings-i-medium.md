---
title: 'LeetCode 4102 – Count Valid Substrings I'
description: 'Count substrings that avoid a contiguous “abc” by tracking the earliest valid start for each ending index.'
---

# 4102 - Count Valid Substrings I (Medium)

## Problem Link

https://leetcode.com/problems/count-valid-substrings-i/description/

## Problem Statement

You are given a string `s` consisting only of the characters `'a'`, `'b'`, and `'c'`.

A string is called **valid** if it does not contain `"abc"` as a **substring**.

Return the number of **valid substrings** in `s`. Substrings with different starting or ending indices are counted separately.

A **substring** is a contiguous **non-empty** sequence of characters within a string.

**Example 1:**

**Input:** s = "abac"

**Output:** 10

**Explanation:**

The following substrings don't contain `"abc"`​​​​​​​ as a substring:

- `s[0..0] = "a"`
- `s[0..1] = "ab"`
- `s[0..2] = "aba"`
- `s[0..3] = "abac"`​​​​​​​
- `s[1..1] = "b"`
- `s[1..2] = "ba"`
- `s[1..3] = "bac"`
- `s[2..2] = "a"`
- `s[2..3] = "ac"`
- `s[3..3] = "c"`

Thus, the answer is 10.

**Example 2:**

**Input:** s = "abc"

**Output:** 5

**Explanation:**

The following substrings don't contain `"abc"`​​​​​​​ as a substring:

- `s[0..0] = "a"`
- `s[0..1] = "ab"`
- `s[1..1] = "b"`
- `s[1..2] = "bc"`
- `s[2..2] = "c"`​​​​​​​

Thus, the answer is 5.

**Example 3:**

**Input:** s = "ac"

**Output:** 3

**Explanation:**

All substrings in `s` don't contain `"abc"` as a substring​​​​​​​. Thus, the answer is 3.

**Constraints:**

- `1 <= s.length <= 1e5`
- `s` only consists of `'a'`, `'b'`, and `'c'` characters.

## Approach 1: Two Pointers

Fix an ending index $i$. If the most recent occurrence of `"abc"` starts at $k$, then every substring ending at $i$ and starting at or before $k$ contains that occurrence. Every start after $k$ avoids it and all earlier occurrences.

Let $j$ be the earliest valid start, initially $0$. Whenever the three characters ending at $i$ form `"abc"`, its start is $i-2$, so move $j$ to $i-1$. Otherwise, keep $j$ where it is. The valid starts run from $j$ through $i$ inclusive, so add $i-j+1$ to the answer.

The time complexity is $O(n)$ and the space complexity is $O(1)$.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def countValidSubstrings(self, s: str) -> int:
        res = j = 0
        for i in range(len(s)):
            if s[i - 2:i + 1] == "abc": j = i - 1
            res += i - j + 1
        return res
```

</TabItem>
</Tabs>
