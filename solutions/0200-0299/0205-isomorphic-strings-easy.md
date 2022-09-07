---
description: 'Author: @wingkwong | https://leetcode.com/problems/isomorphic-strings/'
tags: [Hash Table, String]
---

# 0205 - Isomorphic Strings (Easy) 

## Problem Statement

Given two strings `s` and `t`, *determine if they are isomorphic*.

Two strings `s` and `t` are isomorphic if the characters in `s` can be replaced to get `t`.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

**Example 1:**

```
Input: s = "egg", t = "add"
Output: true
```

**Example 2:**

```
Input: s = "foo", t = "bar"
Output: false
```

**Example 3:**

```
Input: s = "paper", t = "title"
Output: true
```

**Constraints:**

- `1 <= s.length <= 5 * 104`
- `t.length == s.length`
- `s` and `t` consist of any valid ascii character.

## Approach 1: Hash Map

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    bool isIsomorphic(string s, string t) {
        // m1 is used to map s[i] to t[i]
        // m2 is used to map t[i] to s[i]
        // example 1:
        // m1['e'] --> 'a'
        // m1['g'] --> 'd'
        // m2['a'] --> 'e'
        // m2['d'] --> 'g'
        unordered_map<char, char> m1, m2;
        for (int i = 0; i < s.size(); i++) {
            // if s[i] isn't in m1 and t[i] isn't in m2
            if (!m1.count(s[i]) && !m2.count(t[i])) {
                // then we can map s[i] to t[i]
                m1[s[i]] = t[i];
                // and t[i] to s[i]
                m2[t[i]] = s[i];
            } else {
                // if they are they are isomorphic,
                // m1[s[i]] should map to t[i], and m2[t[i]] should map to s[i]
                // we return false here if this condition is not satisfied
                if (m1[s[i]] != t[i] || m2[t[i]] != s[i]) {
                    return false;
                }
            }
        }
        // they are isomorphic
        return true;
    }
};
```