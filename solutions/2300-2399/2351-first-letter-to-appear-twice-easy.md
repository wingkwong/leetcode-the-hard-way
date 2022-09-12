---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/first-letter-to-appear-twice
tags: ['Hash Map']
---

# 2351 - First Letter to Appear Twice (Easy)

## Problem Link

https://leetcode.com/problems/first-letter-to-appear-twice

## Problem Statement

Given a string `s` consisting of lowercase English letters, return _the first letter to appear **twice**_.

**Note**:

* A letter `a` appears twice before another letter `b` if the **second** occurrence of `a` is before the **second** occurrence of `b`.
* `s` will contain at least one letter that appears twice.&#x20;

**Example 1:**

```
Input: s = "abccbaacz"
Output: "c"
Explanation:
The letter 'a' appears on the indexes 0, 5 and 6.
The letter 'b' appears on the indexes 1 and 4.
The letter 'c' appears on the indexes 2, 3 and 7.
The letter 'z' appears on the index 8.
The letter 'c' is the first letter to appear twice, because out of all the letters the index of its second occurrence is the smallest.
```

**Example 2:**

```
Input: s = "abcdd"
Output: "d"
Explanation:
The only letter that appears twice is 'd' so we return 'd'.
```

**Constraints:**

* `2 <= s.length <= 100`
* `s` consists of lowercase English letters.
* `s` has at least one repeated letter.

## Approach 1: Hash Map

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    char repeatedCharacter(string s) {
      // store the frequency of each character
      // alternatively, we can use int cnt[26];
      unordered_map<char, int> m;
      // for each character, check the frequency
      // if it appears twice, return that character
      for (auto& c: s) if (++m[c] == 2) return c;
      // return the last one
      return s.back();
    }
};
```