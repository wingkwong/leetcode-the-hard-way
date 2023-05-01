---
description: 'Author: @ColeB2 | https://leetcode.com/problems/regular-expression-matching/'
tags: [String, Dynamic Programming, Recursion]
---

# 0010 - Regular Expression Matching (Hard)

## Problem Link

https://leetcode.com/problems/regular-expression-matching/

## Problem Statement

Given an input string `s` and a pattern `p`, implement regular expression matching with support for `'.'` and `'*'` where:

- `'.'` Matches any single character.​​​​
- `'*'` Matches zero or more of the preceding element.

The matching should cover the **entire** input string (not partial).

**Example 1:**

```
Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
```

**Example 2:**

```
Input: s = "aa", p = "a*"
Output: true
Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
```

**Example 3:**

```
Input: s = "ab", p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".
```

**Constraints:**

- `1 <= s.length <= 20`
- `1 <= p.length <= 20`
- `s` contains only lowercase English letters.
- `p` contains only lowercase English letters, `'.'`, and `'*'`.
- It is guaranteed for each appearance of the character `'*'`, there will be a previous valid character to match.

## Approach 1: Dynamic Programming - Memoization

We can solve this recursively, using a dfs/backtracking approach, where we check each character against each other, if they match, or match up to an $$'.'$$ character, we can move on to the next character. When we reach a $$'*'$$ character is our trick case. That is the case where we have to  either skip the current character and not match it at all, or match it up several times to the same character in $$s$$.

The way we can handle that is simply by checking both cases:
1. Where we can just ignore the asterisk and the current character completely, and recursively call our helper function
2. If the current character matches, just check the star against the next character in our string.

The memoization comes in by storing in a cache the keys of $$(i, j)$$ where $$i$$ is the index we are at in $$s$$ and $$j$$ is the index we are at in $$p$$. By storing whether or not we have matches at these $$(i, j)$$ positions, it prevents us from having to redo work in cases where we may have to go over the string multiple times because of asterisks.

Time Complexity: $$O(s.length * p.length)$$. We are going to be checking through all indexes of length $$s$$ and $$p$$, but we will be reusing the working by storing those values inside our  hash map.

Space Complexity: $$O(s.length * p.length)$$. Our cache will store the whether the work from checking each character against each other.

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        # initialize our cache for memoization purposes
        cache = {}
        # recursive backtracking function, 2 parameters i and j
        # i = index we are at in string s.
        # j = index we are at in string p.
        def match(i, j):
            # if key (i,j) inside our cache, return the work we have
            # for this position.
            if (i, j) in cache:
                return cache[(i, j)]
            # if we reached end of our pattern string:
            if j >= len(p):
                # return i == len(s)
                # True, if we reached the end of s, meaning our character
                # matched up properly.
                # False if i isn't at the end of the string, meaning
                # we didn't match our pattern to our string.
                return i == len(s)

            # check if current char is in bounds, and matches to
            # correct character, or a '.'.
            current_char_match = i < len(s) and ((s[i] == p[j] or p[j] == '.'))
            # next char is star, we may have to match multiple current chars.
            if j + 1 < len(p) and p[j + 1] == '*':
                # match where we skip asterisk, and don't skip the asterisk.
                # (i, j + 2) handles skipping the asterisk,
                # only not skipping asterisk if current characters match.
                matches = match(i, j + 2) or (current_char_match and match(i + 1, j))
            # else clause, don't have an asterisk character next.
            else:
                # if our current character at i and j match, check
                # the next characters in the string and pattern.
                matches = current_char_match and match(i + 1, j + 1)
            # cache our work so we don't have to redo it and return.
            cache[(i, j)] = matches
            return matches
        # return our function starting at 0,0
        return match(0, 0)
```

</TabItem>
</Tabs>
