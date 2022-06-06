---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/
---

import SolutionAuthor from '@site/src/components/SolutionAuthor';

# 1371 - Find the Longest Substring Containing Vowels in Even Counts (Medium)

## Problem Link

https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/

## Problem Statement

Given the string `s`, return the size of the longest substring containing each vowel an even number of times. That is, 'a', 'e', 'i', 'o', and 'u' must appear an even number of times.

**Example 1:**

```
Input: s = "eleetminicoworoep"
Output: 13
Explanation: The longest substring is "leetminicowor" which contains two each of the vowels: e, i and o and zero of the vowels: a and u.
```

**Example 2:**

```
Input: s = "leetcodeisgreat"
Output: 5
Explanation: The longest substring is "leetc" which contains two e's.
```

**Example 3:**

```
Input: s = "bcbcbc"
Output: 6
Explanation: In this case, the given string "bcbcbc" is the longest because all vowels: a, e, i, o and u appear zero times.
```

**Constraints:**

* `1 <= s.length <= 5 x 10^5`
* `s` contains only lowercase English letters.

## Approach 1: Bit-Masking

We know that if we toggle a bit even number of times, it would be same as the original. We use the bit to represent if the vowel appears an even number of times or not. Since we only have 5 letters, which only gives 32 possibilities.

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int findTheLongestSubstring(string s) {
        unordered_map<char, int> m({
            { 'a', 0 },
            { 'e', 1 },
            { 'i', 2 },
            { 'o', 3 },
            { 'u', 4 }
        });
        unordered_map<int, int> where({{0, -1}});
        int ans = 0, mask = 0;
        for (int i = 0; i < s.size(); i++) {
            // if it is a vowel, toggle it
            if (m.count(s[i])) mask ^= (1 << m[s[i]]);
            // if the mask does not appear before, record the position
            if (!where.count(mask)) where[mask] = i;
            // the current position - the previous position
            ans = max(ans, i - where[mask]);
        }
        return ans;
    }
};
```
