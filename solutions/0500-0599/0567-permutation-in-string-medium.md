---
description: 'Author: @wingkwong | https://leetcode.com/problems/permutation-in-string/'
---

import SolutionAuthor from '@site/src/components/SolutionAuthor';

# 0567 - Permutation in String (Medium)

## Problem Link

https://leetcode.com/problems/permutation-in-string/

## Problem Statement

Given two strings `s1` and `s2`, return `true` _if_ `s2` _contains a permutation of_ `s1`_, or_ `false` _otherwise_.

In other words, return `true` if one of `s1`'s permutations is the substring of `s2`.

**Example 1:**

```
Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
```

**Example 2:**

```
Input: s1 = "ab", s2 = "eidboaoo"
Output: false 
```

**Constraints:**

* `1 <= s1.length, s2.length <= 10^4`
* `s1` and `s2` consist of lowercase English letters.

## Approach 1: Sliding Window

The solution is almost same as [0438 - Find All Anagrams in a String (Medium)](../0400-0499/find-all-anagrams-in-a-string-medium). The general idea is to count the character occurrences as the string order doesn't matter, and check if there is a window with the same length as $$s1$$ contains the same set of occurrences.

We first use a hash map $$target$$ count the occurrences for each character in $$s1$$. Then we apply sliding window. We use a pointer $$i$$ to track the window starting point and use a pointer $$j$$ to track the window ending point in $$s2$$. We increase the pointer $$j$$ to count the occurrences in $$s2$$ and put the result in another hash map $$now$$ until the window size $$j - i + 1$$ is equal to the length of $$s1$$. Then we compare if both hash maps are identical. If so, return the answer immediately. If not, then we need to remove the leftmost element within this window. Continue the same process until the pointer $$i$$ reaches the end of the string.

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    bool checkInclusion(string s1, string s2) {
        // target for s1, now for s2
        vector<int> target(26), now(26);
        int n = (int) s1.size(), m = (int) s2.size(), j = 0;
        // count the occurrences for characters in s1
        for (auto x : s1) target[x - 'a']++;
        // apply sliding window. pointer i is the starting position
        for (int i = 0; i < m; i++) {
          // pointer j is the ending position 
          // j - i + 1 = window size
          // we count the occurrences for characters in s2 within the window
          while (j < m && j - i + 1 <= n) now[s2[j++] - 'a']++;
          // check if both hash maps are same or not
          // if they are same, return true
          if (now == target) return true;
          // if they are not same, remove the leftmost element and move forward
          now[s2[i] - 'a']--;
      }
      // no permutation is the substring of s2. return false here
      return false;
    }
};
```

We can also do it without pointer $$j$$.

```cpp
class Solution {
public:
    bool checkInclusion(string s1, string s2) {
        // target for s1, now for s2
        vector<int> target(26), now(26);
        int n = (int) s1.size(), m = (int) s2.size();
        // count the occurrences for characters in s1
        for (auto x : s1) target[x - 'a']++;
        for (int i = 0; i < m; i++) {
            // count the occurrences for characters in s2
            now[s2[i] - 'a']++;
            // remove the leftmost element in the window
            if (i >= n) now[s2[i - n] - 'a']--;
            // check both hash maps are same
            if (now == target) {
                return true;
            }
        }
        // no permutation is the substring of s2. return false here
        return false;
    }
};
```
