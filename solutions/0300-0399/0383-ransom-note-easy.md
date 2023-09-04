---
description: 'Author: @wingkwong | https://leetcode.com/problems/ransom-note/'
tags: [Hash Table, String, Counting]
---

# 0383 - Ransom Note (Easy) 

## Problem Link

https://leetcode.com/problems/ransom-note/

## Problem Statement

Given two strings `ransomNote` and `magazine`, return `true`*if*`ransomNote`*can be constructed by using the letters from*`magazine`*and*`false`*otherwise*.

Each letter in `magazine` can only be used once in `ransomNote`.

**Example 1:**

```
Input: ransomNote = "a", magazine = "b"
Output: false
```

**Example 2:**

```
Input: ransomNote = "aa", magazine = "ab"
Output: false
```

**Example 3:**

```
Input: ransomNote = "aa", magazine = "aab"
Output: true
```

**Constraints:**

- `1 <= ransomNote.length, magazine.length <= 10^5`
- `ransomNote` and `magazine` consist of lowercase English letters.

## Approach 1: Counting

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    bool canConstruct(string ransomNote, string magazine) {
	    // you can also use unordered_map<int, int> m; here
		// since we're just dealing with lowercase English letters, 
        // we can just use an array of length 26 to store the frequency of them
        int m[26] = {0};
        // count each character
        for(char c : magazine) m[c - 'a']++;
        // check if it can be found in m and substract by 1 
        for(char c : ransomNote) {
			// if it is less than 0, it means it cannot be constructed from magazine
            if(--m[c - 'a'] < 0) return false;
        }
        return true;
    }
};
```