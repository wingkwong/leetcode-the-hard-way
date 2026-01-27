---
description: >-
  Author: @wkw | https://leetcode.com/problems/sum-of-scores-of-built-strings/
---

# 2223 - Sum of Scores of Built Strings (Hard)

## Problem Link

https://leetcode.com/problems/sum-of-scores-of-built-strings/

## Problem Statement

You are **building** a string `s` of length `n` **one** character at a time, **prepending** each new character to the **front** of the string. The strings are labeled from `1` to `n`, where the string with length `i` is labeled `si`.

- For example, for `s = "abaca"`, `s1 == "a"`, `s2 == "ca"`, `s3 == "aca"`, etc.

The **score** of `si` is the length of the **longest common prefix** between `si` and `sn` (Note that `s == sn`).

Given the final string `s`, return _the **sum** of the **score** of every_ `si`.

**Example 1:**

```
Input: s = "babab"
Output: 9
Explanation:
For s1 == "b", the longest common prefix is "b" which has a score of 1.
For s2 == "ab", there is no common prefix so the score is 0.
For s3 == "bab", the longest common prefix is "bab" which has a score of 3.
For s4 == "abab", there is no common prefix so the score is 0.
For s5 == "babab", the longest common prefix is "babab" which has a score of 5.
The sum of the scores is 1 + 0 + 3 + 0 + 5 = 9, so we return 9.
```

**Example 2:**

```
Input: s = "azbazbzaz"
Output: 14
Explanation:
For s2 == "az", the longest common prefix is "az" which has a score of 2.
For s6 == "azbzaz", the longest common prefix is "azb" which has a score of 3.
For s9 == "azbazbzaz", the longest common prefix is "azbazbzaz" which has a score of 9.
For all other si, the score is 0.
The sum of the scores is 2 + 3 + 9 = 14, so we return 14.
```

**Constraints:**

- `1 <= s.length <= 10^5`
- `s` consists of lowercase English letters.

## Approach 1: Z Algorithm

The sum of the score of every $$s_i$$ would be the sum of the values in $$Z$$ array.

<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    template <typename T>
    vector<int> z_function(int n, const T &s) {
      vector<int> z(n, n);
      int l = 0, r = 0;
      for (int i = 1; i < n; i++) {
        z[i] = (i > r ? 0 : min(r - i + 1, z[i - l]));
        while (i + z[i] < n && s[z[i]] == s[i + z[i]]) {
          z[i]++;
        }
        if (i + z[i] - 1 > r) {
          l = i;
          r = i + z[i] - 1;
        }
      }
      return z;
    }

    template <typename T>
    vector<int> z_function(const T &s) {
      return z_function((int)s.size(), s);
    }

    long long sumScores(string s) {
        long long ans = 0;
        vector<int> z = z_function(s);
        for (auto x : z) ans += x;
        return ans;
    }
};
```
