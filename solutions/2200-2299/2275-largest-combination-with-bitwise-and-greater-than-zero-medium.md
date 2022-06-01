---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/largest-combination-with-bitwise-and-greater-than-zero
---

import Authors from '@site/src/components/Authors';

# 2275 - Largest Combination With Bitwise AND Greater Than Zero (Medium)

## Problem Link

https://leetcode.com/problems/largest-combination-with-bitwise-and-greater-than-zero

## Problem Statement

The **bitwise AND** of an array `nums` is the bitwise AND of all integers in `nums`.

* For example, for `nums = [1, 5, 3]`, the bitwise AND is equal to `1 & 5 & 3 = 1`.
* Also, for `nums = [7]`, the bitwise AND is `7`.

You are given an array of positive integers `candidates`. Evaluate the **bitwise AND** of every **combination** of numbers of `candidates`. Each number in `candidates` may only be used **once** in each combination.

Return _the size of the **largest** combination of_ `candidates` _with a bitwise AND **greater** than_ `0`.

**Example 1:**

```
Input: candidates = [16,17,71,62,12,24,14]
Output: 4
Explanation: The combination [16,17,62,24] has a bitwise AND of 16 & 17 & 62 & 24 = 16 > 0.
The size of the combination is 4.
It can be shown that no combination with a size greater than 4 has a bitwise AND greater than 0.
Note that more than one combination may have the largest size.
For example, the combination [62,12,24,14] has a bitwise AND of 62 & 12 & 24 & 14 = 8 > 0.
```

**Example 2:**

```
Input: candidates = [8,8]
Output: 2
Explanation: The largest combination [8,8] has a bitwise AND of 8 & 8 = 8 > 0.
The size of the combination is 2, so we return 2.
```

**Constraints:**

* `1 <= candidates.length <= 10^5`
* `1 <= candidates[i] <= 10^7`

## Approach 1: Counting

If the $i$-th bit is set after performing AND operation on $k$ candidates, it means the $i$-th of all $k$ candidates must be 1. Therefore, we check each bit to see which bit has the most candidates with the bit set. 

<Authors names="@wingkwing"/>

```cpp
class Solution {
public:
    int largestCombination(vector<int>& candidates) {
        int n = candidates.size(), ans = 0;
        for (int i = 0; i < 32; i++) {
            // init bits to  0 for each index
            int bits = 0;
            // iterate each candidate
            for (int j = 0; j < n; j++) {
                // i-th bit is set for candidates[j]
                if ((1 << i) & candidates[j]) {
                    // count the bit
                    bits += 1;
                }
            }
            // update the ans 
            ans = max(ans, bits);
        }
        return ans;
    }
};
```