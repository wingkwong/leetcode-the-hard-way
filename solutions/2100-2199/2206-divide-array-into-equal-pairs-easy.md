---
description: >-
  Author: @wkw | https://leetcode.com/problems/divide-array-into-equal-pairs/
---

# 2206 - Divide Array Into Equal Pairs (Easy)

## Problem Link

https://leetcode.com/problems/divide-array-into-equal-pairs/

## Problem Statement

You are given an integer array `nums` consisting of `2 * n` integers.

You need to divide `nums` into `n` pairs such that:

- Each element belongs to **exactly one** pair.
- The elements present in a pair are **equal**.

Return `true` _if nums can be divided into_ `n` _pairs, otherwise return_ `false`.

## Approach 1: Brute Force

Count the frequency for each number. If there is a number with odd frequency, then the answer is false. Otherwise, it must be true.

<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    bool divideArray(vector<int>& nums) {
        int n = nums.size(), cnt = 0;
        unordered_map<int, int> m;
        // count the frequency for each number
        for (auto x : nums) m[x]++;
        for (auto x : m) {
            // check if it is odd
            if (x.second & 1) {
                return false;
            }
        }
        return true;
    }
};
```
