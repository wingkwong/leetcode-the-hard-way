---
description: >-
  Author: @heiheihang, @wingkwong |
  https://leetcode.com/problems/counting-words-with-a-given-prefix/
---

import SolutionAuthor from '@site/src/components/SolutionAuthor';

# 2185 - Counting Words With a Given Prefix (Easy)

## Problem Link

https://leetcode.com/problems/counting-words-with-a-given-prefix/

## Problem Statement

You are given an array of strings `words` and a string `pref`.

Return _the number of strings in_ `words` _that contain_ `pref` _as a **prefix**_.

A **prefix** of a string `s` is any leading contiguous substring of `s`.

**Example 1:**

```
Input: words = ["pay","attention","practice","attend"], pref = "at"
Output: 2
Explanation: The 2 strings that contain "at" as a prefix are: "attention" and "attend".
```

**Example 2:**

```
Input: words = ["leetcode","win","loops","success"], pref = "code"
Output: 0
Explanation: There are no strings that contain "code" as a prefix.
```

**Constraints:**

* `1 <= words.length <= 100`
* `1 <= words[i].length, pref.length <= 100`
* `words[i]` and `pref` consist of lowercase English letters.

## Approach 1: Iteration

We can define the length of the prefix string to be `n` , then we need to grab the first `n` characters of each word and compare their substrings. In the case the word has length less than `n`, we skip the word.

<SolutionAuthor name="@heiheihang"/>

```python
def prefixCount(self, words: List[str], pref: str) -> int:
        
        #define the length of prefix
        n = len(pref)
        
        res = 0
        
        #iterate each word
        for s in words:
        
            #cannot get first n characters if it is shorter than n, so skip
            if( len(s) < n):
                continue
            #compare the first n characters
            if(s[:n] == pref):
                res += 1
                
        return res
```

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int prefixCount(vector<string>& words, string pref) {
        int ans = 0;
        // string::find returns the first position 
        // of the first character of the first match
        for (auto s: words) ans += s.find(pref) == 0;
        return ans;
    }
};
```
