---
description: >-
  Author: @wkw | https://leetcode.com/problems/count-prefixes-of-a-given-string/
---

# 2255 - Count Prefixes of a Given String (Easy)

## Problem Link

https://leetcode.com/problems/count-prefixes-of-a-given-string/

## Problem Statement

You are given a string array `words` and a string `s`, where `words[i]` and `s` comprise only of **lowercase English letters**.

Return _the **number of strings** in_ `words` _that are a **prefix** of_ `s`.

A **prefix** of a string is a substring that occurs at the beginning of the string. A **substring** is a contiguous sequence of characters within a string.

**Example 1:**

```
Input: words = ["a","b","c","ab","bc","abc"], s = "abc"
Output: 3
Explanation:
The strings in words which are a prefix of s = "abc" are:
"a", "ab", and "abc".
Thus the number of strings in words which are a prefix of s is 3.
```

**Example 2:**

```
Input: words = ["a","a"], s = "aa"
Output: 2
Explanation:
Both of the strings are a prefix of s.
Note that the same string can occur multiple times in words, and it should be counted each time.
```

**Constraints:**

- `1 <= words.length <= 1000`
- `1 <= words[i].length, s.length <= 10`
- `words[i]` and `s` consist of lowercase English letters **only**.

## Approach 1: STL

<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    int countPrefixes(vector<string>& words, string s) {
        int ans = 0;
        // if it returns index 0, then it means t is the prefix of s
        for (auto& t : words) ans += s.find(t) == 0;
        return ans;
    }
};
```
