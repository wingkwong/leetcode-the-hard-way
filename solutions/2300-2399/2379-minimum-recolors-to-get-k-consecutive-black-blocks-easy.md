---
description: 'Author: @wkw | https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/'
---

# 2379 - Minimum Recolors to Get K Consecutive Black Blocks (Easy)

## Problem Statement

You are given a **0-indexed** string `blocks` of length `n`, where `blocks[i]` is either `'W'` or `'B'`, representing the color of the `ith` block. The characters `'W'` and `'B'` denote the colors white and black, respectively.

You are also given an integer `k`, which is the desired number of **consecutive** black blocks.

In one operation, you can **recolor** a white block such that it becomes a black block.

Return*the **minimum** number of operations needed such that there is at least **one** occurrence of*`k`_consecutive black blocks._

**Example 1:**

```
Input: blocks = "WBBWWBBWBW", k = 7
Output: 3
Explanation:
One way to achieve 7 consecutive black blocks is to recolor the 0th, 3rd, and 4th blocks
so that blocks = "BBBBBBBWBW".
It can be shown that there is no way to achieve 7 consecutive black blocks in less than 3 operations.
Therefore, we return 3.
```

**Example 2:**

```
Input: blocks = "WBWBBBW", k = 2
Output: 0
Explanation:
No changes need to be made, since 2 consecutive black blocks already exist.
Therefore, we return 0.
```

**Constraints:**

- `n == blocks.length`
- `1 <= n <= 100`
- `blocks[i]` is either `'W'` or `'B'`.
- `1 <= k <= n`

## Approach 1: Brute Force

<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    int minimumRecolors(string blocks, int k) {
        int n = blocks.size(), ans = 1e9;
		// the idea is to try all positions as a starting point
        for (int i = 0; i + k <= n; i++) {
		    // count the number of 'W' in a given window size `k`
            int cnt = 0;
            for (int j = 0; j < k; j++) {
			    // if it is 'W', we can recolor it
                if (blocks[i + j] == 'W') {
                    cnt += 1;
                }
            }
            // keep track of the min value
            ans = min(ans, cnt);
        }
        return ans;
    }
};
```
