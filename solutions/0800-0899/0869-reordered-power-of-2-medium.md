---
description: 'Author: @wkw | https://leetcode.com/problems/reordered-power-of-2/'
tags: [Math, Sorting, Counting, Enumeration]
---

# 0869 - Reordered Power of 2 (Medium)

## Problem Statement

You are given an integer `n`. We reorder the digits in any order (including the original order) such that the leading digit is not zero.

Return `true` _if and only if we can do this so that the resulting number is a power of two_.

**Example 1:**

```
Input: n = 1
Output: true
```

**Example 2:**

```
Input: n = 10
Output: false
```

**Constraints:**

- `1 <= n <= 10^9`

## Approach 1: Sorting

<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    string sortStr(int n) {
        // since the input is an integer,
        // we convert it to a string first
        string t = to_string(n);
        // use STL to sort
        sort(t.begin(), t.end());
        // return the string
        return t;
    }

    // the idea is to sort `n` and compare all sorted power of two
    // if they are matched, then it means they can be reordered to each other
    bool reorderedPowerOf2(int n) {
        // since the sorted string of n is always same
        // so we convert it here instead of doing it in the loop
        string s = sortStr(n);
        for (int i = 0; i < 30; i++) {
            // power of 2 = 1 << i
            // we sort each power of 2 string
            string t = sortStr(1 << i);
            // and compare with `s`
            // if they are matched, then return true
            if (s == t) return true;
        }
        // otherwise it is not possible to reorder to a power of 2
        return false;
    }
};
```
