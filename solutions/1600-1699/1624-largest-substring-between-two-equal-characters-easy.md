---
description: 'Author: @wkw, @jit, @jaffar | https://leetcode.com/problems/largest-substring-between-two-equal-characters/'
tags: [Hash Table, String]
---

# 1624 - Largest Substring Between Two Equal Characters (Easy)

## Problem Link

https://leetcode.com/problems/largest-substring-between-two-equal-characters/

## Problem Statement

Given a string `s`, return _the length of the longest substring between two equal characters, excluding the two characters._ If there is no such substring return `-1`.

A **substring** is a contiguous sequence of characters within a string.

**Example 1:**

```
Input: s = "aa"
Output: 0
Explanation: The optimal substring here is an empty substring between the two 'a's.
```

**Example 2:**

```
Input: s = "abca"
Output: 2
Explanation: The optimal substring here is "bc".
```

**Example 3:**

```
Input: s = "cbzxy"
Output: -1
Explanation: There are no characters that appear twice in s.
```

**Constraints:**

- $1 <= s.length <= 300$
- $s$ contains only lowercase English letters.

## Approach 1: First nad Last Indices

We can iterate each character in $s$ and use a hash map to store the first index of the character. If a character is already seen before, the current $i$ is potentially the last index, we can check if the length $i - m[s[i]] - 1$ is greater than the current answer and update answer.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    int maxLengthBetweenEqualCharacters(string s) {
        int ans = -1;
        unordered_map<char, int> m;
        for (int i = 0; i < s.size(); i++) {
            if (m.count(s[i])) {
                ans = max(ans, i - m[s[i]] - 1);
            } else {
                m[s[i]] = i;
            }
        }
        return ans;
    }
};
```

</TabItem>

<TabItem value="scala" label="Scala">
<SolutionAuthor name="@jit"/>

```scala
object Solution {
  def maxLengthBetweenEqualCharacters(s: String): Int = {
    val idxItr = s.indices.groupBy(s).valuesIterator
    idxItr.map(xs => xs.last - xs.head - 1).max
  }
}
```

</TabItem>

<TabItem value="py" label="Python">
<SolutionAuthor name="@jaffar"/>

```py
class Solution:
    def maxLengthBetweenEqualCharacters(self, s: str) -> int:
        m, r = {}, -1
        for i, c in enumerate(s):
            if c in m:
                r = max(r, i - m[c] - 1)
            else:
                m[c] = i
        return r
```

</TabItem>
</Tabs>
