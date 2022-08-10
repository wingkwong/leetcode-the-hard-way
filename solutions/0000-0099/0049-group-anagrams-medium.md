---
description: 'Author: @wingkwong | https://leetcode.com/problems/group-anagrams/'
tags: ['Array', 'Hash Table', 'String', 'Sorting']
---

import SolutionAuthor from '@site/src/components/SolutionAuthor';

# 0049 - Group Anagrams (Medium)

## Problem Link

https://leetcode.com/problems/group-anagrams/

## Problem Statement

Given an array of strings `strs`, group **the anagrams** together. You can return the answer in **any order**.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

**Example 1:**

```
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
```

**Example 2:**

```
Input: strs = [""]
Output: [[""]]
```

**Example 3:**

```
Input: strs = ["a"]
Output: [["a"]]
```

**Constraints:**

* `1 <= strs.length <= 10^4`
* `0 <= strs[i].length <= 100`
* `strs[i]` consists of lowercase English letters.

## Approach 1: Sorting + Hash Map

To check if $$s$$ and $$t$$ are anagrams, one of the ways is to sort them both and check if they are equal. For example, if we sort $tan$ and $nat$, we will get $ant$. Therefore, we can group them together.

We can use a hash map to store the sorted string as a key, and push the original value to an array. At the end, we iterate the hash map and push the corresponding array to our final answer.

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        unordered_map<string, vector<string>> m;
        for(auto& x : strs) {
            // we need to use a temp string
            // as we still need to use the original string
            string t = x;
            // sort it 
            sort(t.begin(), t.end());
            // sorted string as key
            // push original string to the corresponding array
            m[t].push_back(x);
        }
        vector<vector<string>> ans;
        // iterate the hash map and push the array to the final ans
        for(auto& x : m) ans.push_back(x.second);
        return ans;
    }
};
```
