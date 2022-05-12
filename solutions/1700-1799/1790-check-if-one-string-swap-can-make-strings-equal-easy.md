---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/
---

# 1790 - Check if One String Swap Can Make Strings Equal (Easy)

## Problem Statement

You are given two strings `s1` and `s2` of equal length. A **string swap** is an operation where you choose two indices in a string (not necessarily different) and swap the characters at these indices.

Return `true` _if it is possible to make both strings equal by performing **at most one string swap** on **exactly one** of the strings._ Otherwise, return `false`.

**Example 1:**

```
Input: s1 = "bank", s2 = "kanb"
Output: true
Explanation: For example, swap the first character with the last character of s2 to make "bank".
```

**Example 2:**

```
Input: s1 = "attack", s2 = "defend"
Output: false
Explanation: It is impossible to make them equal with one string swap.
```

**Example 3:**

```
Input: s1 = "kelb", s2 = "kelb"
Output: true
Explanation: The two strings are already equal, so no string swap operation is required.
```

**Constraints:**

* `1 <= s1.length, s2.length <= 100`
* `s1.length == s2.length`
* `s1` and `s2` consist of only lowercase English letters.

## Approach 1: Simulation

We iterate each index $$i$$ and look for the first difference, mark the index as $$last$$. If we have another difference at index $$j$$, then swap $$s1[j]$$ with $$s1[last]$$ and check if it is same as $$s2$$ (as we can only make at most one swap). At the end, check if both string is equal to handle the case that we don't swap.

```cpp
class Solution {
public:
    bool areAlmostEqual(string s1, string s2) {
        int n = s1.size(), last = -1;
        for (int i = 0; i < n; i++) {
            // potentially need to swap
            if (s1[i] != s2[i]) {
                // any previous character to swap?
                if (last == -1) {
                    // if not found, mark the current index as last
                    last = i;
                } else {
                    // if found, swap it and check if they are same
                    swap(s1[last], s1[i]);
                    return s1 == s2;
                }
            }
        }
        // no swap is needed
        return s1 == s2;
    }
};
```
