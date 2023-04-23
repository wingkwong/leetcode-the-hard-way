---
description: 'Author: @wingkwong, @vigneshshiv, @radojicic23 | https://leetcode.com/problems/isomorphic-strings/'
tags: [Hash Table, String]
---

# 0205 - Isomorphic Strings (Easy) 

## Problem Link

https://leetcode.com/problems/isomorphic-strings/

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

- `1 <= s.length <= 5 * 10^4`
- `t.length == s.length`
- `s` and `t` consist of any valid ascii character.

## Approach 1: Hash Map

<Tabs>
<TabItem value="cpp" label="C++">
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

</TabItem>

<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
class Solution {
    public boolean isIsomorphic(String s, String t) {
        // ASCII char range, partitioning first half for s and 2nd half for t.
        // Partition can be done by ascii + 128 (range) for the 2nd half. 
        int[] table = new int[256];
        for (int i = 0; i < s.length(); i++) {
            // If the char count from s & t is not match, then return false
            if (table[s.charAt(i)] != table[t.charAt(i) + 128]) {
                return false;
            }
            // Char similarity found (non matching char, but can help to transform to other char) 
            // so just keeping the index reference
            table[s.charAt(i)] = table[t.charAt(i) + 128] = i + 1;
        }
        return true;
    }
}
```

</TabItem>

<TabItem value="py" label="Python">
<SolutionAuthor name="@radojicic23"/>

```py
class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        map1 = {}
        map2 = {}
        for i in range(len(s)):
            if s[i] in map1 and map1[s[i]] != t[i]:
                return False
            if t[i] in map2 and map2[t[i]] != s[i]:
                return False
            map1[s[i]] = t[i]
            map2[t[i]] = s[i]
        return True 
```

</TabItem>
</Tabs>
