---
description: 'Author: @wkw | https://leetcode.com/problems/maximum-length-substring-with-two-occurrences'
tags: [Mid Level, Hash Table, String, Sliding Window]
---

# 3090 - Maximum Length Substring With Two Occurrences (Easy)

## Problem Link

https://leetcode.com/problems/maximum-length-substring-with-two-occurrences

## Problem Statement

Given a string s, return the maximum length of a substring such that it contains at most two occurrences of each character.

**Example 1:**

**Input:** s = "bcbbbcba"

**Output:** 4

**Explanation:** The following substring has a length of 4 and contains at most two occurrences of each character: "bcbbbcba".

**Example 2:**

**Input:** s = "aaaa"

**Output:** 2

**Explanation:** The following substring has a length of 2 and contains at most two occurrences of each character: "aaaa".

**Constraints:**

- $2 <= s.length <= 100$
- s consists only of lowercase English letters.

## Approach 1: Brute Force

Since the constraints are very small, we can solve by a brute-force solution. It tries every starting index $i$, then extends the substring rightward with $j$, counting characters in a map $d$ and breaking as soon as any character appears more than twice, all while tracking the longest valid length in $res$. It runs in $O(n^2)$ time and uses $O(k)$ space, where $k$ is the number of distinct characters (effectively $O(1)$ for a fixed alphabet).

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
def maximumLengthSubstring(self, s: str) -> int:
    n = len(s)
    res = 0
    # try each index i as the starting point of a substring
    for i in range(n):
        # reset the map for every run 
        d = defaultdict(int)
        # count the starting character itself
        d[s[i]] = 1
        # extend the substring to the right char by char
        for j in range(i + 1, n):
            # include s[j] and update its running count
            d[s[j]] += 1
            # if a character now appears more than twice -> invalid
            if d[s[j]] > 2: break
            # window [i..j] is valid, update the max length
            res = max(res, j - i + 1)
    # return the longest valid substring length
    return res
```

</TabItem>
</Tabs>
