---
description: >-
  Author: @@vigneshshiv, @MithunPrabhu777 |
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

## Approach 1: HashSet with One Iteration

Two pointer _i_ and _j_, initially at the start of the string. Move right (j++) till distinct characters and store them in set.
If repeated character occurs then move left (i++) until that repeated character is occured in left, and also remove all characters that occur before that character including character itself from set. This helps to maintain Set with longest substring. 

Time complexity: $O(n)$, where $n$ - # of characters in the string

Space complexity: $O(s)$, where $s$ is the longest substring

<Tabs>
<TabItem value="java" label="Java">
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

<TabItem value="javascript" label="JavaScript">
<SolutionAuthor name="@MithunPrabhu777"/>

```javascript
var lengthOfLongestSubstring = function (s) {
    const letterCountMap = new Map();

    // Destructuring assignment syntax is a JavaScript expression that pulls out values from array
    // Here we are assigning initial values to variables
    let [left, right, max] = [0, 0, 0];

    while (right < s.length) {
        const currentValue = s[right];
        const canSlide = letterCountMap.has(currentValue);

        // We can slide left pointer only when we find duplicate number from map
        if (canSlide) {
            const rightSlide = letterCountMap.get(currentValue) + 1;
            left = Math.max(left, rightSlide);
        }

        // We are finding window from left to right of non repeating characters
        const window = (right - left) + 1;
        max = Math.max(window, max);
        letterCountMap.set(currentValue, right);
        right++;
    }

    return max;
};
```
</TabItem>
</Tabs>


## Approach 2: Sliding Window with ASCII

We can solve this problem with Sliding Window and Two pointers _i_ and _j_. Iterate over the string, keep moving the 2nd pointer _j_ forward until the character is not matched with _i_ th character. 

Since the input, may contain `English letters, digits, symbols and spaces`, so maintain the [ASCII](https://bluesock.org/~willg/dev/ascii.html) char array of size 128. 

If any of the character occur more than once, then break the loop and find the difference of _j_ and _i_ and that's the longest substring length. 

Time complexity: $O(n)$, where $n$ - # of characters in the string. Since both _i_ and _j_ moving in one direction and it's total is $O(2n)$, constants are ignored, so it's $O(n)$.

Space complexity: $O(1)$ extra space, size of 128 ASCII chars for each iteration, considered as constant space.

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
class Solution {
    public int lengthOfLongestSubstring(String s) {
        if (s == null || s.length() == 0) return 0;
        if (s.length() == 1) return 1;
        int max = 0;
        for (int idx = 0; idx < s.length() - 1; idx++) {
            int[] seen = new int[128];
            int i = idx, j = idx + 1;
            while (j < s.length() && s.charAt(i) != s.charAt(j)) {
                if (seen[s.charAt(j)] > 0) break;
                seen[s.charAt(j)]++;
                j++;
            }
            max = Math.max(max, j - i);
        }
        return max;
    }
}
```
</TabItem>
</Tabs>