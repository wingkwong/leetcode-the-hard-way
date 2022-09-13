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

## Approach 1: Set

Create 2 pointer left and right place them at start of the string.
Move right (right++) till distinct characters and store them in set.
If repeated character occurs then move left (left++) until that repeated character is occured in left ans also remove all characters that occur before that character including character itself from set.

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@ganajayant"/>

```java
class Solution {
    public String longestPalindrome(String s) {
        int n = s.length();
        int max = 0;
        HashSet<Character> seen = new HashSet<>();
        int left = 0;
        int right = 0;
        while (right < n) {
            char c = s.charAt(right);
            if (seen.add(c)) // Add until repeated element is occured
            {
                max = Math.max(max, right - left + 1); // length of substring
                right++;
            } else {
                while (s.charAt(left) != c) {
                    seen.remove(s.charAt(left++));
                }
                seen.remove(s.charAt(left++));
            }
        }
        return max;
    }
}
```
</TabItem>
</Tabs>