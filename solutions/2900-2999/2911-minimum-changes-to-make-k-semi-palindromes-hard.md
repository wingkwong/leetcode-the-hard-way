---
title: 'LeetCode 2911 – Minimum Changes to Make K Semi-palindromes'
description: 'Precompute the cost of making each substring semi-palindromic, then use dynamic programming to split the string into exactly k valid parts.'
tags: ['Two Pointers', 'Dynamic Programming', 'String']
---

# 2911 - Minimum Changes to Make K Semi-palindromes (Hard)

## Problem Link

https://leetcode.com/problems/minimum-changes-to-make-k-semi-palindromes

## Problem Statement

Given a string $s$ and an integer $k$, partition $s$ into $k$ **substrings** such that the letter changes needed to make each substring a **semi-palindrome** are minimized.

Return the ***minimum** number of letter changes* required*.*

A **semi-palindrome** is a special type of string that can be divided into **palindromes** based on a repeating pattern. To check if a string is a semi-palindrome:

1. Choose a positive divisor $d$ of the string's length. $d$ can range from $1$ up to, but not including, the string's length. A string of length $1$ has no valid divisor because its only divisor is its length, which is not allowed.
2. For a given divisor $d$, divide the string into groups where each group contains characters at positions following a repeating pattern of length $d$. For example, the first group uses positions $1, 1+d, 1+2d, \ldots$, and the second uses positions $2, 2+d, 2+2d, \ldots$.
3. The string is considered a semi-palindrome if each of these groups forms a palindrome.

Consider the string `"abcabc"`:

- The length of `"abcabc"` is `6`. Valid divisors are `1`, `2`, and `3`.
- For `d = 1`: The entire string `"abcabc"` forms one group. Not a palindrome.
- For `d = 2`:

		Group 1 (positions `1, 3, 5`): `"acb"`
		Group 2 (positions `2, 4, 6`): `"bac"`
		Neither group forms a palindrome.
- For `d = 3`:

		Group 1 (positions `1, 4`): `"aa"`
		Group 2 (positions `2, 5`): `"bb"`
		Group 3 (positions `3, 6`): `"cc"`
		All groups form palindromes. Therefore, `"abcabc"` is a semi-palindrome.

**Example 1:**

**Input:**  s = "abcac", k = 2

**Output:**  1

**Explanation:** Divide `s` into `"ab"` and `"cac"`. `"cac"` is already semi-palindrome. Change `"ab"` to `"aa"`, it becomes semi-palindrome with `d = 1`.

**Example 2:**

**Input:**  s = "abcdef", k = 2

**Output:**  2

**Explanation:** Divide `s` into substrings `"abc"` and `"def"`. Each needs one change to become semi-palindrome.

**Example 3:**

**Input:**  s = "aabbaa", k = 3

**Output:**  0

**Explanation:** Divide `s` into substrings `"aa"`, `"bb"` and `"aa"`. All are already semi-palindromes.

**Constraints:**

- $2 \leq |s| \leq 200$
- $1 \leq k \leq |s| / 2$
- `s` contains only lowercase English letters.

## Approach 1: Dynamic Programming

First, precompute $cost[l][r]$ which is the minimum changes needed to make the substring from index $l$ through index $r$ a semi-palindrome. For each substring of length $m$, try every proper divisor $d$ of $m$. The characters with the same offset modulo $d$ form one group; that group must read the same forwards and backwards. Compare each mirrored pair in every group and add one change whenever the characters differ. Keep the smallest mismatch count over all valid divisors.

Let $dp[p][i]$ be the minimum changes needed to split the first $i$ characters of $s$ into exactly $p$ semi-palindromic substrings. The final substring must have length at least $2$, so try each valid cut position $j$ and use: $dp[p][i] = \min_{j} \left(dp[p-1][j] + cost[j][i-1]\right)$.

The time complexity is $O(n^3 \log n)$ and the space complexity is $O(n^2)$.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def minimumChanges(self, s: str, k: int) -> int:
        n = len(s)
        cost = [[n] * n for _ in range(n)]
        for l in range(n):
            for r in range(l + 1, n):
                m = r - l + 1
                for d in range(1, m):
                    if m % d == 0:
                        cur = sum(s[l + i] != s[l + (m // d - 1) * d + i] for i in range(d))
                        for i in range(d, (m // d // 2) * d, d):
                            cur += sum(s[l + i + j] != s[r - i - d + 1 + j] for j in range(d))
                        cost[l][r] = min(cost[l][r], cur)
        dp = [[n] * (n + 1) for _ in range(k + 1)]
        dp[0][0] = 0
        for p in range(1, k + 1):
            for r in range(2 * p, n + 1):
                dp[p][r] = min(dp[p - 1][l] + cost[l][r - 1] for l in range(2 * p - 2, r - 1))
        return dp[k][n]
```

</TabItem>
</Tabs>
