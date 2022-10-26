---
description: 'Author: @wingkwong | https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/'
tags: [Array, String]
---

# 1662 - Check If Two String Arrays are Equivalent (Easy) 

## Problem Link

https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/

## Problem Statement

Given two string arrays `word1` and `word2`, return`true`*if the two arrays **represent** the same string, and*`false`*otherwise.*

A string is **represented** by an array if the array elements concatenated **in order** forms the string.

**Example 1:**

```
Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
Output: true
Explanation:
word1 represents string "ab" + "c" -> "abc"
word2 represents string "a" + "bc" -> "abc"
The strings are the same, so return true.
```

**Example 2:**

```
Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
Output: false
```

**Example 3:**

```
Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
Output: true
```

**Constraints:**

- `1 <= word1.length, word2.length <= 103`
- `1 <= word1[i].length, word2[i].length <= 103`
- `1 <= sum(word1[i].length), sum(word2[i].length) <= 103`
- `word1[i]` and `word2[i]` consist of lowercase letters.

## Approach 1: Two Pointers

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    // intuition: 
    // we can combine all words together as `s1` and `s2` and then compare,
    // based on the above idea, we can simulate it by using two pointers 
    // to check if a character in one word matches that in another word
    // if we've processed one character, then we move to another character in the same word
    // if we've processed one word, then we move to the next word
    // if they are equivalent, both word pointers should be pointing at the end
    bool arrayStringsAreEqual(vector<string>& word1, vector<string>& word2) {
        int n = word1.size(), m = word2.size();
        // pointer to the words in word1 and word2
        int i = 0, j = 0;
        // pointer to the character in `word1[i]` and `word2[j]`
        int x = 0, y = 0;
        while (i < n && j < m) {
            // if both character doesn't match, then return false
            // remember to increase the pointer x and y 
            // otherwise, it will cause TLE
            if (word1[i][x++] != word2[j][y++]) return false;
            // reach the end of the current word
            // move to another word
            // reset the pointer to 0 for the new word
            if (x == word1[i].size()) i += 1, x = 0;
            if (y == word2[j].size()) j += 1, y = 0;
        }
        // if they are equivalent, word pointers would be at position n and m 
        return i == n && j == m;
    }
};
```

</TabItem>
</Tabs>