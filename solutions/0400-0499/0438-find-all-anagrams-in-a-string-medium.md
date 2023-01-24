---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/find-all-anagrams-in-a-string/
---

# 0438 - Find All Anagrams in a String (Medium)

## Problem Link

https://leetcode.com/problems/find-all-anagrams-in-a-string/

## Problem Statement

Given two strings `s` and `p`, return _an array of all the start indices of_ `p`_'s anagrams in_ `s`. You may return the answer in **any order**.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

**Example 1:**

```
Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
```

**Example 2:**

```
Input: s = "abab", p = "ab"
Output: [0,1,2]
Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
```

**Constraints:**

* `1 <= s.length, p.length <= 3 * 10^4`
* `s` and `p` consist of lowercase English letters.

## Approach 1: Sliding Window

First we build the count `m2` of each character in string `p`. Then we keep the window size as `m`. If it is within the window, then we update `m1` until the pointer `j` is out of the window. If `m1` is equal to `m2`, then we can add the current `i` to the answer vector. After that, we need to move decrease `m1[s[i] - 'a']]` by 1 as the character `s[i]` will be out of the window.

```cpp
class Solution {
 public:
  vector<int> findAnagrams(string s, string p) {
      vector<int> ans, m1(26, 0), m2(26, 0);
      int n = (int) s.size(), m = (int) p.size(), j = 0;
      for (auto x : p) m2[x - 'a']++;
      for (int i = 0; i < n; i++) {
          while (j < n && j - i + 1 <= m) m1[s[j++] - 'a']++;
          if (m1 == m2) ans.push_back(i);
          m1[s[i] - 'a']--;
      }
      return ans;
  }
};
```

Time Complexity: O(n + m)

Space Complexity: O(1)
