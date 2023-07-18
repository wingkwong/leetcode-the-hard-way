---
description: 'Author: @ColeB2 | https://leetcode.com/problems/length-of-last-word/'
tags: [String]
---

# 0058 - Length of Last Word

## Problem Link

https://leetcode.com/problems/length-of-last-word/

## Problem Statement

Given a string `s` consisting of words and spaces, return _the length of the **last** word in the string_.

A **word** is a maximal substring consisting of non-space characters only.

**Example 1:**

```
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
```

**Example 2:**

```
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
```

**Example 3:**

```
Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
```

**Constraints:**

- `1 <= s.length <= 10^4`
- `s` consists of only English letters and spaces `' '`.
- There will be at least one word in `s`.

## Approach 1: Looping Backwards

We can simply initialize a pointer to start at the end of the string, iterate backwards until we find a non-space character, then start our algorithm. Which will be to iterate backwards until the next space character, incrementing a variable to track the length of the word.

Time Complexity: $$O(n)$$, where $$n$$ is the length of the string, $$s$$. In the worst case, we will have to iterate over the whole string.

Space Complexity: $$O(1)$$. We only need to track a pointer variable, and a variable to track the length of the word.

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        # initialize i as our pointer at the end of s.
        i = len(s) - 1
        # initialize length, as the length of our last word
        length = 0
        # reach First word.
        while i >= 0 and s[i] == ' ':
            i -= 1
        # count length first word
        while i >= 0 and s[i] != ' ':
            i -= 1
            length += 1
        return length
```

</TabItem>
</Tabs>