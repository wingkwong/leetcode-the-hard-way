---
description: 'Author: @wkw | https://leetcode.com/problems/optimal-partition-of-string/'
---

# 2405 - Optimal Partition of String (Medium)

## Problem Statement

Given a string `s`, partition the string into one or more **substrings** such that the characters in each substring are **unique**. That is, no letter appears in a single substring more than **once**.

Return _the **minimum** number of substrings in such a partition._

Note that each character should belong to exactly one substring in a partition.

**Example 1:**

```
Input: s = "abacaba"
Output: 4
Explanation:
Two possible partitions are ("a","ba","cab","a") and ("ab","a","ca","ba").
It can be shown that 4 is the minimum number of substrings needed.
```

**Example 2:**

```
Input: s = "ssssss"
Output: 6
Explanation:
The only valid partition is ("s","s","s","s","s","s").
```

**Constraints:**

- `1 <= s.length <= 1e5`
- `s` consists of only English lowercase letters.

## Approach 1: Greedy

<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    // the idea is to keep each partition as long as possible
    // so that we could have the minimum number of substrings
    int partitionString(string s) {
        // the minimum number of substring is at least 1
        // e.g. "a"
        int ans = 1;
        // cnt is used to count the frequency of each character
        vector<int> cnt(26);
        // for each character
        for (auto& c : s) {
            // we check if it exists before
            // if so, then we should create a new partition
            // because no letter appears in a single substring more than once
            if (cnt[c - 'a']) {
                // reset the counter
                cnt = vector<int>(26);
                // create a new partition
                ans++;
            }
            // increase the frequency of the current character by 1
            cnt[c - 'a']++;
        }
        return ans;
    }
};
```
