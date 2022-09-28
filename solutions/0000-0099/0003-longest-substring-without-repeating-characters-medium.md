---
description: >-
  Author: @ganajayant |
  https://leetcode.com/problems/longest-substring-without-repeating-characters/
tags: [Hash Table, String, Sliding Window]
---

# 0003 - Longest Substring Without Repeating Characters (Medium)

## Problem Link

https://leetcode.com/problems/longest-substring-without-repeating-characters/

## Problem Statement

Given a string `s`, find the length of the **longest substring** without repeating characters.

**Example 1:**

```
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

**Example 2:**

```
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

**Example 3:**

```
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

**Constraints:**

* `0 <= s.length <= 5 * 10^4`
* `s` consists of English letters, digits, symbols and spaces.

## Approach 1: HashSet

Two pointer _i_ and _j_, initially at the start of the string.
Move right (j++) till distinct characters and store them in set.
If repeated character occurs then move left (i++) until that repeated character is occured in left ans also remove all characters that occur before that character including character itself from set.

Time complexity: O(n), where n - # of characters in the string
Space complexity: O(s), where s is the longest substring

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@ganajayant"/>
<SolutionAuthor name="@vigneshshiv"/>

```java
class Solution {
    public int lengthOfLongestSubstring(String s) {
        if (s == null || s.length() == 0) return 0;
        int i = 0, j = 0, max = 0;
        Set<Character> seen = new HashSet<>();
        while (j < s.length()) {
            if (seen.add(s.charAt(j))) {
                max = Math.max(max, seen.size());
                j += 1;
            } else {
                seen.remove(s.charAt(i++));
            }
        }
        return max;
    }
}
```
</TabItem>
</Tabs>