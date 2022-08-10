---
description: 'Author: @wingkwong | https://leetcode.com/problems/valid-anagram/'
tags: ['Hash Map']
---

import SolutionAuthor from '@site/src/components/SolutionAuthor';

# 0242 - Valid Anagram (Easy)

## Problem Link

https://leetcode.com/problems/valid-anagram/

## Problem Statement

Given two strings `s` and `t`, return `true` _if_ `t` _is an anagram of_ `s`_, and_ `false` _otherwise_.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

**Example 1:**

```
Input: s = "anagram", t = "nagaram"
Output: true
```

**Example 2:**

```
Input: s = "rat", t = "car"
Output: false
```

**Constraints:**

* `1 <= s.length, t.length <= 5 * 104`
* `s` and `t` consist of lowercase English letters.

**Follow up:** What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

## Approach 1: Sort

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    bool isAnagram(string s, string t) {
        // s and t are anagrams
        // if they are same after being sorted
        sort(begin(s), end(s));
        sort(begin(t), end(t));
        return s == t;
    }
};
```

## Approach 2: Hash Map

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    bool isAnagram(string s, string t) {
        // if s and t are anagram, 
        // then the frequency of each number would be same
        int cnt[26] = {0};
        for (auto x : s) cnt[x - 'a']++;
        for (auto x : t) cnt[x - 'a']--;
        for (int i = 0; i < 26; i++) {
            if (cnt[i]) {
                return false;
            }
        }
        return true;
    }
};
```