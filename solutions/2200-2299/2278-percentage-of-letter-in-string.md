---
description: >-
  Author: @wkw | https://leetcode.com/problems/percentage-of-letter-in-string
---

# 2278 - Percentage of Letter in String (Easy)

## Problem Link

https://leetcode.com/problems/percentage-of-letter-in-string

## Problem Statement

Given a string s and a character letter, return the percentage of characters in s that equal letter rounded down to the nearest whole percent.

**Example 1:**

```
Input: s = "foobar", letter = "o"
Output: 33
Explanation:
The percentage of characters in s that equal the letter 'o' is 2 / 6 * 100% = 33% when rounded down, so we return 33.
```

**Example 2:**

```
Input: s = "jjjj", letter = "k"
Output: 0
Explanation:
The percentage of characters in s that equal the letter 'k' is 0%, so we return 0.
```

**Constraints:**

- $1 <= s.length <= 100$
- s consists of lowercase English letters.
- letter is a lowercase English letter.

## Approach 1: Counting

<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    int percentageLetter(string s, char letter) {
        int cnt = 0, n = s.size();
        // counting
        for (char& c : s) cnt += (c == letter);
        // return the percentage of characters in s
        // that equal letter rounded down to the nearest whole percent
        return ((double) cnt / n) * 100;
    }
};
```
