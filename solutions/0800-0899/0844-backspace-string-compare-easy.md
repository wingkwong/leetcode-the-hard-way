---
description: 'Author: @wkw, @radojicic23 | https://leetcode.com/problems/backspace-string-compare/'
tags: [Two Pointers, String, Stack, Simulation]
---

# 0844 - Backspace String Compare (Easy)

## Problem Link

https://leetcode.com/problems/backspace-string-compare/

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

- `1 <= s.length, t.length <= 200`
- `s` and `t` only contain lowercase letters and `'#'` characters.

## Approach 1: Simulation

We build the final string for $$s$$ and $$t$$. If we see #, then we can only backspace if the final string is not empty. Otherwise, we add the character to the final string. Since we need to do the same thing on both string, it's better to write a function to build the string.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

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

</TabItem>

<TabItem value="python" label="Python">
<SolutionAuthor name="@radojicic23"/>

```python
class Solution:
    def backspaceCompare(self, s: str, t: str) -> bool:

        def get_result(st):
            new_st = []
            for c in st:
                if c == "#":
                    if new_st:
                        new_st.pop()
                else:
                    new_st.append(c)
            return "".join(new_st)
        return get_result(s) == get_result(t)
```

</TabItem>

<TabItem value="javascript" label="JavaScript">
<SolutionAuthor name="@radojicic23"/>

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  function get_result(st) {
    let new_st = [];
    for (c of st) {
      if (c == '#') {
        if (new_st != null) new_st.pop();
      } else new_st.push(c);
    }
    return new_st.join('');
  }
  return get_result(s) == get_result(t);
};
```

</TabItem>

<TabItem value="kotlin" label="Kotlin">
<SolutionAuthor name="@wkw"/>

```kt
class Solution {
    fun process(s: String): String {
        val res = StringBuilder()
        for (x in s) {
            // include this character to final string
            if (x != '#') res.append(x)
            // pop the previous character if possible
            else if (res.isNotEmpty()) res.deleteAt(res.length - 1)
        }
        return res.toString()
    }

    fun backspaceCompare(s: String, t: String): Boolean {
        // check if both are same after processed
        return process(s) == process(t)
    }
}
```

</TabItem>
</Tabs>
