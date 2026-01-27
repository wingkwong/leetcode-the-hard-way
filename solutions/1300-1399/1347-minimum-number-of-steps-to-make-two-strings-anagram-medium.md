---
description: >-
  Author: @wkw, @jaffar | https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/


tags: [Hash Table, String, Counting]
---

# 1347 - Minimum Number of Steps to Make Two Strings Anagram (Easy)

## Problem Link

https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/

## Problem Statement

You are given two strings of the same length `s` and `t`. In one step you can choose **any character** of `t` and replace it with **another character**.

Return _the minimum number of steps_ to make `t` an anagram of `s`.

An **Anagram** of a string is a string that contains the same characters with a different (or the same) ordering.

**Example 1:**

```
Input: s = "bab", t = "aba"
Output: 1
Explanation: Replace the first 'a' in t with b, t = "bba" which is anagram of s.
```

**Example 2:**

```
Input: s = "leetcode", t = "practice"
Output: 5
Explanation: Replace 'p', 'r', 'a', 'i' and 'c' from t with proper characters to make t anagram of s.
```

**Example 3:**

```
Input: s = "anagram", t = "mangaar"
Output: 0
Explanation: "anagram" and "mangaar" are anagrams.
```

**Constraints:**

- `1 <= s.length <= 5 * 10^4`
- `s.length == t.length`
- `s` and `t` consist of lowercase English letters only.

## Approach 1: Frequency Count

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    int minSteps(string s, string t) {
        int ans = 0;
        unordered_map<int, int> m;
        // Count the frequency of characters of each string.
        // Loop over all characters if the frequency of a character in t is less than that in s
        // then add the difference between the frequencies to the answer.
        for (auto x : s) m[x - 'a']++;
        for (auto x : t) m[x - 'a']--;
        for (auto x : m) if (x.second > 0) ans += x.second;
        return ans;
    }
};
```

</TabItem>

<TabItem value="py" label="Python">
<SolutionAuthor name="@jaffar"/>

```py
class Solution:
    def minSteps(self, s: str, t: str) -> int:
        return sum((Counter(s) - Counter(t)).values())
```

</TabItem>
</Tabs>
