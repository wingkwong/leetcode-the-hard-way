---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/longest-chunked-palindrome-decomposition/
---

# 1147 - Longest Chunked Palindrome Decomposition (Hard)

## Problem Link

https://leetcode.com/problems/longest-chunked-palindrome-decomposition/

## Problem Statement

You are given a string `text`. You should split it to k substrings `(subtext1, subtext2, ..., subtextk)` such that:

* `subtexti` is a **non-empty** string.
* The concatenation of all the substrings is equal to `text` (i.e., `subtext1 + subtext2 + ... + subtextk == text`).
* `subtexti == subtextk - i + 1` for all valid values of `i` (i.e., `1 <= i <= k`).

Return the largest possible value of `k`.

**Example 1:**

```
Input: text = "ghiabcdefhelloadamhelloabcdefghi"
Output: 7
Explanation: We can split the string on "(ghi)(abcdef)(hello)(adam)(hello)(abcdef)(ghi)".
```

**Example 2:**

```
Input: text = "merchant"
Output: 1
Explanation: We can split the string on "(merchant)".
```

**Example 3:**

```
Input: text = "antaprezatepzapreanta"
Output: 11
Explanation: We can split the string on "(a)(nt)(a)(pre)(za)(tpe)(za)(pre)(a)(nt)(a)".
```

**Constraints:**

* `1 <= text.length <= 1000`
* `text` consists only of lowercase English characters.

## Approach 1: Greedy

Build the subtext from the left $$l = l + text[i]$$ and from the right $$r = text[n - 1 - i] + r$$. If at a point they are same, then increase the answer by $$1$$ and reset both $$l$$ and $$r$$.

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int longestDecomposition(string text) {
        int n = text.size(), ans = 0;
        string l, r;
        for (int i = 0; i < n; i++) {
            // build subtect from the left
            l = l + text[i];
            // build subtect from the right
            r = text[n - 1 - i] + r;
            // if they are same, 
            if (l == r) {
                // then increase answer by 1
                ans += 1;
                // reset l & r
                l = r = "";
            }
        }
        return ans;
    }
};
```
