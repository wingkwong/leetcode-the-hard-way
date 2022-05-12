---
description: 'Author: @wingkwong | https://leetcode.com/problems/backspace-string-compare/'
---

# 0844 - Backspace String Compare (Easy)

## Problem Statement

Given two strings `s` and `t`, return `true` _if they are equal when both are typed into empty text editors_. `'#'` means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

**Example 1:**

```
Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".
```

**Example 2:**

```
Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".
```

**Example 3:**

```
Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".
```

**Constraints:**

* `1 <= s.length, t.length <= 200`
* `s` and `t` only contain lowercase letters and `'#'` characters.

## Approach 1: Simulation

We build the final string for $$s$$ and $$t$$. If we see #, then we can only backspace if the final string is not empty. Otherwise, we add the character to the final string. Since we need to do the same thing on both string, it's better to write a function to build the string.

```cpp
class Solution {
public:
    string process(string s) {
        string res;
        for (auto x : s) {
            // include this character to final string
            if (x != '#') res.push_back(x);
            // pop the previous character if possible
            else if (res.size()) res.pop_back();
        }
        return res;
    }
    bool backspaceCompare(string s, string t) {
        // check if both are same after processed
        return process(s) == process(t);
    }
};
```
