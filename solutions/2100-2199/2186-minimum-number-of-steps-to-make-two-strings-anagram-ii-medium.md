---
description: >-
  Author: @heiheihang, @wkw | https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram-ii/
---

# 2186 - Minimum Number of Steps to Make Two Strings Anagram II (Medium)

## Problem Link

https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram-ii/

## Problem Statement

You are given two strings `s` and `t`. In one step, you can append **any character** to either `s` or `t`.

Return _the minimum number of steps to make_ `s` _and_ `t` \_ **anagrams** of each other.\_

An **anagram** of a string is a string that contains the same characters with a different (or the same) ordering.

**Example 1:**

```
Input: s = "leetcode", t = "coats"
Output: 7
Explanation:
- In 2 steps, we can append the letters in "as" onto s = "leetcode", forming s = "leetcodeas".
- In 5 steps, we can append the letters in "leede" onto t = "coats", forming t = "coatsleede".
"leetcodeas" and "coatsleede" are now anagrams of each other.
We used a total of 2 + 5 = 7 steps.
It can be shown that there is no way to make them anagrams of each other with less than 7 steps.
```

**Example 2:**

```
Input: s = "night", t = "thing"
Output: 0
Explanation: The given strings are already anagrams of each other. Thus, we do not need any further steps.
```

**Constraints:**

- `1 <= s.length, t.length <= 2 * 10^5`
- `s` and `t` consist of lowercase English letters.

## Approach 1: 2 Dictionaries

We can store the characters of both strings into two dictionaries, and we make the following observation

- To make the number of any character `c` equal in string `s` and `t`, we must add the difference between `s.count(c)` and `t.count(c)`

In python `defaultdict`, if we simply perform `for key in d1` , we will miss out the `keys` in `d2`. If we iterate both dictionaries, we will need to cancel out double counts.

Hence, The simplest way is to visit each character once (by iterating from 0 to 25) and find the differences of characters between 2 dicts.

<SolutionAuthor name="@heiheihang"/>

```python
def minSteps(self, s: str, t: str) -> int:

    # initialize the dictionaries
    d1 = defaultdict(int)
    d2 = defaultdict(int)

    # count the number of characters in each string
    for c in s:
        d1[c] += 1

    for c in t:
        d2[c] += 1

    # initialize result
    res = 0

    # iterate all 26 lowercase characters
    for i in range(26):
        # generate the character from i
        c = chr(ord('a') + i)

        # add the difference of character count to result
        res += abs(d1[c] - d2[c])

    return res

```

## Approach 2: 1 Dictionary

We can actually use 1 dictionary with less code. The main idea is that we are only concerned with the **difference** of each characters in both strings, so we can simply take the count of character of `s` as positive and that of `t` as negative.

<SolutionAuthor name="@heiheihang"/>

```python
def minSteps(self, s: str, t: str) -> int:

    # initialize the dictionary
    d = defaultdict(int)

    # count c in s as positive
    for c in s:
        d[c] += 1

    #count c in t as negative
    for c in t:
        d[c] -= 1
    # initialize result
    res = 0

    # iterate all characters present in both strings
    for key in d:

        # add the difference of character count to result
        res += abs(d[key])

    return res
```

<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    int minSteps(string s, string t) {
        int ans = 0;
        unordered_map<int, int> m;
        for (auto x : s) m[x - 'a']++;
        for (auto x : t) m[x - 'a']--;
        for (int i = 0; i < 26; i++) ans += abs(m[i]);
        return ans;
    }
};
```
