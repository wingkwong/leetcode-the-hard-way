---
description: 'Author: @TBC | https://leetcode.com/problems/merge-strings-alternately/'
---

# 1768 - Merge Strings Alternately (Easy)

## Problem Statement

You are given two strings `word1` and `word2`. Merge the strings by adding letters in alternating order, starting with `word1`. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return _the merged string._

**Example 1:**

```
Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
```

**Example 2:**

```
Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s
```

**Example 3:**

```
Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d
```

**Constraints:**

* `1 <= word1.length, word2.length <= 100`
* `word1` and `word2` consist of lowercase English letters.

## Approach 1: Two Pointers

We define two pointers, `pointer_for_word1`and `pointer_for_word2` . We then iterate the letters from both words until we have exhausted one of them. After that, we exhaust the remaining word (if both words have different lengths).&#x20;

```python
def mergeAlternately(self, word1: str, word2: str) -> str:
        
        #initialize the 2 pointers for word1 and word2
        pointer_for_word1 = 0
        pointer_for_word2 = 0
        
        #initialize the 2 lengths of word1 and word2
        length_of_word1 = len(word1)
        length_of_word2 = len(word2)
        
        #initialize result list
        result = []
        
        #we iterate each letter in word1 and word2 until we have exhausted one of them
        while(pointer_for_word1 < length_of_word1 and pointer_for_word2 < length_of_word2):
            
            #add a letter from word1, then a letter from word2
            result.append(word1[pointer_for_word1])
            result.append(word2[pointer_for_word2])
            
            #move the two pointers
            pointer_for_word1 += 1
            pointer_for_word2 += 1
        
        #if word1 is not exhausted, add its remaining letters to result
        while(pointer_for_word1 < length_of_word1):
            result.append(word1[pointer_for_word1])
            pointer_for_word1 += 1
            
        #if word2 is not exhausted, add its remaining letters to result
        while(pointer_for_word2 < length_of_word2):
            result.append(word2[pointer_for_word2])
            pointer_for_word2 += 1
        
        #return the string of the result list
        return "".join(result)
```
