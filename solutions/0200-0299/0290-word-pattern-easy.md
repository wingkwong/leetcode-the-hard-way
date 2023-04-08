---
description: 'Author: @wingkwong | https://leetcode.com/problems/word-pattern/'
tags: [Hash Table, String]
---

# 0290 - Word Pattern (Easy) 

## Problem Link

https://leetcode.com/problems/word-pattern/

## Problem Statement

Given a `pattern` and a string `s`, find if `s` follows the same pattern.

Here **follow** means a full match, such that there is a bijection between a letter in `pattern` and a **non-empty** word in `s`.

**Example 1:**

```
Input: pattern = "abba", s = "dog cat cat dog"
Output: true
```

**Example 2:**

```
Input: pattern = "abba", s = "dog cat cat fish"
Output: false
```

**Example 3:**

```
Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false
```

**Constraints:**

- `1 <= pattern.length <= 300`
- `pattern` contains only lower-case English letters.
- `1 <= s.length <= 3000`
- `s` contains only lowercase English letters and spaces `' '`.
- `s` **does not contain** any leading or trailing spaces.
- All the words in `s` are separated by a **single space**.

## Approach 1: Hashmap

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    bool wordPattern(string pattern, string s) {
        // convert s to a vector of strings
        // e.g. "dog cat cat dog" -> ["dog", "cat", "cat", "dog"]
        stringstream ss(s);
        string word;
        vector<string> words;
        while (ss >> word) {
            words.push_back(word);
        }
        // the size of words needs to be same as that of pattern
        // e.g. words = ["xxx"], pattern = "xxx"
        if (words.size() != pattern.size()) {
            return false;
        }
        // for each word in words ...
        // char in pattern -> word
        // e.g. a -> dog
        // e.g. b -> cat
        unordered_map<char, string> m;
        set<string> used;
        for (int i = 0; i < words.size(); i++) {
            // check if map the pattern
            if (m.count(pattern[i])) {
                // if pattern[i] exists in the hashmap,
                // then we need to make sure that the word is correct
                if (m[pattern[i]] != words[i]) {
                    return false;
                }
            } else {
                // each word can only map to one pattern
                // e.g. pattern = "ab", s = "dog dog"
                if (used.find(words[i]) != used.end()) {
                    return false;
                }
                // if not, then map it   
                // e.g. a -> dog
                m[pattern[i]] = words[i];
                used.insert(words[i]);
            }
        }
        return true;
    }
};
```

</TabItem>
</Tabs>