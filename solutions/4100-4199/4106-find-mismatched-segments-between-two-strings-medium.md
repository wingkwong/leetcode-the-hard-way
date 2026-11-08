---
title: 'LeetCode 4106 – Find Mismatched Segments Between Two Strings'
description: 'Scan both strings together to extract the substring pair for each maximal run of mismatches.'
---

# 4106 - Find Mismatched Segments Between Two Strings (Medium)

## Problem Link

https://leetcode.com/problems/find-mismatched-segments-between-two-strings

## Problem Statement

You are given two strings `s1` and `s2` of the same length.

A **mismatched segment** is a **maximal contiguous** range of indices where the characters of `s1` and `s2` differ at every index.

Return a 2D array containing `[sub1, sub2]` for each mismatched segment, where `sub1` and `sub2` are the corresponding **substrings** from `s1` and `s2`, respectively. Return the segments in **increasing** order of their starting indices. If there are no mismatched segments, return an empty array.

A **substring** is a contiguous **non-empty** sequence of characters within a string.

**Example 1:**

**Input:** s1 = "earth", s2 = "empty"

**Output:** [["ar","mp"],["h","y"]]

**Explanation:**

- The characters at indices 1 and 2 differ, forming the mismatched segment `["ar","mp"]`.
- The characters at index 4 differ, forming the mismatched segment `["h","y"]`.

**Example 2:**

**Input:** s1 = "action", s2 = "nation"

**Output:** [["ac","na"]]

**Explanation:**

The characters at indices 0 and 1 differ, forming the mismatched segment `["ac","na"]`. All remaining characters are equal in both strings.

**Example 3:**

**Input:** s1 = "hot", s2 = "hot"

**Output:** []

**Explanation:**

The two strings are identical, so there are no mismatched segments.

**Constraints:**

- `1 <= s1.length == s2.length <= 100`
- `s1` and `s2` consist of lowercase English letters.

## Approach 1: Two Pointers

Scan both strings from left to right with index $i$. Skip equal characters. At the first mismatch, save its index as $j$ and advance $i$ until the characters match again or the strings end. At that point, $i$ is one past the last mismatch in the run, so `[s1[j:i], s2[j:i]]` gives exactly the pair to append.

For example, in `"earth"` and `"empty"`, the matching `'t'` ends the first run, giving `["ar", "mp"]`. The scan then reaches the final mismatch and appends `["h", "y"]`. Processing each run as soon as it ends gives the required order.

The time complexity is $O(n)$ and the space complexity is $O(1)$.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def findMismatchedSegments(self, s1: str, s2: str) -> list[list[str]]:
        res = []
        i = 0
        while i < len(s1):
            if s1[i] == s2[i]: i += 1
            else:
                j = i
                while i < len(s1) and s1[i] != s2[i]: i += 1
                res.append([s1[j:i], s2[j:i]])
        return res
```

</TabItem>
</Tabs>
