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


## Approach 2: Sliding Window

Instead of restarting the scan from every index, we maintain a single window $[i, j]$ that always satisfies the constraint. We expand the window by moving the right pointer $j$ forward and incrementing the count of $s[j]$ in the map $d$. Whenever this makes $s[j]$ appear more than twice, we shrink the window from the left by decrementing $d[s[i]]$ and advancing $i$ until the constraint holds again. 

After each step the window is guaranteed valid, so we update $res$ with its current length $j - i + 1$. Since each character is added and removed at most once, the pointers together traverse the string in a single pass, giving $O(n)$ time and $O(k)$ space where $k$ is the number of distinct characters (effectively $O(1)$ for a fixed alphabet).

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def maximumLengthSubstring(self, s: str) -> int:
        # n: string length, i: left pointer, res: best length
        n, i, res = len(s), 0, 0
        # counts of each char in the current window
        d = defaultdict(int)
        # j: right pointer, expand the window rightward
        for j in range(n):
            # add s[j] to the window
            d[s[j]] += 1
            # s[j] now appears more than twice -> invalid
            while d[s[j]] > 2:
                # drop the leftmost char from the window
                d[s[i]] -= 1
                # shrink the window from the left
                i += 1
            # window is valid now -> update the max length
            res = max(res, j - i + 1)
        # longest valid substring length
        return res
```

</TabItem>
</Tabs>

